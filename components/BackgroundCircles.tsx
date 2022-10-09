import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center'>
            <div className='absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping' />
            <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
            <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping' />
            <div className='absolute border rounded-full border-[#F7AB0A] opacity-20 h-[450px] w-[450px] mt-52 animate-pulse' />
            <div className='absolute border rounded-full border-[#333333] opacity-20 h-[600px] w-[600px] mt-52 ' />
        </motion.div>
    )
}

export default BackgroundCircles