import { useEffect, useRef, useState } from 'react';

/**
 * Full-bleed muted looping video (navy fallback if prefers-reduced-motion).
 * Hero videos should paint immediately — no delayed fade-in from opacity 0.
 */
export default function VideoBackdrop({
  src,
  opacity = 0.35,
  className = '',
  priority = false,
}) {
  const videoRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const video = videoRef.current;
    if (!video) return undefined;

    const tryPlay = () => {
      const play = video.play();
      if (play && typeof play.catch === 'function') {
        play.catch(() => {});
      }
    };

    tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    return () => video.removeEventListener('loadeddata', tryPlay);
  }, [src, reduceMotion]);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-navy ${className}`} aria-hidden>
      {reduceMotion ? (
        <div className="absolute inset-0 bg-navy" style={{ opacity }} />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity }}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? 'auto' : 'metadata'}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
