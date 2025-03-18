import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
        <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Header Section */}
            <motion.div
                className="flex justify-center items-center font-custom font-extrabold text-3xl lg:text-5xl mt-32 lg:mt-64"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-white drop-shadow-lg text-center text-2xl md:text-4xl"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    &lt; Level-Up &gt;
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
                        initial={{ opacity: 0, x: 100 }}
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
                            Join us for an exciting hackathon challenge where innovation meets execution.
                        </motion.p>
                        <p>
                            <strong>Date:</strong> 5th & 6th April 2025
                        </p>
                        {/* <p>
                            <strong>Time:</strong> 10:00 AM - 5:00 PM
                        </p> */}
                        <p>
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
        </motion.div>
    );
};

export default HackathonEvent;
