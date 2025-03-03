import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 mt-12 text-center">
      <h1
        className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-indigo-600 
            animate-bounce dark:text-indigo-400"
      >
        404
      </h1>

      <div className="relative mt-[-40px]">
        <img
          src="/kyle.png"
          alt="Lost Kyle"
          className="w-64 md:w-80 animate-fade-in"
        />
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-400 dark:text-gray-200">
        &quot;Oh crap, I think we&apos;re totally lost!&quot;
      </h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        Maybe it’s time to head back before Cartman starts blaming someone.
      </p>

      <Link to="/">
        <div className="mt-4 w-36 p-4 bg-indigo-500 text-gray-800 rounded-full animate-pulse text-center">
          Take Me Home
        </div>
      </Link>
    </div>
  );
};

export default NotFoundPage;
