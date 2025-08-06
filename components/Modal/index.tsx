"use client";
import { Establishment } from "@/lib/establishment";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
    establishment,
    onClose,
}: {
    establishment: Establishment;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative bg-blue-50 rounded-xl shadow-2xl w-full max-w-2xl mx-4 border-2 border-blue-200 overflow-hidden"
                >
                    <div className="bg-black px-6 py-4">
                        <h2 className="text-2xl font-bold text-white">
                            {establishment.name}
                        </h2>
                        <p className="text-white capitalize">
                            {establishment.type}
                        </p>
                    </div>

                    <div className="p-6 space-y-6">
                        <div
                            className={`grid  ${
                                establishment.photos.length === 1
                                    ? ""
                                    : "grid-cols-2 gap-2"
                            }`}
                        >
                            {establishment.photos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`${establishment.name} ${index + 1}`}
                                    className="w-full object-cover rounded-lg"
                                />
                            ))}
                        </div>

                        <div className="space-y-2 text-gray-700">
                            <div className="flex items-center gap-2">
                                <ClockIcon />
                                <p>{establishment.openingHours}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <PhoneIcon />
                                <p>{establishment.contact}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
                    >
                        <XIcon />
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

// peguei da internet os 3 icons, alterar para 1 arquivo depois
function ClockIcon() {
    return (
        <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
        </svg>
    );
}

function XIcon() {
    return (
        <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
}
