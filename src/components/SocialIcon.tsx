import { Mail } from "lucide-react";
import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement> & {
  icon: string;
  size?: number;
};

function InstagramIcon({ size = 17, ...props }: Omit<SocialIconProps, "icon">) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect height="16" rx="4" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.25" cy="6.75" fill="currentColor" r="1.15" />
    </svg>
  );
}

function FacebookIcon({ size = 17, ...props }: Omit<SocialIconProps, "icon">) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.5 8.6V7.2c0-.7.5-.9.9-.9h1.7V3.4L14.8 3.4c-3 0-4.3 1.8-4.3 4v1.2H8v3.2h2.5V21h3.4v-9.2h2.7l.4-3.2h-3.1Z" />
    </svg>
  );
}

export default function SocialIcon({ icon, size = 17, ...props }: SocialIconProps) {
  if (icon === "instagram") {
    return <InstagramIcon size={size} {...props} />;
  }

  if (icon === "facebook") {
    return <FacebookIcon size={size} {...props} />;
  }

  return <Mail size={size} {...props} />;
}
