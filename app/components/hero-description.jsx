export default function HeroDescription({ className, children }) {
  return (
    <p
      className={`text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </p>
  );
}
