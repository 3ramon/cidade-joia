"use client";

import Link from "next/link";
import { motion } from "framer-motion";
export function Navbar() {
    const navItems = [
        { name: "Início", href: "#" },
        { name: "Estabelecimentos", href: "#" },
        { name: "Da cidade, para a cidade", href: "#" },
        { name: "Sugira um estabelecimento", href: "#" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <header className="bg-white shadow-sm">
                <div className="container px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link href="#" className="text-xl font-bold">
                                Cidade Jóia
                                {/* **criar a logo e colocar aqui */}
                            </Link>
                        </div>

                        {/* **resolver bug de sumir, usar useeffect provavelmente */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-20">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-400 hover:text-black transition-colors font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="items-center space-x-4">
                            <Link
                                href="#"
                                className="items-center justify-center rounded-md bg-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors shadow-sm"
                            >
                                Fale conosco
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </motion.div>
    );
}
