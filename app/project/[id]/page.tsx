'use client';
import ProjectGallery from '@/components/ProjectGallery';
import Skills from '@/components/SkillGrid';
import { projects } from '@/lib/consts/project_list';
import { notFound } from 'next/navigation';
import { FaGithub, FaLock } from 'react-icons/fa';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // שימוש בצבע שהוגדר ישירות באובייקט הפרויקט עם ברירת מחדל
  const projectColor = project.color || '#FFD700';

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white">
      {/* החלק העליון עם הגרדיאנט */}
      <div
        className="w-full pt-12 pb-16"
        style={{
          background: `linear-gradient(180deg, ${projectColor}20 0%, ${projectColor}10 30%, ${projectColor}05 60%, rgba(26, 26, 26, 1) 100%)`,
        }}
      >
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
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <div
                className="w-full rounded-xl overflow-hidden shadow-lg"
                style={{
                  borderRadius: '15px',
                  aspectRatio: '3/2',
                  position: 'relative',
                }}
              >
                <img
                  src={project.images[0] || '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '15px' }}
                />
              </div>
            </div>
            <div className="w-full md:w-3/4 flex flex-col items-center md:items-start">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {project.description}
              </p>

              {/* GitHub Button */}
              {project.github &&
                (project.github.isPublic ? (
                  <a
                    href={project.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#333] hover:bg-[#444] text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-gray-700"
                    style={{
                      backgroundColor: `${projectColor}30`,
                      borderColor: projectColor,
                    }}
                  >
                    <FaGithub className="text-white" size={20} />
                    <span>View on GitHub</span>
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 bg-[#2A2A2A] text-gray-400 cursor-not-allowed px-5 py-2.5 rounded-lg opacity-70 border border-gray-700"
                  >
                    <FaLock className="text-gray-400" size={18} />
                    <span>Private Repository</span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* תוכן נוסף */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Project Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <ProjectGallery images={project.images.slice(1)} />
        </div>

        {/* Skills and Features Section */}
        <div className="md:flex md:gap-8 mb-12">
          {/* Skills Used */}
          <div className="mb-12 md:mb-0 md:w-2/3">
            <h2 className="text-2xl font-bold mb-6 text-center">Skills Used</h2>
            <div className="bg-[#222222] rounded-lg p-8 h-full">
              <Skills filter={project.skills} compact={true} />
            </div>
          </div>

          {/* Key Features */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Key Features
            </h2>
            <div className="bg-[#222222] rounded-lg p-8 h-full">
              <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
