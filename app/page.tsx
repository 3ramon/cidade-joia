"use client";
import { useState } from "react";

import { Establishment, establishments } from "../lib/establishment";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { Navbar } from "../components/Navbar";

type FilterType =
    | "todos"
    | "farmácia"
    | "restaurante"
    | "mercado"
    | "hamburgueria";

export default function Home() {
    const [selectedEstablishment, setSelectedEstablishment] =
        useState<Establishment | null>(null);
    const [activeFilter, setActiveFilter] = useState<FilterType>("todos");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEstablishments = establishments.filter(
        (item) => activeFilter === "todos" || item.type === activeFilter
    );

    const results = filteredEstablishments.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <main className="container mx-auto p-4">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    className="border p-2 rounded w-full max-w-xs mb-4"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="flex gap-2 mb-6 flex-wrap">
                    {(
                        [
                            "todos",
                            "farmácia",
                            "restaurante",
                            "mercado",
                            "hamburgueria",
                        ] as FilterType[]
                    ).map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full capitalize text-sm ${
                                activeFilter === filter
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.map((item) => (
                        <Card
                            key={item.id}
                            establishment={item}
                            onClick={() => setSelectedEstablishment(item)}
                        />
                    ))}
                </div>

                {selectedEstablishment && (
                    <Modal
                        establishment={selectedEstablishment}
                        onClose={() => setSelectedEstablishment(null)}
                    />
                )}
            </main>
        </>
    );
}
