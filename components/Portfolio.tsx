'use client';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectGrid from './ProjectGrid';
import Skills from './SkillGrid';
import Timeline from './Timeline';
import TextAnimation from './TextAnimation';

export default function Portfolio() {
  // צבע הגרדיאנט - כתום
  const gradientColor = '#FFA500';

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* חלק עליון עם גרדיאנט */}
      <div
        className="w-full py-8"
        style={{
          background: `linear-gradient(180deg, ${gradientColor}20 0%, ${gradientColor}10 30%, ${gradientColor}05 60%, rgba(26, 26, 26, 1) 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <section className="relative pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-4">
                <TextAnimation text="I'm" delay={0} speed={0.1} />
                <span className="text-[#FFD700]">
                  {' '}
                  <TextAnimation text="Matan Kalifa" delay={0} speed={0.1} />
                </span>
              </h1>
              <h2 className="text-2xl text-gray-400 mb-4">
                Full Stack Developer
              </h2>
              <Button
                className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
                asChild
              >
                <a href="/Matan resume.pdf" download="Matan resume.pdf">
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
        </div>
      </div>

      {/* תוכן נוסף */}
      <div className="container mx-auto px-4 pt-2">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <section id="about" className="space-y-4">
              <h2 className="text-3xl font-bold">About</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                I am a dedicated Software Engineer.
                <br /> I excel in teamwork, adapt well in dynamic environments,
                and am a passionate full-stack developer focused on continuous
                self-improvement and integrating new technologies into my
                skills.
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
    </div>
  );
}
