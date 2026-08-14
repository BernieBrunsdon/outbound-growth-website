import { useEffect, useRef, useState } from 'react';

const WIDGET_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

export default function CalendlyEmbed({ url, className = '' }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.Calendly || !containerRef.current) return;
      containerRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({ url, parentElement: containerRef.current });
      setStatus('ready');
    };

    if (window.Calendly) {
      init();
      return () => {
        cancelled = true;
      };
    }

    let script = document.querySelector(`script[src="${WIDGET_SCRIPT}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = WIDGET_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }

    const onError = () => !cancelled && setStatus('error');
    script.addEventListener('load', init);
    script.addEventListener('error', onError);

    return () => {
      cancelled = true;
      script.removeEventListener('load', init);
      script.removeEventListener('error', onError);
    };
  }, [url]);

  return (
    <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-surface/70 ${className}`}>
      <div ref={containerRef} className="h-[1000px] sm:h-[780px] w-full min-w-[320px]" />

      {status !== 'ready' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-muted">
            {status === 'error' ? 'The calendar could not load.' : 'Loading available times…'}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            Open the booking page
          </a>
        </div>
      ) : null}
    </div>
  );
}
