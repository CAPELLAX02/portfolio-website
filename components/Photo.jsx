'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Photo = () => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-[370px] xl:h-[370px] 2xl:w-[420px] 2xl:h-[420px]"
        >
            {/* Outer Ring 1 */}
            <motion.div
                className="absolute inset-0 m-auto w-full h-full border-2 border-dashed border-gray-700 rounded-full opacity-40"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />

            {/* Outer Ring 2 */}
            <motion.div
                className="absolute inset-0 m-auto w-[95%] h-[95%] border-4 border-dashed border-gray-600 rounded-full opacity-30"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            />

            {/* Outer Ring 3 */}
            <motion.div
                className="absolute inset-0 m-auto w-[90%] h-[90%] border-8 border-dashed border-gray-500 rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            />

            {/* Photo */}
            <div className="absolute inset-0 m-auto w-[78%] h-[78%] rounded-full overflow-hidden z-10 shadow-md">
                <Image
                    src="/assets/photo.jpg"
                    alt="Profile"
                    fill
                    className="object-cover grayscale"
                />
            </div>
        </motion.div>
    );
};

export default Photo;
