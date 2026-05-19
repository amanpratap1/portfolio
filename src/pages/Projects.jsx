const projects = [
    {
        title: "Brain Tumor Segmentation",
        description:
            "Deep learning medical image segmentation using nnUNet and BraTS dataset.",
    },

    {
        title: "AI Portfolio Website",
        description:
            "Modern React portfolio with animations and futuristic UI.",
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-black text-white px-8 py-32">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-6xl font-bold mb-16">
                    Projects
                </h1>

                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition-all"
                        >

                            <h2 className="text-3xl font-semibold mb-4">
                                {project.title}
                            </h2>

                            <p className="text-zinc-400">
                                {project.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}