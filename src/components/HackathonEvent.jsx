import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HackathonTimeline from "./HackathonTimeline";
import PrizePool from "./PrizePool";

const HackathonEvent = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const handleJoinUsClick = () => {
        window.location.href = "https://forms.gle/5H5THDaWDXtRVS4f6";
    };

    const glowEffectStyle = {
        boxShadow: "0px 0px 10px 2px rgba(236, 39, 213, 0.5)",
    };

    useEffect(() => {
        const eventDate = new Date("2025-04-05T13:30:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: String(days).padStart(2, "0"),
                    hours: String(hours).padStart(2, "0"),
                    minutes: String(minutes).padStart(2, "0"),
                    seconds: String(seconds).padStart(2, "0"),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Header Section */}
                <motion.div
                    className="flex justify-center items-center font-custom font-extrabold text-4xl lg:text-6xl mt-24 lg:mt-48"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-white drop-shadow-lg text-center text-2xl md:text-4xl relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.span
                            initial={{ x: -30 }}
                            animate={{ x: 0 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="inline-block animate-pulse"
                        >
                            &lt;
                        </motion.span>
                        <span className="mx-2 animate-pulse">LEVEL-UP</span>
                        <motion.span
                            initial={{ x: 30 }}
                            animate={{ x: 0 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="inline-block animate-pulse"
                        >
                            &gt;
                        </motion.span>
                    </motion.h1>
                </motion.div>

                {/* Hackathon Section */}
                <motion.section
                    className="p-4 lg:p-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                        <motion.div
                            className="w-full lg:w-1/2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.img
                                src="/hackathon.png"
                                alt="Hackathon"
                                className="w-full rounded-lg shadow-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        </motion.div>

                        <motion.div
                            className="w-full lg:w-1/2 space-y-6"
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.p
                                className="text-xl lg:text-2xl"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                Join us for an exciting <span style={{ color: "#EC27D5" }}>24-hour</span> hackathon challenge where innovation meets execution.
                            </motion.p>
                            <p className="text-lg lg:text-xl">
                                <strong>Date:</strong> 5th & 6th April 2025
                            </p>
                            {/* <p>
                            <strong>Time:</strong> 10:00 AM - 5:00 PM
                        </p> */}
                            <p className="text-lg lg:text-xl">
                                <strong>Venue:</strong> KJSIT Campus
                            </p>
                            <div className="mt-6">
                                <motion.a
                                    href="https://forms.gle/5H5THDaWDXtRVS4f6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <motion.button
                                        className="md:block font-custom border border-[#EC27D5] px-6 py-2 rounded-full hover:bg-[#EC27D5] transition text-xs"
                                        style={glowEffectStyle}
                                        whileHover={{ scale: 1.05, backgroundColor: "#EC27D5" }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        onClick={handleJoinUsClick}
                                    >
                                        Register &nbsp; Now
                                    </motion.button>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Timer Section */}
                <motion.div
                    className="text-center pt-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-2xl font-bold">Hackathon starts in</h2>
                </motion.div>
                <motion.div
                    className="flex justify-center items-center py-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-700 p-6 rounded-lg shadow-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                            >
                                <motion.div
                                    className="text-4xl lg:text-6xl font-bold"
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    {timeLeft[label.toLowerCase()]}
                                </motion.div>
                                <motion.div
                                    className="text-sm lg:text-lg"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    {label}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* About LEVEL-UP Section */}
                <motion.section
                    className="p-4 lg:p-8 space-y-8 mb-8 text-justify"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-3xl animate-pulse font-custom font-extrabold text-center">About</h2>
                    <h2 className="text-3xl animate-pulse font-custom font-extrabold text-center">LEVEL-UP</h2>
                    <p className="text-lg">
                        <span style={{ color: "#EC27D5" }}>LEVEL-UP</span> is a <span style={{ color: "#EC27D5" }}>24-hour</span> AI-focused hackathon by <span style={{ color: "#EC27D5" }}>CodeAI x IETE</span>, centered around the theme <span style={{ color: "#EC27D5" }}>&quot;Future Innovation&quot;</span>. Teams of <span style={{ color: "#EC27D5" }}>2-4 members</span> will tackle real-world challenges in <b>healthcare, education, and environmental sustainability</b>, developing AI-driven solutions using provided tools, APIs, and datasets. Projects will be judged on <span style={{ color: "#EC27D5" }}>innovation, technical complexity, impact, and presentation</span>. Top teams will receive <b>cash prizes, opportunities with CodeAI, and participation certificates.</b>
                    </p>
                </motion.section>

                {/* Domains Section */}
                <motion.section
                    className="p-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold text-center animate-pulse font-custom font-extrabold">Domains</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                        {["IOT & Embedded Systems", "AI & ML", "WEB / APP Development", "FINTECH / LEGAL TECH", "GAME TECH", "CYBERSECURITY / BLOCKCHAIN"].map((domain, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex justify-center items-center flex-wrap p-6 rounded-lg shadow-lg text-center bg-cardBgrelative bg-white/20">
                                    <h3 className="text-xl font-bold">{domain}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </motion.div>
            <motion.div
                className="p-0 mt-12 md:p-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-lg md:text-2xl font-bold text-center animate-pulse font-custom font-extrabold text-center mb-8">Hackathon Timeline</h2>
                <HackathonTimeline />
            </motion.div>
            <motion.div
                className="p-4 md:p-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <PrizePool />
            </motion.div>
        </>
    );
};

export default HackathonEvent;
