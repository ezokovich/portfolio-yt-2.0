import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[],
}

function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center z-0'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, i) => (
                    <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-x-5 items-center justify-center p-20 mt-5 md:p-40  h-screen ">
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            alt="project" src={urlFor(project.image).url()} className="h-[300px] w-[600px]" />

                        <div className='space-y-1 px-0 md:px-10 max-w-6xl '>
                            <h4 className='text-2xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                {project?.title}
                            </h4>

                            <div className="flex !space-x-2 items-center justify-center">
                                {project?.technologies.map(techonology => (
                                    <Image key={techonology._id}
                                        loader={() => `${urlFor(techonology.image).url()}`} src={urlFor(techonology.image).url()}
                                        alt="" width={20} height={20} />

                                ))}
                            </div>

                            <p className='text-lg text-center md:text-left'>
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'>
            </div>
        </motion.div>

    )
}

export default Projects