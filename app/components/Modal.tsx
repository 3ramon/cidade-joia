"use client"; // serve para os componentes interativos

import { Establishment } from "../../lib/data";

interface ModalProps {
    establishment: Establishment;
    onClose: () => void;
}

export default function Modal({ establishment, onClose }: ModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={onClose}  // fechar quando clicar fora também
        >
            {/* stopPropagation pra não deixar fechar ao clicar dentro */}
            <div
                className="bg-blue-400 rounded-lg max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* cabeçalho do modal usando nome o tipo de estabelecimento + X para fechar */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-xl font-bold">
                            {establishment.name}
                        </h2>
                        <p className="text-gray-600 capitalize">
                            {establishment.type}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>

                {/* implementar galeria com as imagens do estabelecimento **resolver erro de import */}
                <div className="mb-4 space-y-2">
                    {establishment.photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`${establishment.name} ${index + 1}`}
                            className="w-full h-48 object-cover rounded"
                        />
                    ))}
                </div>

                {/* exibindo as informações de cada estabelecimento **implementar mais opcoes na interface */}
                <div className="space-y-2">
                    <p>
                        <span className="font-semibold">Horário:</span>{" "}
                        {establishment.openingHours}
                    </p>
                    <p>
                        <span className="font-semibold">Contato:</span>{" "}
                        {establishment.contact}
                    </p>
                </div>
            </div>
        </div>
    );
}
