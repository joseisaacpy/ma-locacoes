export const headerDesktopAnimation = {
  initial: { y: -200 },
  animate: { y: 0 },
  transition: {
    type: "spring",
    stiffness: 150,
  },
};

export const headerMobileAnimation = {
  initial: { y: 200 },
  animate: { y: 0 },
  transition: {
    type: "spring",
    stiffness: 150,
  },
};
