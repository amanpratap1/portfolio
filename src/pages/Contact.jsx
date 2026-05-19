export default function Contact() {
    return (
        <div className="min-h-screen bg-black text-white px-8 py-32">

            <div className="max-w-3xl mx-auto">

                <h1 className="text-6xl font-bold mb-16">
                    Contact
                </h1>

                <div className="space-y-6">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
                    />

                    <textarea
                        rows="6"
                        placeholder="Your Message"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
                    />

                    <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all">
                        Send Message
                    </button>

                </div>

            </div>

        </div>
    );
}