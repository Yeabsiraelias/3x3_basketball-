import React from 'react';

export interface BasketballIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function BasketballIcon({
  size = 24,
  className = '',
  strokeWidth = 2,
  ...props
}: BasketballIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2v20" />
      <path d="M4.93 4.93a10 10 0 0 1 0 14.14" />
      <path d="M19.07 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  );
}

export default BasketballIcon;

