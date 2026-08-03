import { useEffect, useRef, useState } from 'react';
import VideoBackdrop from './VideoBackdrop';

/**
 * Scroll zone with a video behind content.
 * For a soft hero → body handoff: keep the body video always on underneath,
 * and fade the hero sticky video out with a bottom mask (true crossfade).
 */
export default function StickyVideoZone({
  src,
  opacity = 0.35,
  overlayClassName = 'bg-gradient-to-b from-navy/90 via-navy/80 to-navy/90',
  cover = 'sticky',
  priority = false,
  /** Keep fixed video mounted and visible (body layer under the hero) */
  alwaysOn = false,
  /** Fade hero video to transparent at the bottom so the body video shows through */
  fadeOutBottom = false,
  className = '',
  children,
}) {
  const zoneRef = useRef(null);
  const [active, setActive] = useState(cover !== 'fixed' || alwaysOn);

  useEffect(() => {
    if (cover !== 'fixed' || alwaysOn) return undefined;
    const el = zoneRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: '0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [cover, alwaysOn]);

  const maskStyle = fadeOutBottom
    ? {
        WebkitMaskImage:
          'linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,0.55) 78%, transparent 100%)',
        maskImage:
          'linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,0.55) 78%, transparent 100%)',
      }
    : undefined;

  const videoChrome = (
    <>
      <VideoBackdrop src={src} opacity={opacity} priority={priority || cover === 'sticky'} />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </>
  );

  const stackClass = cover === 'fixed' ? 'z-0' : 'z-20';

  return (
    <div ref={zoneRef} className={`relative ${stackClass} ${className}`}>
      {cover === 'fixed' ? (
        <div
          className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
          style={{
            opacity: active || alwaysOn ? 1 : 0,
            visibility: active || alwaysOn ? 'visible' : 'hidden',
          }}
          aria-hidden
        >
          {videoChrome}
        </div>
      ) : (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="sticky top-0 h-screen w-full" style={maskStyle}>
            {videoChrome}
          </div>
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
