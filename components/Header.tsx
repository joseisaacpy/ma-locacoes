"use client";
import Link from "next/link";
import Image from "next/image";
import { linksNavigation } from "@/data/linksNavigation";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between px-4 py-5 w-full bg-blue-default">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/images/next-logo.svg"
            alt="Logo"
            width={70}
            height={70}
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          {linksNavigation.map((link) => (
            <li key={link.name}>
              <a href={link.path} className="hover:text-white font-semibold">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Mobile  */}
        <div className="fixed z-50 bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden">
          <ul className="flex justify-around py-2">
            {linksNavigation.map((link) => (
              <li key={link.name}>
                <a href={link.path} className="flex flex-col items-center">
                  <link.icon />
                  <span className="text-xs">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
