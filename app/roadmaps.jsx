"use client";

export default function Roadmaps() {
  const sections = [
    {
      title: "HTML",
      description: "The foundation of web development. HTML (HyperText Markup Language) is used to create the structure of web pages.",
      resources: [
        { name: "HTML Full Course for Beginners ", link: "https://youtu.be/mJgBOIoGihA?si=6p61CNudKSm2uwAV" },
        { name: "W3Schools: HTML Tutorial", link: "https://www.w3schools.com/html/" },
      ],
    },
    {
      title: "CSS",
      description: "CSS (Cascading Style Sheets) controls the visual appearance of web pages. It allows you to style HTML elements.",
      resources: [
        { name: "CSS Crash Course For Beginners", link: "https://youtu.be/yfoY53QXEnI?si=hZtHs6nVAntiOcoh" },
        { name: "W3Schools: CSS Tutorial", link: "https://www.w3schools.com/css/" },
      ],
    },
    {
      title: "JavaScript",
      description: "JavaScript is a programming language that enables dynamic content and interactive features on web pages.",
      resources: [
        { name: "JavaScript Crash Course For Beginners", link: "https://youtu.be/hdI2bqOjy3c?si=GI5K-aHrP-QV4WYf" },
        { name: "JavaScript.info", link: "https://javascript.info/" },
      ],
    },
    {
      title: "Git and GitHub",
      description: "Git is a version control system that helps track changes in code. GitHub is a platform for hosting and collaborating on Git repositories.",
      resources: [
        { name: "Learn Git and Github", link: "https://youtu.be/ACOiGZoqC8w?si=61N4PTqYlJASTUOd" },
      ],
    },
    {
      title: "React",
      description: "React is a JavaScript library for building user interfaces, especially single-page applications with complex states.",
      resources: [
        { name: "Learn React JS Tutorial", link: "https://youtu.be/LgB3j2y1b-4?si=RPqjTn0GJuYr49lH" },
        { name: "React Crash Course 2024", link: "https://youtu.be/LDB4uaJ87e0?si=Dexhvk6ISAA-YLSy" },
        { name: "W3Schools: HTML Tutorial", link: "https://www.w3schools.com/react/default.asp" }
      ],
    },
    {
      title: "Tailwind CSS",
      description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.",
      resources: [
        { name: "Tailwind CSS Full Course for Beginners ", link: "https://youtu.be/lCxcTsOHrjo?si=FNwa_dpZBjXcVZ4w" },
        { name: "Tailwind CSS Crash Course", link: "https://youtu.be/UBOj6rqRUME?si=VCAo9fCYLeuHuKY-" },
      ],
    },
    {
      title: "ESBuild",
      description: "ESBuild is an extremely fast JavaScript bundler and minifier that helps optimize the build process.",
      resources: [
        { name: "ESLint Quickstart - find errors automatically", link: "https://www.youtube.com/watch?v=qhuFviJn-es" },
      ],
    },
    {
      title: "Vite",
      description: "Vite is a next-generation build tool that provides a faster development environment and optimized build output.",
      resources: [
        { name: "Vite 2.0 Crash Course 2021", link: "https://www.youtube.com/watch?v=LQQ3CR2JTX8&feature=youtu.be" },
        { name: "Learn Vite – Frontend Build Tool Course", link: "https://www.youtube.com/watch?v=VAeRhmpcWEQ" },
      ],
    },
    {
      title: "TypeScript",
      description: "TypeScript is a superset of JavaScript that adds static types to help catch errors early and improve code quality.",
      resources: [
        { name: "Learn Typescript In Arabic 2022", link: "https://youtu.be/yUndnE-2osg?si=EzodCwdYQchfi3fS" },
        { name: "TypeScript Course for Beginners!", link: "https://youtu.be/BwuLxPH8IDs?si=FoVFlG_rjRP_wDvo" },
      ],
    },
    {
      title: "Next.js",
      description: "Next.js is a React framework that provides server-side rendering, static site generation, and other advanced features.",
      resources: [
        { name: "Introduction to Next.js and React", link: "https://youtu.be/h2BcitZPMn4?si=PE0HuMul0nrXXbjm" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-100">
        Frontend Development Roadmap
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Explore the essential technologies and tools for frontend development, from the basics of HTML and CSS to advanced topics like TypeScript and Next.js.
      </p>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:bg-gray-700"
          >
            <h2 className="text-lg font-semibold mb-3 text-gray-100">
              {section.title}
            </h2>
            <p className="mb-3 text-gray-400">{section.description}</p>
            <div>
              <p className="font-semibold mb-2 text-gray-100">Resources:</p>
              <ul className="list-disc list-inside">
                {section.resources.map((resource) => (
                  <li key={resource.link} className="mb-1">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 hover:underline"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-3xl font-semibold mb-6 text-center text-gray-100">More roadmaps coming soon...</p>
      </div>
    </div>
  );
}
