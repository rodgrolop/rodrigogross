import React from "react";
import {
  m as motion,
  AnimationFeature,
  MotionConfig,
  ExitFeature,
} from "framer-motion";

const FramerMotionContainer = ({ route, children }) => (
  <MotionConfig features={[AnimationFeature, ExitFeature]}>
    <motion.div
      key={route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  </MotionConfig>
);

export default FramerMotionContainer;
