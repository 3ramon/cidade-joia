"use client";
import { useState } from "react";

import { Establishment, establishments } from "../lib/data";
import Card from "./components/Card";
import Modal from "./components/Modal";

// setando os tipos de filtros
type FilterType =
    | "todos"
    | "farmácia"
    | "restaurante"
    | "mercado"
    | "hamburgueria";

export default function Home() {
    // state do estabelecimento selecionado
    const [selectedEstablishment, setSelectedEstablishment] =
        useState<Establishment | null>(null);
    // state do filtro selecionado
    const [activeFilter, setActiveFilter] = useState<FilterType>("todos");
    // state da pesquisa
    const [searchTerm, setSearchTerm] = useState("");

    // fazendo o filtro pelo type
    const filteredEstablishments = establishments.filter(
        (item) => activeFilter === "todos" || item.type === activeFilter
    );

    // fazendo o filtro pela busca verificando o nome **incluir o type aqui tambem
    const results = filteredEstablishments.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        // containerzao
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Guia da Cidade Jóia</h1>

            {/* campo do filtro de busca */}
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                className="border p-2 rounded w-full max-w-xs mb-4"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* map dos filtros por type */}
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
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* cards organizados com o grid **pegar as fotos para tela principal antes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((item) => (
                    <Card
                        key={item.id}
                        establishment={item}
                        onClick={() => setSelectedEstablishment(item)}
                    />
                ))}
            </div>


            {/* modal com verificao só do estado de abert ou fechado **verificar possivel bug */}
            {selectedEstablishment && (
                <Modal
                    establishment={selectedEstablishment}
                    onClose={() => setSelectedEstablishment(null)}
                />
            )}
        </main>
    );
}
