import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Full-bleed muted looping video (or still if prefers-reduced-motion).
 */
export default function VideoBackdrop({
  src,
  poster = '/images/og-pulse-dashboard-preview.png',
  opacity = 0.35,
  className = '',
}) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {reduceMotion ? (
        <Image src={poster} alt="" fill priority={false} className="object-cover" style={{ opacity }} />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
