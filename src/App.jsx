import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      title: "Backend & Systems",
      skills: ["C#", ".NET", "SQL Server", "LINQ", "C/C++", "Java", "Python"]
    },
    {
      title: "Development & Ops",
      skills: ["Git", "CI/CD", "AWS", "REST APIs", "Unit Testing", "Docker", "Postman"]
    },
    {
      title: "Frontend & Creative",
      skills: ["JavaScript", "React", "Tailwind CSS", "Unity", "Android Studio", "Django", "Ruby on Rails"]
    },
    {
      title: "Engineering Practices",
      skills: ["Agile/Scrum", "Clean Code", "Design Patterns", "SQL Optimization", "System Design"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
      tech: "React, Node.js, MongoDB, Stripe",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.",
      tech: "React, Firebase, Tailwind CSS",
      link: "#"
    },
    {
      title: "API REST Service",
      description: "Servicio API RESTful escalable con autenticación JWT, rate limiting y documentación completa.",
      tech: "Node.js, Express, PostgreSQL, Docker",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Anyer M.
            </motion.h1>
            <div className="flex gap-6">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              {/* Contenedor de la Imagen */}
              <div className="relative w-40 h-40 mx-auto group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/Foto Anyer.jpg"
                  alt="Anyer Moreno Alcaraz"
                  className="relative w-40 h-40 mx-auto rounded-full object-cover border-4 border-slate-900 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <h1 className="text-6xl font-bold mb-4 text-white">
              Anyer Moreno Alcaraz
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Software Engineer | Backend Developer | Barcelona, Spain
            </p>

            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-400 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto"> {/* Reducido a max-w-4xl para mejor lectura de líneas largas */}
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-10 text-center text-white">
              About Me
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 shadow-xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a <span className="text-white font-semibold">Software Engineer</span> and Computer Science graduate from 
                <span className="text-cyan-400"> UPC (Universitat Politècnica de Catalunya)</span> with a <span className="text-white">7.73/10 GPA</span>. 
                Currently, I specialize in <strong className="font-bold text-cyan-400">backend development at Aqua eSolutions</strong>, 
                where I leverage <span className="text-white font-medium">C# and .NET</span> to build scalable systems and high-performance SQL databases.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond writing code, I take an active role in <span className="text-white font-medium">architectural decision-making</span> and 
                API integrations. My core focus is delivering <strong className="text-cyan-400">clean, maintainable code</strong> and 
                solving the complex technical challenges that drive team goals and business success forward.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Work Experience
            </h2>
            <div className="space-y-8">
              {/* Aqua eSolutions */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Software Engineer</h3>
                    <p className="text-cyan-400 text-lg">Aqua eSolutions</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">
                    <p className="text-sm">Sep 2024 - Present</p>
                    <p className="text-sm">Barcelona</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developed backend features in <strong className="text-cyan-400">C#</strong> and <strong className="text-cyan-400">.NET</strong>, and improved business logic using <strong className="text-cyan-400">LINQ</strong></li>
                  <li>Built and enhanced client-side functionality with <strong className="text-cyan-400">JavaScript</strong> to improve user workflows</li>
                  <li>Optimized <strong className="text-cyan-400">SQL</strong> queries, monitored performance using SSMS and SQL Profiler, and resolved bottlenecks</li>
                  <li>Contributed to software architecture and system design, participating in technical decision-making and scalable solution design</li>
                  <li>Implemented and maintained synchronization processes with external <strong className="text-cyan-400">APIs</strong>, ensuring reliable data exchange and system integration</li>
                  <li>Collaborated with the engineering team to debug and deploy improvements across the platform</li>
                </ul>
              </motion.div>

              {/* Institut Municipal d'Hisenda */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">IT Support Intern</h3>
                    <p className="text-cyan-400 text-lg">Institut Municipal d'Hisenda</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">
                    <p className="text-sm">Jun 2024 - Sep 2024</p>
                    <p className="text-sm">Barcelona</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Delivered Tier 1/2 technical support, managing <strong className="text-cyan-400">hardware, software, and network infrastructure</strong> to minimize operational downtime.</li>
                  <li>Installed, configured, and prepared workstations and essential software per departmental requirements</li>
                  <li>Optimized <strong className="text-cyan-400">system performance</strong> and resolved complex <strong className="text-cyan-400">network connectivity</strong> and user access issues in a high-demand environment</li>
                  <li>Collaborated with the IT team in resolving complex incidents, following <strong className="text-cyan-400">escalation procedures</strong> and adopting industry best practices</li>
                  <li>Contributed to improving internal IT operations by documenting <strong className="text-cyan-400">solutions, standard configurations</strong>, and recurring procedures</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Education
            </h2>
            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      BSc in Informatics Engineering (Software Track)
                    </h3>
                    <p className="text-cyan-400 text-lg">UPC - Universitat Politècnica de Catalunya</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">
                    <p className="text-sm">2021 - 2025</p>
                    <p className="text-sm">Barcelona</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">GPA: <strong className="text-cyan-400">7.73 / 10</strong></p>
                <p className="text-gray-300">
                  <strong>Bachelor's Thesis:</strong> MetaAppCollector - Grade: <strong className="text-cyan-400">9.6 / 10</strong>
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Technological Baccalaureate
                    </h3>
                    <p className="text-cyan-400 text-lg">INS La Sedeta</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">
                    <p className="text-sm">2019 - 2021</p>
                    <p className="text-sm">Barcelona</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-2">University entrance exam: <strong className="text-cyan-400">11.3 / 14</strong></p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-xl backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-cyan-400 font-bold mb-4 text-lg uppercase tracking-wider">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 text-gray-200 rounded-md text-sm border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
                
      {/* Projects Section */}
      {/* <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Featured Projects
            </h2>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all cursor-pointer"
                >
                  <div className="mb-4 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <p className="text-xs text-cyan-400 mb-4">{project.tech}</p>
                  <a
                    href={project.link}
                    className="text-sm text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2"
                  >
                    View Project →
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.a
                href="mailto:anyermoreno96@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <span className="text-2xl">📧</span>
                <span className="text-gray-300">anyermoreno96@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://github.com/Anyerrr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <span className="text-2xl">💻</span>
                <span className="text-gray-300">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/anyer-moreno-alcaraz-55153627a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <span className="text-2xl">💼</span>
                <span className="text-gray-300">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-1">
            © {new Date().getFullYear()} <span className="text-white font-medium">Anyer Moreno Alcaraz</span> 
          </p>
          <p className="text-sm text-gray-500 tracking-wide">
            Built with <span className="hover:text-cyan-400 transition-colors">React</span> • 
              <span className="hover:text-cyan-400 transition-colors"> Vite</span> • 
              <span className="hover:text-cyan-400 transition-colors"> Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
