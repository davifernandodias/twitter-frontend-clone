"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-around font-bold">
    <Link href="/" className="flex flex-col gap-2">
      <span>Para você</span>
      <hr
        className={`${
          pathname === "/"
            ? "border-0 h-1  rounded-full bg-blue-500"
            : "border-0"
        }`}
      />
    </Link>
    <Link href="/following" className="flex flex-col gap-2">
      <span>Seguindo</span>
      <hr
        className={`${
          pathname === "/following"
            ? "border-0 h-1  rounded-full bg-blue-500"
            : "border-0"
        }`}
      />
    </Link>
    <Link href="/newsletter" className="flex flex-col gap-2">
      <span>TechTalent</span>
      <hr
        className={`${
          pathname === "/newsletter"
            ? "border-0 h-1  rounded-full bg-blue-500"
            : "border-0"
        }`}
      />
    </Link>
  </nav>
  );
}
