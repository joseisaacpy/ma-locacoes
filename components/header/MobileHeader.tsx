"use client";

import { motion } from "framer-motion";
import { linksNavigation } from "@/data/linksNavigation";
import { headerMobileAnimation } from "@/animation/header";

export default function MobileHeader() {
  return (
    <motion.div
      className="fixed z-50 bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden"
      variants={headerMobileAnimation}
      initial="initial"
      animate="animate"
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
  );
}
