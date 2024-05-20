'use client';

import { CloseButton } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function KippKoppAsideLink({ href, children }) {
  const pathname = usePathname();

  return (
    <CloseButton
      as={Link}
      href={href}
      className={`inline-block w-full px-4 my-2 border-s-2 transition-colors ${
        pathname === href ? 'border-sky-600 text-sky-400' : 'border-transparent'
      } hover:text-sky-400`}
    >
      {children}
    </CloseButton>
  );
}
