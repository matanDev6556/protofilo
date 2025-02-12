'use client';
import ProjectGallery from '@/components/ProjectGallery';

import Skills from '@/components/SkillGrid';
import { projects } from '@/lib/consts/project_list';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back button */}
        <a
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-[#FFD700] mb-8"
        >
          ← Back
        </a>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row items-start gap-4 mb-12">
          <div className="w-full md:w-1/4 relative h-[150px] md:h-[200px]">
            <Image
              src={project.images[0] || '/placeholder.svg'}
              alt={project.title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/4 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {project.description}
            </p>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <ProjectGallery images={project.images.slice(1)} />
        </div>

        {/* Skills Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Skills Used</h2>
          <Skills filter={project.skills} />
        </div>

        {/* Additional Project Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#222222] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
