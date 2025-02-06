'use client';
import { projects } from '@/lib/consts/project_list';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGrid() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Portfolio</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
          >
            <Link href={`/project/${project.id}`}>
              <div>
                <Image
                  src={project.images[0] || '/placeholder.svg'}
                  alt={project.title}
                  layout="responsive"
                  width={400}
                  height={300}
                  className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110 group-hover:filter group-hover:filter-brightness-90"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <span className="text-[#FFD700]">{project.category}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
