import { useEffect, useState } from "react";
import Hero from "../Heropage/Hero";
import 'tailwindcss/tailwind.css';

type EducationType = {
    name: string;
    description: string;
    image: string;
    start: string;
    end: string;
};

type Props = {
    educationHistory: EducationType[];
};

const EducationSection = ({ educationHistory }: Props) => {
    return (
        <section id="education" className="overflow-hidden relative">
            <div className="px-8 py-24 mx-auto md:px-12 lg:px-36 max-w-7xl">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h3 className="text-4xl text-white font-display flex flex-wrap gap-x-2">
                        Education <span className="md:block text-primary-500">History</span>
                    </h3>
                </div>
                <div className="mt-24">
                    <div className="relative flex flex-wrap">
                        <div className="grid gap-6 md:grid-cols-3 relative">
                            {educationHistory.map(({ name, description, image }, index) => (
                                <div key={name + index} className="w-full pb-4 border-b border-primary-800">
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-delay={`${index * 100 * 2}`}
                                        className="flex items-center justify-center w-16 h-16 mb-5 lg:mb-16 rounded-xl border bg-gradient-to-tr from-primary-950 to-primary-700 border-primary-800 shadow-2xl"
                                    >
                                        <img className="w-full h-full rounded-xl" src={image} alt={name} />
                                    </div>
                                    <div>
                                        <p className="mt-12 text-xl font-medium leading-6 text-white">{name}</p>
                                        <p className="mt-4 text-base text-primary-300">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Homepage({ educationHistory }: Props) {
    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
        setScrollEnabled(window.innerHeight < document.body.scrollHeight);
    }, []);

    return (
        <div className={`relative w-full ${scrollEnabled ? 'h-auto overflow-y-auto' : 'h-screen'}`}>
            {/* Background Hero Component */}
            <div className="absolute inset-0 z-0">
                <Hero />
            </div>
            
            {/* Foreground Content */}
            <div className="relative z-10 flex items-center h-full px-6 md:pl-16 font-semibold">
                <div className="bg-black bg-opacity-50 mr-10 md:p-8 rounded-lg text-white text-left max-w-8xl">
                    <h1 className="text-4xl md:text-6xl font-bold">Mohan Balaji 👋</h1>
                    <p className="mt-4 text-lg md:text-2xl">Striving for excellence in technology and innovation</p>
                    <p className="mt-4 text-lg md:text-2xl">
                        Software Developer
                        <br />
                        I'm a software developer who loves to build things for the web.
                    </p>
                </div>
            </div>
            
            {/* Education Section */}
            <EducationSection educationHistory={educationHistory} />
        </div>
    );
}