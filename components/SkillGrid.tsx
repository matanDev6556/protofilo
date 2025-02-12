import Image from 'next/image';
import { categorizedSkills } from '@/lib/consts/skills_list';

interface SkillsProps {
  filter?: string[];
}

export default function Skills({ filter }: SkillsProps) {
  return (
    <div className="space-y-8">
      {Object.entries(categorizedSkills).map(([category, skills]) => {
        const filteredSkills = filter
          ? skills.filter((skill) => filter.includes(skill.name))
          : skills;

        if (filteredSkills.length === 0) return null;

        return (
          <div key={category}>
            <h3 className="text-xl text-[#D1B729] mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative bg-[#222222] p-4 rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden"
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
                    <h3 className="text-white font-semibold text-sm">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-radial"></div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
