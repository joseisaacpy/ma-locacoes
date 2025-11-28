"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { linksNavigation } from "@/data/linksNavigation";

export default function Header() {
  return (
    <header>
      <motion.nav
        className="flex items-center justify-between px-4 py-5 w-full bg-blue-default"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1000 }}
        >
          <Link href="/">
            <Image
              src="/assets/images/next-logo.svg"
              alt="Logo"
              width={70}
              height={70}
              priority
            />
          </Link>
        </motion.div>

        {/* Whatsapp */}
        <a
          href=""
          title="Entre em contato"
          target="_blank"
          className="flex items-center justify-center md:hidden"
        >
          <motion.div whileHover={{ scale: 1.5 }}>
            <Image
              src="/assets/images/whatsapp-color.svg"
              alt="Ícone do Whatsapp"
              width={30}
              height={30}
            />
          </motion.div>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          {linksNavigation.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.path}
                className="font-semibold"
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Menu Mobile  */}
      <motion.div
        className="fixed z-50 bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
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
      </motion.div>
    </header>
  );
}
