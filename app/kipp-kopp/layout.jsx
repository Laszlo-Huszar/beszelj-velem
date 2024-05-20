import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import KippKoppAside from './kipp-kopp-aside';

export default function BeszeljVelemLayout({ children }) {
  return (
    <div className="bg-sky-950">
      <Popover className="sticky top-16 sm:hidden bg-stone-900 px-4 sm:px-6 lg:px-8 flex items-center py-2">
        <PopoverButton className="flex items-center gap-4">
          <Bars3CenterLeftIcon className="w-6 h-6" />
          Kipp-Kopp Óvoda menü
        </PopoverButton>
        <PopoverOverlay className="fixed inset-0 bg-black/85" />
        <PopoverPanel className="absolute left-0 top-0 bg-stone-900/90 w-full">
          <KippKoppAside />
        </PopoverPanel>
      </Popover>
      <div className="flex gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <aside className="hidden sm:block shrink-0 w-48">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-auto py-12">
            <KippKoppAside />
          </div>
        </aside>
        <main className="grow">{children}</main>
      </div>
    </div>
  );
}
