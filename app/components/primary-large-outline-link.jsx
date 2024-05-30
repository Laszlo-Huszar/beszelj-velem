import Link from 'next/link';

export default function PrimaryLargeOutlineLink({ className, href, children }) {
  return (
    <Link
      className={`text-indigo-700 hover:text-white border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg px-5 py-3 text-center dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:hover:bg-indigo-500 dark:focus:ring-indigo-800${
        className ? ' ' + className : ''
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
