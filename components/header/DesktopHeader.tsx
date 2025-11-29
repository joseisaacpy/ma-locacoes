"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { linksNavigation } from "@/data/linksNavigation";
import { headerDesktopAnimation } from "@/animation/header";

export default function DesktopHeader() {
  return (
    <motion.nav
      className="flex items-center justify-between px-4 py-5 w-full bg-blue-default"
      variants={headerDesktopAnimation}
      initial="initial"
      animate="animate"
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }}>
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
            <Link href={link.path}>
              <motion.span
                className="font-semibold"
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
