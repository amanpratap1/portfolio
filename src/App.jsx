import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-x-hidden">


      <Navbar />

      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section
        className="
  min-h-screen
  flex
  flex-col
  items-center
  justify-center
  relative
  z-10
  px-6
  text-center
"
      >

        {/* Glow Effects */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-20 left-20"></div>

        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >

          <h1
            className="
      text-5xl
      sm:text-6xl
      md:text-7xl
      lg:text-8xl
      xl:text-[10rem]
      font-black
      leading-none
      mb-6
      bg-gradient-to-r
      from-blue-500
      via-purple-500
      to-pink-500
      bg-clip-text
      text-transparent
      px-4
    "
          >
            Aman Pratap
          </h1>

          <TypeAnimation
            sequence={[
              "AI/ML Developer",
              2000,
              "Full Stack Developer",
              2000,
              "Deep Learning Enthusiast",
              2000,
              "Medical Imaging Researcher",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-zinc-400 mb-10 block"
          />

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <button className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105">
              View Projects
            </button>

            <button className="px-10 py-5 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-all hover:scale-105">
              Contact Me
            </button>

          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">

            <a
              href="https://github.com/amanpratap1"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-blue-500 transition-all"
            >
              GitHub
            </a>

            <a
              href="https://www.kaggle.com/"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-pink-500 transition-all"
            >
              Kaggle
            </a>

            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-purple-500 transition-all"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-8 relative z-10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-16 text-center">
            About Me
          </h2>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-10 backdrop-blur-lg">

            <p className="text-zinc-300 text-lg leading-relaxed">
              I am an AI/ML Developer and Full Stack Developer passionate about
              Deep Learning, Medical Imaging, and modern web technologies.

              I specialize in building intelligent applications using
              Python, PyTorch, React, Flask, and nnUNet.

              Currently focused on Brain Tumor Segmentation research
              using the BraTS dataset and advanced AI architectures.
            </p>

          </div>

        </div>

      </section>
      {/* EXPERIENCE + EDUCATION */}
      <section className="py-32 px-8 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10">

            {/* EXPERIENCE */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-10 backdrop-blur-lg">

              <h2 className="text-4xl font-bold mb-8">
                Experience
              </h2>

              <h3 className="text-2xl font-bold">
                AI/ML Research Project
              </h3>

              <p className="text-blue-400 mt-2">
                Brain Tumor Segmentation using nnUNet
              </p>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Worked on MRI image segmentation, preprocessing,
                nnUNet training, and model evaluation using Dice Score.
              </p>

            </div>

            {/* EDUCATION */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-10 backdrop-blur-lg">

              <h2 className="text-4xl font-bold mb-8">
                Education
              </h2>

              <h3 className="text-2xl font-bold">
                B.Tech - Computer Science
              </h3>

              <p className="text-zinc-400 mt-3">
                AI & Machine Learning Specialization
              </p>

              <p className="text-zinc-500 mt-2">
                2022 - Present
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* CERTIFICATIONS SECTION */}
      <section className="py-32 px-8 relative z-10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-16 text-center">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">
              Python Programming
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">
              Machine Learning
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">
              Deep Learning
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">
              Web Development
            </div>

          </div>

        </div>

      </section>
      {/* ACHIEVEMENTS SECTION */}
      <section className="py-32 px-8 relative z-10">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-16 text-center">
            Achievements
          </h2>

          <div className="space-y-6">

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">
              Built AI-powered Brain Tumor Segmentation System using nnUNet
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">
              Developed Full Stack AI Portfolio using React + Tailwind
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">
              Experience in Deep Learning and Medical Imaging Research
            </div>

          </div>

        </div>

      </section>
      {/* SKILLS SECTION */}
      <section className="py-32 px-8">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-6xl font-bold mb-20 text-center">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              "Python",
              "React",
              "Machine Learning",
              "Deep Learning",
              "Flask",
              "PyTorch",
              "Tailwind",
              "nnUNet",
            ].map((skill, index) => (

              <motion.div
                whileHover={{ scale: 1.08 }}
                key={index}
                className="bg-zinc-900/60 backdrop-blur-lg border border-zinc-800 rounded-3xl p-10 text-center text-xl hover:border-blue-500 transition-all"
              >
                {skill}
              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section className="py-32 px-8">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-6xl font-bold mb-20 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900/60 backdrop-blur-lg border border-zinc-800 rounded-3xl p-10 hover:border-blue-500 transition-all"
            >

              <h3 className="text-3xl font-bold mb-4">
                Brain Tumor Segmentation
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                AI-powered medical image segmentation using nnUNet and BraTS dataset.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900/60 backdrop-blur-lg border border-zinc-800 rounded-3xl p-10 hover:border-pink-500 transition-all"
            >

              <h3 className="text-3xl font-bold mb-4">
                AI Portfolio Website
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Futuristic React portfolio with animations and modern UI.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
}