import { Inter } from 'next/font/google';
import { Delius_Unicase } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import kippKoppLogo from './images/kipp-kopp-ovoda-logo-300x300.jpg';
import Link from 'next/link';
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MobileMenuLink from './mobile-menu-link';

const inter = Inter({ subsets: ['latin'] });
const concertOne = Delius_Unicase({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Beszélj velem óvoda',
  description: 'Óvoda és Fejlesztőközpont',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={`min-h-screen text-stone-300 bg-neutral-900 ${inter.className}`}
      >
        <div className="bg-lime-700 border-b border-lime-900">
          <div className="py-4 prose prose-lg prose-stone prose-invert max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center">
              Nyári tábor 2024! Regisztráció{' '}
              <Link href="/nyari-tabor">itt</Link>!
            </p>
          </div>
        </div>

        <header className={`sticky top-0 inset-x-0 bg-lime-800 h-16 z-40`}>
          <div className="flex items-center gap-4 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <Link className="flex items-center" href="/">
                <Image
                  src={kippKoppLogo}
                  width={40}
                  alt="Kipp-kopp óvoda logó"
                />
                <span className="ms-2">Óvoda és Fejlesztőközpont</span>
              </Link>
            </div>
            <nav className="grow hidden lg:flex justify-end text-sm">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link href="/kipp-kopp">Kipp-kopp óvoda</Link>
                </li>
                <li>
                  <Link href="/beszelj-velem">
                    Beszélj Velem Fejlesztő óvoda
                  </Link>
                </li>
                <li>
                  <Link href="/beiratkozas">Beiratkozás</Link>
                </li>
                <li>
                  <Link href="/kapcsolat">Kapcsolat</Link>
                </li>
              </ul>
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
                    </ul>
                  </nav>
                </PopoverPanel>
              </Popover>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col gap-4 prose prose-sm lg prose-stone prose-invert">
              <Link href="#">Adatvédelem</Link>
              <Link href="#">Süti tájékoztató</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
