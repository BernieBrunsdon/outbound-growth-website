import { useEffect, useRef, useState } from 'react';
import VideoBackdrop from './VideoBackdrop';

/**
 * Scroll zone with a video behind content.
 * - default: sticky viewport video (fine for short zones)
 * - cover="fixed": fixed viewport video while this zone is on screen
 *   (stays covered all the way to the bottom of long page sections)
 */
export default function StickyVideoZone({
  src,
  poster = '/images/og-pulse-dashboard-preview.png',
  opacity = 0.35,
  overlayClassName = 'bg-gradient-to-b from-navy/90 via-navy/80 to-navy/90',
  layered = false,
  cover = 'sticky',
  className = '',
  children,
}) {
  const zoneRef = useRef(null);
  const [active, setActive] = useState(cover !== 'fixed');

  useEffect(() => {
    if (cover !== 'fixed') return undefined;
    const el = zoneRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: '0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [cover]);

  const layers = layered ? (
    <>
      <VideoBackdrop
        src={src}
        poster={poster}
        opacity={opacity * 0.9}
        className="scale-105 origin-center"
      />
      <VideoBackdrop
        src={src}
        poster={poster}
        opacity={opacity * 0.5}
        className="scale-125 origin-[30%_40%]"
      />
      <VideoBackdrop
        src={src}
        poster={poster}
        opacity={opacity * 0.4}
        className="scale-150 origin-[70%_60%] mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,18,32,0.5)_100%)]" />
    </>
  ) : (
    <VideoBackdrop src={src} poster={poster} opacity={opacity} />
  );

  const videoChrome = (
    <>
      {layers}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </>
  );

  return (
    <div ref={zoneRef} className={`relative isolate ${className}`}>
      {cover === 'fixed' ? (
        active ? (
          <div
            className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
            aria-hidden
          >
            {videoChrome}
          </div>
        ) : null
      ) : (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="sticky top-0 h-screen w-full">{videoChrome}</div>
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
