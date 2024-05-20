import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/react';
import BeszeljVelemAside from './beszelj-velem-aside';

export default function BeszeljVelemLayout({ children }) {
  return (
    <div className="bg-pink-950">
      <Popover className="relative sm:hidden">
        <PopoverButton>S</PopoverButton>
        <PopoverOverlay className="fixed inset-0 bg-black/85" />
        <PopoverPanel className="absolute top-0 bg-white w-full">
          <BeszeljVelemAside />
        </PopoverPanel>
      </Popover>
      <div className="flex gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <aside className="hidden sm:block shrink-0 w-48">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-auto py-12">
            <BeszeljVelemAside />
          </div>
        </aside>
        <main className="grow">{children}</main>
      </div>
    </div>
  );
}
