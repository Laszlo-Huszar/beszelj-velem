'use client';

import { CloseButton } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenuLink({ href, children }) {
  const pathname = usePathname();

  return (
    <CloseButton
      as={Link}
      href={href}
      className={`inline-block w-full px-4 my-2 border-s-2 ${
        pathname === href
          ? 'border-indigo-600 text-indigo-400'
          : 'border-transparent'
      } hover:text-indigo-400`}
    >
      {children}
    </CloseButton>
  );
}
