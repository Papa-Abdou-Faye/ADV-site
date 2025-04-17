import { Variants } from "framer-motion";

export const leftAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    transition: { duration: 1, ease: "easeOut" }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: "anticipate",
      staggerChildren: 0.2
    }
  }
};

export const rightAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 1,
      ease: "backOut",
      delay: 0.3
    }
  }
};

export const itemAnimation: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 }
  }
};

export const floatAnimation: Variants = {
  float: {
    y: [-10, 10],
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }
};