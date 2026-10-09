
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-[#047F39]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        Sorry, the page you are looking for
        does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-[#047F39] px-6 py-3 font-semibold text-white transition hover:bg-[#047F39]"
      >
        Back to Home
      </Link>
    </div>
  );
}
