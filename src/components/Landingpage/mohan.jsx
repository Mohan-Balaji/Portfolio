import Hero from "../Heropage/Hero";
import 'tailwindcss/tailwind.css';

export default function Homepage() {
    return (
        <div className="relative w-full h-screen">
            {/* Background Hero Component */}
            <div className="absolute inset-0 z-0">
                <Hero />
            </div>
            
            {/* Foreground Content */}
            <div className="relative z-10 flex items-center h-full px-6 md:pl-16 font-[remaining]">
                <div className="bg-black bg-opacity-50 mr-10 md:p-8 rounded-lg text-white text-left max-w-8xl ">
                    <h1 className="text-4xl md:text-6xl font-bold">Mohan Balaji 👋</h1>
                    <p className="mt-4 text-lg md:text-2xl">Striving for excellence in technology and innovation</p>
                </div>
            </div>
        </div>
    );
}
