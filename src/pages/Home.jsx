import { motion } from "framer-motion";

export default function Home() {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >

                <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Aman Pratap
                </h1>

                <p className="text-2xl text-zinc-400 mb-8">
                    AI/ML Developer • Full Stack Developer
                </p>

                <div className="flex justify-center gap-4">

                    <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all">
                        View Projects
                    </button>

                    <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-all">
                        Contact Me
                    </button>

                </div>

            </motion.div>

        </section>
    );
}