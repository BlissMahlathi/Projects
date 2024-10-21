import { cn } from "../../../lib/utils";

export function FeaturesSection() {
  const features = [
    {
      title: "Landing Page Design",
      description:
        "A sleek and modern landing page built for innovators. Fast, responsive, and optimized for user engagement.",
      status: "Complete",
    },
    {
      title: "Temperature Converter",
      description:
        "An intuitive tool for converting temperatures between Celsius and Fahrenheit. Functional and user-friendly.",
      status: "Complete",
    },
    {
      title: "Portfolio Showcase",
      description:
        "A professional portfolio highlighting web and software development expertise. Responsive design and smooth navigation built with HTML, CSS, and JavaScript.",
      status: "Complete",
    },
    {
      title: "Dynamic E-Commerce Platform",
      description:
        "A robust full-stack e-commerce solution using React.js and Node.js. Featuring secure payment gateways and seamless product management.",
      status: "In Progress",
    },
    {
      title: "Mobile Banking App",
      description:
        "A secure mobile banking app developed with React Native. Features include real-time transaction tracking and personalized notifications.",
      status: "In Progress",
    },
    {
      title: "Task Management Tool",
      description:
        "A collaborative task management web app for teams. Real-time updates, notifications, and a user-friendly interface built with React.js and Firebase.",
      status: "In Progress",
    },
    {
      title: "YouTube Video Downloader",
      description:
        "A powerful Python-based tool to download videos directly from YouTube with ease and efficiency.",
      status: "Complete",
    },
    {
      title: "Smart Calculator",
      description:
        "An advanced calculator application to perform everyday calculations. Quick, reliable, and easy to use.",
      status: "Complete",
    },
  ];
  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
  );
}

const Feature = ({
  title,
  description,
  index,
  status
}) => {
  return (
    (<div id="portfolio"
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
      <span className="text-lg font-bold text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 pt-3">
      <a href="https://github.com/BlissMahlathi/Projects.git" target="_blank">{status}</a>
      </span>
    </div>)
  );
};
