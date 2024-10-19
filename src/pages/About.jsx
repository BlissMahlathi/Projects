import { myPicture } from "../constants"


const About = () => {
    
  return (
    <div id="about" className=" w-full overflow-x-hidden bg-slate-900 dark:bg-slate-900 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-screen flex  justify-center  text-slate-300">  
        <div className="">
        <h1 className="text-3xl text-center font-bold text-slate-100">About Me</h1>
        <div className="xl:flex justify-center items-center px-4 pt-3">
        <img 
        className="rounded-3xl xl:relative flex justify-center xl:left-0 "
        src={myPicture} width={450} height={480} alt="myPicture"/>
        <p className="text-xl text-center font-bold">
        Hi! I&apos;m Hlulani Bliss Mahlathi, a developer who loves turning ideas into real-world solutions. 
        With a background in web and mobile app development, I&apos;ve worked on diverse projects ranging from 
        dynamic websites to enterprise-level applications. My focus is on delivering impactful, 
        user-friendly solutions that align with clients&apos; goals. Whether it&apos;s front-end design, 
        back-end logic, or full-stack development, I thrive in bringing digital projects to life.<br/><br/>
        Over the years, I&apos;ve developed a deep understanding of technologies such as JavaScript, C, C#,
        React,Djongo, Express, Node.js, Python, C++, Next.js and database systems like MySQL and MongoDB. I&apos;ve worked with startups, 
        individual clients, and growing businesses, delivering custom solutions that drive growth.
        <br/><br/>
        Outside of coding, I’m passionate about learning new things, playing bass guitar, and enjoying 
        video games. Whether it’s jamming out some tunes or exploring new strategies in my favorite 
        games, these hobbies help keep my creativity flowing.
        </p>
        </div>
        <div 
          className="border max-md:hidden flex justify-center items-center 
                    absolute left-[80rem] top-[8%]  border-1 rounded-[50%]  w-[45%] h-[80%] -z-10">
          <div className="border flex justify-center items-center  border-1 overflow-x-hidden rounded-[50%] w-[80%] h-[80%] -z-10" >
              <div className="border border-1 rounded-[50%] w-[70%] h-[70%] overflow-x-hidden -z-10">

              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About