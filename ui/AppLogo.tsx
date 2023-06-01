import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Logo from '../public/logos/logo.png';

export default function AppLogo({
  className,
  src = Logo,
}: {
  className?: string;
  src?: any;
}) {
  return (
    <div className={clsx('flex', className)}>
      <Image
        src={src}
        alt="Formzillion Logo"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
