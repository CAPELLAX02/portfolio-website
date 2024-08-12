'use client';

import CountUp from 'react-countup';

const stats = [
  {
    num: 12,
    text: 'Years of experience.',
  },
  {
    num: 23,
    text: 'Projects completed.',
  },
  {
    num: 10,
    text: 'Technologies mastered.',
  },
];

const Stats = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col gap-4 items-center justify-center'
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className='text-4xl xl:text-6xl font-extrabold'
                />
                <p
                  className={`text-lg text-center -mt-2 ${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
