"use client";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black px-6 sm:px-10 lg:px-24 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Rajan Jasani
        </p>

        {/* Center (optional branding line) */}
        <p className="text-sm text-gray-600 italic">
          Engineer. Builder. Systems thinker.
        </p>

        {/* Right */}
        <p className="text-sm text-gray-500">
          Crafted with precision.
        </p>

      </div>
    </footer>
  );
}
