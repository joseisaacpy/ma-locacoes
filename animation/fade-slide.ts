import { Variants } from "framer-motion";

export const fadeSlide = (delay = 0): Variants => ({
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});
