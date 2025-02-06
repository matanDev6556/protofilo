'use client';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectGrid from './ProjectGrid';
import Skills from './SkillGrid';
import Timeline from './Timeline';

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center mb-12">
        <div className="text-[#FFD700] text-3xl font-bold">MK</div>
        <div className="flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-[#FFD700]">
            About
          </a>
          <a href="#portfolio" className="hover:text-[#FFD700]">
            Portfolio
          </a>
          <a href="#education" className="hover:text-[#FFD700]">
            Education
          </a>
        </div>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-12">
          <section className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-4">
                I&apos;m <span className="text-[#FFD700]">Matan Kalifa</span>
              </h1>
              <h2 className="text-2xl text-gray-400 mb-6">
                Full Stack Developer
              </h2>
              <Button
                className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
                asChild
              >
                <a href="/Matan-Kalifa-CV.pdf" download="Matan-Kalifa-CV.pdf">
                  Download CV
                </a>
              </Button>
            </motion.div>

            <div className="absolute right-0 top-0 h-full flex flex-col justify-center gap-4 text-gray-400">
              <a
                href="https://github.com/matanDev6556"
                target="_blank"
                className="hover:text-[#FFD700]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a href="tel:+972527569088" className="hover:text-[#FFD700]">
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:matandev6556@gmail.com"
                className="hover:text-[#FFD700]"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/matan-kalifa-1a7684265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="hover:text-[#FFD700]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </section>

          <section id="about" className="space-y-6">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I am a dedicated fourth-year Software Engineering student with an
              average score of 86. <br />I excel in teamwork, adapt well in
              dynamic environments, and am a passionate full-stack developer
              focused on continuous self-improvement and integrating new
              technologies into my skills.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">My Skills</h2>
            <Skills />
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          <section id="portfolio">
            <ProjectGrid />
          </section>

          <section id="education" className="space-y-6">
            <h2 className="text-3xl font-bold">Education</h2>
            <Timeline />
          </section>
        </div>
      </div>
    </div>
  );
}
