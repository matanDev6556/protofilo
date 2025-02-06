import { allSkills } from '@/lib/consts/skills_list';
import Image from 'next/image';

interface SkillsProps {
  filter?: string[];
}

export default function Skills({ filter }: SkillsProps) {
  const skills = filter
    ? allSkills.filter((skill) => filter.includes(skill.name))
    : allSkills;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`group relative bg-[#222222] p-4 rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden`}
        >
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={skill.icon || '/placeholder.svg'}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
          </div>
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-radial ${skill.color} to-transparent`}
          ></div>
        </div>
      ))}
    </div>
  );
}
