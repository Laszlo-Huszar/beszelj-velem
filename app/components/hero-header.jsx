export default function HeroHeader({ className, children }) {
  return (
    <h1
      className={`text-gray-900 dark:text-white text-5xl sm:text-6xl font-extrabold tracking-tight${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </h1>
  );
}
