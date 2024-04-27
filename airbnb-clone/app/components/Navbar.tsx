import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">15:00</Link>
      </div>
    </nav>
  );
}

export default Navbar;
