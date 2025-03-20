import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2021-2025',
    title: 'Software Engineering Student',
    company: 'Sami Shamoon College',
    description:
      "Pursuing a Bachelor's degree in Software Engineering, gaining expertise in algorithms, data structures, and software development principles.",
  },
  {
    year: '2025',
    title: 'Full-Stack Flutter & Node.js Course',
    company: 'Udemy',
    description:
      'Currently enrolled in a hands-on course covering Flutter, Node.js, Express.js, and MongoDB, focusing on building full-stack applications with modern technologies.',
    certificate: '/Udemy full stack certificate.pdf',
  },
  {
    year: '2018',
    title: 'Android App Development Bootcamp',
    company: 'Certified Program',
    description:
      'Completed an intensive 300+ hour bootcamp focused on Android application development, covering Java, Kotlin, and modern app architecture.',
    certificate: '/android certifacte.pdf',
  },
];

export default function Timeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
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

          {exp.certificate && (
            <div className="mt-5 text-center ">
              <a
                href={exp.certificate}
                download
                className="px-4 py-2 bg-[#FFD760] text-black rounded-lg hover:bg-yellow-500 transition"
              >
                Certificate
              </a>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
