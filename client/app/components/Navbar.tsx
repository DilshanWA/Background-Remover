// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="bg-black text-white rounded-md w-7 h-7 flex items-center justify-center font-bold text-sm">
            bg
          </div>
          <span className="text-xl font-semibold text-black">RemoveBg</span>
        </div>

        {/* Center Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="#">Product</Link>
          <Link href="#">Solutions</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Enterprise</Link>
          <Link href="#">Pricing</Link>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="#"
            className="bg-gray-100 text-black px-4 py-1.5 rounded-md hover:bg-gray-200 transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
}
