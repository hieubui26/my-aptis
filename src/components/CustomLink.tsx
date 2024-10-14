// components/CustomLink.tsx
import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link href={href} className={`${className}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
