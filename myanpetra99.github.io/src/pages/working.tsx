// Step.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const experiences = [
  {
    title: "Web Application Developer",
    year: "2022 - Present",
    company: "PT Asuransi Sinar Mas",
    description:
      "Developing and maintaining software applications using the Pega platform. Involved in database management. Also maintaining ongoing live sites, continously improving the user experience.",
    skills: [
      "SQL",
      "Java",
      "SQL",
      "Data Structure",
      "Pega",
      "HTML",
      "CSS",
      "JS",
      "PHP",
    ],
  },
  {
    title: "React Developer (freelance)",
    year: "2022",
    company: "SleepyHead ID",
    description:
      "Worked on front-end projects using React, Trello, and Figma. Employed agile scrum methodologies for team collaboration.",
    skills: [
      "Design Patterns",
      "Communication",
      "Web Engineering",
      "JavaScript",
      "Node.js",
      "React.js",
      "PostGreSQL",
    ],
  },
  {
    title: "Presales Engineer",
    year: "2022",
    company: "PT. IDStar Cipta Teknologi",
    description:
      "Built demonstrations and delivered POCs using RPA with UiPath and VB.NET. Conducted client meetings and supported RFI/RFP processes.",
    skills: ["Soft Skills", "VB.Net", "RPA", "UiPath", "SQL", "Wordpress"],
  },
  {
    title: "Web Developer (freelance)",
    year: "2021",
    company: "PT. Aneka Karya Berkat",
    description:
      "Designed and developed a web-based Data Entry System. Worked on both local and cloud storage configurations using MongoDB Atlas.",
    skills: ["VueJS", "MongoDB", "NodeJS", "ExpressJS"],
  },
];

const Step = ({  title, company, year, description, skills }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1500"
      className="flex w-full bg-white rounded-lg p-5 shadow-md hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] transition-all"
    >
      <div className="flex flex-col items-center mr-4">
        <div className=" w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-cyan-500 font-bold p-2">
          {year}
        </div>
        <div className="w-1 bg-cyan-200 h-full" />
      </div>
      <div className="text-left w-full">
        <h4 className="text-lg font-semibold  font-poppins">{title} </h4>
        <h5 className="">
          <span className=" text-gray-400  font-poppins">{company}</span>
        </h5>
        <p className=" font-poppins">{description} </p>
        <div className="w-full flex flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-cyan-500 text-sm font-semibold text-white font-poppins mr-2  p-1 rounded-md my-1"
          >
            {skill}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceStepper = ({ experiences }) => {
  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <Step key={index} number={index + 1} {...exp} />
      ))}
    </div>
  );
};

export function Working() {
  //create a working experience
  return (
    <section id="experiences" className="w-full rounded-md bg-gradient-to-b   from-red-50 via-cyan-200/25 to-red-50 md:p-32 p-5">
      <h2
        data-aos="fade-right"
        className="font-extrabold text-left  text-3xl md:text-7xl mb-5 flex"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-yellow-300 bg-transparent">
          {" "}
          From Hobby to Career
        </span>{" "}
        <h1 data-aos="fade-right" data-aos-delay="500">🚀</h1>
      </h2>

      <h2
        className="font-poppins text-blue-900 text-xl md:text-xl text-left"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        I Love applied my skills to real world problem, here's my working
        experience so far in
      </h2>
      <ExperienceStepper experiences={experiences} />
    </section>
  );
}
