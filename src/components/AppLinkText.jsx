import { CLIENT_APP_URL } from '../lib/appUrl';

const SPLIT_RE =
  /(The OG Pulse Transparency Dashboard|OG Pulse Transparency Dashboard|OG Pulse Real-Time Dashboard|OG Pulse Monitoring|OG Pulse Dashboard|OG Pulse Tracker|real-time tracking engine|OG Pulse)/g;

const LINKED = new Set([
  'The OG Pulse Transparency Dashboard',
  'OG Pulse Transparency Dashboard',
  'OG Pulse Real-Time Dashboard',
  'OG Pulse Monitoring',
  'OG Pulse Dashboard',
  'OG Pulse Tracker',
  'real-time tracking engine',
  'OG Pulse',
]);

export default function AppLinkText({
  children,
  className,
  linkClassName = 'text-primary underline decoration-primary/40 underline-offset-2 hover:text-blue-700 font-medium',
}) {
  const url = CLIENT_APP_URL;
  if (children == null || typeof children !== 'string') {
    return children;
  }

  const parts = children.split(SPLIT_RE);
  const nodes = parts.map((part, i) => {
    if (!part) {
      return null;
    }
    if (LINKED.has(part)) {
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {part}
        </a>
      );
    }
    return part;
  });

  if (className) {
    return <span className={className}>{nodes}</span>;
  }

  return <>{nodes}</>;
}
