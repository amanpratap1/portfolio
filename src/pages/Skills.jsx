const skills = [
    "Python",
    "React",
    "Flask",
    "PyTorch",
    "Machine Learning",
    "Deep Learning",
    "nnUNet",
    "Tailwind CSS",
];

export default function Skills() {
    return (
        <div className="min-h-screen bg-black text-white px-8 py-32">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-6xl font-bold mb-16">
                    Skills
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:scale-105 transition-all"
                        >
                            {skill}
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}