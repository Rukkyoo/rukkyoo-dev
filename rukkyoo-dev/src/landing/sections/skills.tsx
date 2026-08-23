import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from "@/components/lightswind/3d-scroll-trigger";

const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'start start'],
    });
    const headingScale = useTransform(scrollYProgress, [0, 1], [2.4, 1]);
    const headingX = useTransform(scrollYProgress, [0, 1], ['var(--skills-heading-entry-x)', '0px']);
    const headingY = useTransform(scrollYProgress, [0, 1], ['24vh', '0px']);

    return (
        <main ref={sectionRef} className='flex h-screen flex-col justify-center gap-12 bg-black px-6 pt-20 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:px-20'>
            <div className="flex flex-col gap-10">
                <motion.h1
                    className='max-w-xl origin-center self-center text-center text-6xl leading-[0.9] sm:text-7xl lg:self-start lg:text-left lg:text-8xl'
                    style={{ scale: headingScale, x: headingX, y: headingY }}
                >
                    What I work with
                </motion.h1>
                <p className="max-w-md text-center text-base leading-relaxed text-white/60 italic lg:text-left">"A jack of all trades is a master of none, but oftentimes better than a master of one."</p>
                {/* <video src="/laptop-keyboard.mp4" className='aspect-video w-full rounded-2xl object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label='Laptop Keyboard'></video> */}
            </div>
            {/* Skills Container */}
            <div className='w-full max-w-xl overflow-hidden'>
                <ThreeDScrollTriggerContainer className='space-y-10 py-4'>
                    <div className='space-y-4'>
                        <h2 className='px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70'>Programming languages</h2>
                        <ThreeDScrollTriggerRow
                            baseVelocity={3}
                            className='[&>div]:flex [&>div]:items-center [&>div]:gap-10'
                        >
                            <IoLogoJavascript className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-yellow-400 hover:grayscale-0' aria-label='JavaScript' />
                            <SiTypescript className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-blue-400 hover:grayscale-0' aria-label='TypeScript' />
                        </ThreeDScrollTriggerRow>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70'>Frameworks and tools</h2>
                        <ThreeDScrollTriggerRow
                            baseVelocity={4}
                            direction={-1}
                            className='[&>div]:flex [&>div]:items-center [&>div]:gap-10'
                        >
                            <FaReact className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-cyan-400 hover:grayscale-0' aria-label='React' />
                            <RiNextjsFill className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-gray-300 hover:grayscale-0' aria-label='Next.js' />
                            <FaNodeJs className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-green-500 hover:grayscale-0' aria-label='Node.js' />
                            <SiExpress className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-gray-300 hover:grayscale-0' aria-label='Express' />
                            <FaGitAlt className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-orange-600 hover:grayscale-0' aria-label='Git' />
                            <FaGithub className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-gray-300 hover:grayscale-0' aria-label='GitHub' />
                            <SiMongodb className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-green-400 hover:grayscale-0' aria-label='MongoDB' />
                            <SiPostman className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-orange-400 hover:grayscale-0' aria-label='Postman' />
                            <IoLogoFirebase className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-amber-400 hover:grayscale-0' aria-label='Firebase' />
                        </ThreeDScrollTriggerRow>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70'>Styling and animation</h2>
                        <ThreeDScrollTriggerRow
                            baseVelocity={3}
                            className='[&>div]:flex [&>div]:items-center [&>div]:gap-10'
                        >
                            <FaHtml5 className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-orange-500 hover:grayscale-0' aria-label='HTML5' />
                            <FaCss3Alt className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-blue-500 hover:grayscale-0' aria-label='CSS3' />
                            <RiTailwindCssFill className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-sky-400 hover:grayscale-0' aria-label='Tailwind CSS' />
                            <FaSass className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-pink-400 hover:grayscale-0' aria-label='Sass' />
                            <FiFramer className='group h-12 w-12 shrink-0 text-white grayscale transition-all duration-300 hover:text-gray-300 hover:grayscale-0' aria-label='Framer' />
                        </ThreeDScrollTriggerRow>
                    </div>
                </ThreeDScrollTriggerContainer>
            </div>
        </main>
    )
}

export default Skills