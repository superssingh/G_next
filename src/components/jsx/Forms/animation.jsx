import React, { useState } from 'react';

import { Transition } from 'react-transition-group';
// import { motion } from 'framer-motion';
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
  opacity: 0,
  // transform: 'scale(0)',
  // transform: 'translateY(-100%)',
  transform: 'scaleY(0)',
};

// const transitionStyles = {
//   entering: { opacity: 0, transform: 'scale(0)' },
//   entered: { opacity: 1, transform: 'scale(1)' },
// };

// const defaultStyle = {
//   transition: `all ${duration}ms ease-in-out`,
//   transform: 'translateY(-100%)',
// };

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'scaleY(0)',
    // transform: 'translateY(-100%)',
  },
  entered: {
    opacity: 1,
    transform: 'scaleY(1)',
    // transform: 'translateY(0)',
  },
};

function AnimationEx() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="h-fit bg-white">
      <button
        className=" rounded-lg bg-blue-500 py-2 px-4 font-medium text-white hover:bg-blue-700"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle
      </button>
      <Transition
        in={isVisible}
        timeout={duration}
      >
        {(state) => (
          <div
            className="relative h-fit w-fit rounded-lg bg-gray-200 p-4"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <p className="text-gray-800">This is the content of the box</p>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default AnimationEx;
