import * as React from "react";
import { IconSvgProps } from "@/src/types";

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
        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
        fill="currentColor"
      />
    </svg>
  );
};