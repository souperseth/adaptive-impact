'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import styles from "./styles.module.css";
import logo from '/logo.svg';
import { usePathname } from 'next/navigation';

const links = [
	{ link: "/", label: "Home", current: true },
	{ link: "/story", label: "Story and Founders", current: false },
	{ link: "/contact", label: "Contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className={styles.navbar}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img src="/logo.svg" className="svg" alt="My SVG Image" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {links.map((item) => {
                  const isActive = (pathname === item.link) || (pathname.startsWith(item.link) && item.link !== "/");
                  return (
                    <Link href={item.link} key={item.label} className={classNames(
                      isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {links.map((item) => {
            const isActive = (pathname === item.link) || (pathname.startsWith(item.link) && item.link !== "/");
            return (
              <DisclosureButton
                key={item.label}
                as={Link}
                href={item.link}
                className={classNames(
                  isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.label}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
