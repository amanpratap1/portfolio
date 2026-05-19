export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-zinc-800">

            <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-white">
                    Aman
                </h1>

                <div className="flex gap-8 text-zinc-400">

                    <a href="#" className="hover:text-white transition">
                        Home
                    </a>

                    <a href="#" className="hover:text-white transition">
                        About
                    </a>

                    <a href="#" className="hover:text-white transition">
                        Projects
                    </a>

                    <a href="#" className="hover:text-white transition">
                        Contact
                    </a>

                </div>

            </div>

        </nav>
    );
}