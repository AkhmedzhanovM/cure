export const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1], delay: 0.2 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
    y: "10vh",
  },
  enter: {
    opacity: 1,
    transition: { duration: 1 },
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.5, delay: 0.1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const zoomOut = {
  initial: {
    scale: 2,
  },
  enter: {
    scale: 1,
    transition: { duration: 4 },
  },
};

export const navbarOpacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

export const up = {
  initial: {
    y: "10vh",
  },
  exit: {
    y: "0",
    transition: { duration: 0.5 },
  },
};

export const textUp = {
    initial: {
        y: "10vh",
        opacity: 0,
    },
    exit: {
        y: "0",
        opacity: 1,
        transition: {duration: 0.5, delay: 0.5},
    },
}

export const left = {
  initial: {
    x: "10vh",
  },
  exit: {
    x: "0",
    transition: {duration: 1},
  },
}

export const longLeft = {
  initial: {
    x: "100vh",
  },
  exit: {
    x: "0",
    transition: {duration: 1},
  },
}

export const textZoomOut = {
  initial: {
    scale: 1.5,
    opacity: 0,
  },
  exit: {
    scale: 1,
    opacity: 1,
    transition: {duration: 1},
  },
}