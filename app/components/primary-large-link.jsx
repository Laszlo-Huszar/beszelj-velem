import Link from 'next/link';

export default function PrimaryLargeLink({ className, href, children }) {
  return (
    <Link
      className={`px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800${
        className ? ' ' + className : ''
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
