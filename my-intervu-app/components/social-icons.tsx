import * as React from "react";
import { IconSvgProps } from "@/types";

export const GoogleIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AppleIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M16.462 16.965c-.532.998-1.098 1.93-1.99 2.93-1.293 1.462-2.637 1.67-4.055 1.67-1.37 0-2.667-.5-4.185-.53-1.587-.03-3.007.53-4.346 1.53-.18.15-.36.15-.54 0-3.12-2.83-4.235-7.02-3.097-11.08 1.11-3.95 4.48-6.78 8.467-6.95 1.55.05 2.935.63 4.155 1.76-3.48 1.93-2.945 6.58 1.057 7.93 1.13.38 2.218.32 3.306-.15.285-.13.532-.32.778-.53.18-.15.36-.15.54 0 .6.53 1.098 1.13 1.587 1.76-.532.4-1.04.83-1.675 1.66z"
        fill="currentColor"
      />
      <path
        d="M12.017 3.4c.085-1.773 1.502-3.305 3.292-3.38 0 1.773-1.417 3.38-3.292 3.38z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FacebookIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
        fill="currentColor"
      />
    </svg>
  );
};