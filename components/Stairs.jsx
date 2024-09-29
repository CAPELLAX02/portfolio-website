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
  '#E40303',
  '#FF8C00',
  '#FFED00',
  '#008026',
  '#004CFF',
  '#732982',
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
              backgroundColor: colors[index], // Renkleri dinamik olarak atayarak
              width: '16.66%', // Her bir div'in genişliği toplam genişliğin 1/6'sı
              height: '100%', // Yüksekliği tam ekran
              position: 'absolute', // Pozisyonlandırma türü
              left: `${16.66 * index}%`, // Sol kenardan itibaren her bir div için pozisyon ayarı
            }}
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
