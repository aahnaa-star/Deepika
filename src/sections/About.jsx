import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Brain } from 'lucide-react';

const stats = [
  { num: '4+', label: 'Projects', icon: Brain },
  { num: '2+', label: 'Internships', icon: Code2 },
  { num: '8.25', label: 'CGPA', icon: GraduationCap },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 px-6 lg:px-12 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-white text-sm font-medium tracking-widest uppercase">
            02 — About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left - Large typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              Building <span className="gradient-text">intelligent systems</span>{' '}
              that solve real problems
            </h2>
            
            <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
              <p>
                I'm <span className="text-white">Nadakuditi Deepika</span>, a B.Tech CSE (AI/ML) student and 
                Full Stack Developer based in Bangalore. I build end-to-end applications that combine 
                Python, modern web frameworks, and machine learning.
              </p>
              <p>
                My work includes AI-driven projects like skin disease prediction, credit fraud detection, 
                and responsive web systems powered by Django, Flask, React, and REST APIs.
              </p>
              <p>
                I enjoy turning data into insights and ideas into polished user experiences — 
                especially when the result makes a real impact.
              </p>
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mt-8 text-[var(--text-muted)]"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in Bangalore, India</span>
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors"
                data-cursor="pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-pink)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[var(--accent-pink)]" />
                </div>
                <div>
                  <span className="text-3xl font-display font-bold text-white">{stat.num}</span>
                  <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
                </div>
              </motion.div>
            ))}

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass rounded-2xl p-6 mt-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <h4 className="font-medium text-white">B.Tech in CSE (AI/ML)</h4>
                  <p className="text-sm text-[var(--text-secondary)]">CMR University, Bangalore</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">2022 — 2026</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
