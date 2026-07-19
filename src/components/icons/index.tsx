import { GradientIcon, type IconProps } from "./GradientIcon";

export function IconDashboard(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <rect x="3" y="3" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect
            x="13"
            y="3"
            width="8"
            height="6"
            rx="2"
            fill={`url(#${gid})`}
            stroke={`url(#${gid})`}
            strokeWidth="1.5"
          />
          <rect x="13" y="11" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="15" width="8" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </GradientIcon>
  );
}

export function IconWorkflow(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <circle cx="4.5" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="19.5" cy="6" r="2.5" fill={`url(#${gid})`} stroke={`url(#${gid})`} strokeWidth="1.5" />
          <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M7 6H17M6.2 8.3 10.5 16M17.8 8.3 13.5 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </GradientIcon>
  );
}

export function IconInvoice(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <path
            d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M15 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16.5" cy="17.5" r="3" fill={`url(#${gid})`} />
          <path
            d="M15.2 17.6 16.2 18.6 18 16.6"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </GradientIcon>
  );
}

export function IconTeam(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17" cy="9.5" r="2.6" fill={`url(#${gid})`} stroke={`url(#${gid})`} strokeWidth="1.5" />
          <path
            d="M3.5 20c.6-3.4 3-5.4 5.5-5.4s4.9 2 5.5 5.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.5 15.2c2.1.2 3.9 1.9 4.4 4.8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </GradientIcon>
  );
}

export function IconCloud(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <path
            d="M7 18.5a4.5 4.5 0 0 1-.5-8.97 5.5 5.5 0 0 1 10.6-1.9A4 4 0 0 1 17 18.5H7Z"
            fill={`url(#${gid})`}
            fillOpacity="0.15"
            stroke={`url(#${gid})`}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 13.5 12 11.5 14 13.5M12 11.8V17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </GradientIcon>
  );
}

export function IconChartUp(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <path d="M4 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="7" y="13" width="2.6" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3" />
          <rect
            x="12"
            y="9"
            width="2.6"
            height="9"
            rx="0.8"
            fill={`url(#${gid})`}
            stroke={`url(#${gid})`}
            strokeWidth="1.3"
          />
          <rect x="17" y="6" width="2.6" height="12" rx="0.8" stroke="currentColor" strokeWidth="1.3" />
        </>
      )}
    </GradientIcon>
  );
}

export function IconBell(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <path
            d="M12 3.5c-2.2 0-4 1.8-4 4v3.2c0 .9-.34 1.75-.95 2.4L6 14.5h12l-1.05-1.4a3.4 3.4 0 0 1-.95-2.4V7.5c0-2.2-1.8-4-4-4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 17.5a2.5 2.5 0 0 0 5 0"
            stroke={`url(#${gid})`}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      )}
    </GradientIcon>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M3.7 12h16.6M12 3.7c2.2 2.3 3.4 5.2 3.4 8.3s-1.2 6-3.4 8.3c-2.2-2.3-3.4-5.2-3.4-8.3s1.2-6 3.4-8.3Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="2.4" fill={`url(#${gid})`} />
        </>
      )}
    </GradientIcon>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <path
            d="M12 3.3 19 6v6c0 4.5-2.9 7.6-7 8.7-4.1-1.1-7-4.2-7-8.7V6l7-2.7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 12.2 11.2 14.4 15.3 10"
            stroke={`url(#${gid})`}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </GradientIcon>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <GradientIcon {...props}>
      {(gid) => (
        <>
          <path
            d="m12 3 8 4.3-8 4.3-8-4.3L12 3Z"
            fill={`url(#${gid})`}
            fillOpacity="0.18"
            stroke={`url(#${gid})`}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m4 12 8 4.3 8-4.3M4 16.3 12 20.6l8-4.3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </GradientIcon>
  );
}
