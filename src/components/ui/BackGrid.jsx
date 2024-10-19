import { useGSAP } from "@gsap/react";
import gsap from "gsap";




export function GridBackground() {
  useGSAP(()=>{
    gsap.fromTo("#about",{
      x:250,
      opacity:0,
      duration:2.5,
      scaleX:0.2,
    },{
      x:0,
      opacity:1,
      ease:"bounce.inOut",
      rotateZ:360,
      duration:2.5,
      scaleX:1,
    })
  },[])
  return (
    <div
      className="h-[50rem] w-full bg-slate-900 dark:bg-slate-900 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center items-center">
      
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">hello</div>
      <div className="relative z-10">
      <p
        className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Hlulani Bliss Mahlathi
      </p>
        <h1 className="md:text-3xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Full-Stack Web Developer | Mobile App Developer | Software Developer
        </h1>
        <p className="text-3xl  md:text-2xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Building seamless digital experiences through web, mobile, and software solutions.
        </p>
        <div className="text-3xl flex justify-center items-center">
          <a href="https://www.facebook.com/bliss.mahlathi.9/" target="_blank">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white justify-center inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              let&apos;s Connect
            </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="#"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          </a>
          
        </div>
        <p id="about" className="text-2xl text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          I&apos;m Hlulani Bliss Mahlathi, a passionate full-stack web developer and software engineer 
          with expertise in building high-performance applications for businesses. I specialize in creating 
          functional, intuitive, and scalable solutions using modern web technologies.
          </p>
      </div>
      
    </div>
  );
}
