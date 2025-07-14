import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const colors = [
  '#9ca3af',
  '#6b7280',
  '#4b5563',
  '#374151',
  '#1f2937',
  '#111827',
];

console.log(colors[0]);

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            style={{
              backgroundColor: colors[index],
              width: '16.66%',
              height: '100%',
              position: 'absolute',
              left: `${16.66 * index}%`,
            }}
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
