import Link from 'next/link';

export default function PrimaryLink({ className, href, children }) {
  return (
    <Link
      className={`text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800${
        className ? ' ' + className : ''
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
