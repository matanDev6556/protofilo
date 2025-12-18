import { motion } from "framer-motion";

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  certificate?: string;
  link?: string;
  type: "work" | "education";
  achievements?: string[];
}

const workExperiences: Experience[] = [
  {
    year: "2025-Present",
    title: "Full Stack Developer",
    company: "Electis",
    type: "work",
    description:
      "Led the complete refactor and rebuild of a legacy synchronization system for retail stores. Designed the architecture from scratch, implemented clean code principles, and achieved significant performance improvements.",
    achievements: [
      "Reduced synchronization time by 90% (20 minutes → 2 minutes)",
      "Implemented Redis caching layer for optimal performance",
      "Built complete system architecture and full documentation",
      "Worked independently on end-to-end development",
      "Applied SOLID principles and clean architecture patterns",
    ],
  },
];

const educationExperiences: Experience[] = [
  {
    year: "2021-2025",
    title: "Software Engineering Student",
    company: "Sami Shamoon College",
    type: "education",
    description:
      "Pursuing a Bachelor's degree in Software Engineering, gaining expertise in algorithms, data structures, and software development principles.",
    link: "https://claude.ai/public/artifacts/3a98a8c5-5110-4e02-b2c1-09dce7735368#no_universal_links",
  },
  {
    year: "2025",
    title: "Full-Stack Flutter & Node.js Course",
    company: "Udemy",
    type: "education",
    description:
      "Currently enrolled in a hands-on course covering Flutter, Node.js, Express.js, and MongoDB, focusing on building full-stack applications with modern technologies.",
    certificate: "/Udemy full stack certificate.pdf",
  },
  {
    year: "2018",
    title: "Android App Development Bootcamp",
    company: "Certified Program",
    type: "education",
    description:
      "Completed an intensive 300+ hour bootcamp focused on Android application development, covering Java, Kotlin, and modern app architecture.",
    certificate: "/android certifacte.pdf",
  },
];

export default function Timeline() {
  return (
    <div className="space-y-8">
      {/* Work Experience Section */}
      {workExperiences.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
            Work Experience
          </h3>
          {workExperiences.map((exp, index) => (
            <motion.div
              key={`work-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 border-l border-[#FFD700]"
            >
              <div className="absolute w-4 h-4 bg-[#FFD700] rounded-full -left-2 top-0" />
              <div className="text-[#FFD700] text-sm mb-2">{exp.year}</div>
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <div className="text-gray-400 mb-2">{exp.company}</div>
              <p className="text-gray-500 mb-3">{exp.description}</p>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {educationExperiences.length > 0 && (
        <div className="space-y-6 mt-8">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Education</h3>
          {educationExperiences.map((exp, index) => (
            <motion.div
              key={`edu-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 border-l border-[#FFD700]"
            >
              <div className="absolute w-4 h-4 bg-[#FFD700] rounded-full -left-2 top-0" />
              <div className="text-[#FFD700] text-sm mb-2">{exp.year}</div>
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <div className="text-gray-400 mb-2">{exp.company}</div>
              <p className="text-gray-500">{exp.description}</p>

              {(exp.certificate || exp.link) && (
                <div className="mt-5 flex gap-3 justify-center">
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      download
                      className="px-4 py-2 bg-[#FFD760] text-black rounded-lg hover:bg-yellow-500 transition"
                    >
                      Certificate
                    </a>
                  )}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#FFD760] text-black rounded-lg hover:bg-yellow-500 transition"
                    >
                      View Details
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
