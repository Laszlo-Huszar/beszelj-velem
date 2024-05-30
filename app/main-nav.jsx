import Link from 'next/link';
import Container from './components/container';
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import kippKoppLogo from '../public/kipp-kopp-ovoda-logo-300x300.jpg';

import MobileMenuLink from './mobile-menu-link';

const menuItems = [
  // { item: 'Bemutatkozás', href: '#' },
  { item: 'Kipp-Kopp Óvoda', href: '/kipp-kopp' },
  { item: 'Beszélj Velem Óvoda', href: '/beszelj-velem' },
  { item: 'Beiratkozás', href: '/beiratkozas' },
  { item: 'Kapcsolat', href: '/kapcsolat' },
];

export default function MainNav() {
  return (
    <header className="sticky top-0 inset-x-0 h-16 bg-gray-50 dark:bg-gray-900 shadow-md dark:shadow-none z-50">
      <Container className="h-full divide-y dark:divide-gray-700">
        <div className="flex lg:justify-between items-center h-16">
          <div>
            <Link className="flex items-center" href="/">
              <Image src={kippKoppLogo} width={40} alt="Kipp-kopp óvoda logó" />
              <span className="ms-2">Óvoda és Fejlesztőközpont</span>
            </Link>
          </div>
          <nav className="hidden lg:flex gap-8 items-center text-gray-600 dark:text-gray-400">
            {menuItems &&
              menuItems.map((menuItem, index) => (
                <Link
                  className="text-sm font-semibold"
                  href={menuItem.href}
                  key={index}
                >
                  {menuItem.item}
                </Link>
              ))}
          </nav>
          <div className="grow flex lg:hidden justify-end">
            <Popover className="relative">
              <PopoverButton>
                <Bars3Icon className="w-6 h-6" />
              </PopoverButton>
              <PopoverOverlay className="fixed inset-0 bg-black/85" />
              <PopoverPanel className="fixed inset-0 bg-stone-900">
                <nav className="p-4 text-lg">
                  <div className="flex justify-end">
                    <CloseButton>
                      <XMarkIcon className="w-6 h-6" />
                    </CloseButton>
                  </div>
                  <ul className="mt-8 flex flex-col items-center space-y-8">
                    <li>
                      <MobileMenuLink href="/">
                        Óvoda és Fejlesztőközpont
                      </MobileMenuLink>
                    </li>
                    <li>
                      <MobileMenuLink href="/kipp-kopp">
                        Kipp-kopp óvoda
                      </MobileMenuLink>
                    </li>
                    <li>
                      <MobileMenuLink href="/beszelj-velem">
                        Beszélj Velem Fejlesztő óvoda
                      </MobileMenuLink>
                    </li>
                    <li>
                      <MobileMenuLink href="/beiratkozas">
                        Beiratkozás
                      </MobileMenuLink>
                    </li>
                    <li>
                      <MobileMenuLink href="/kapcsolat">
                        Kapcsolat
                      </MobileMenuLink>
                    </li>
                    <li>
                      <MobileMenuLink href="/nyari-tabor">
                        Nyári tábor 2024
                      </MobileMenuLink>
                    </li>
                  </ul>
                </nav>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
        {/* <div className="flex items-center lg:hidden h-16">
          <Popover className="relative lg:hidden">
            <PopoverButton>
              <Bars3Icon className="w-6 h-6 stroke-gray-600 dark:stroke-gray-400" />
            </PopoverButton>
            <PopoverOverlay className="fixed inset-0 bg-black/90" />
            <PopoverPanel className="fixed inset-y-0 left-0 w-80 bg-white dark:bg-gray-800">
              Panel
            </PopoverPanel>
          </Popover>
        </div> */}
      </Container>
    </header>
  );
}
