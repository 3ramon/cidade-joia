import { Establishment } from "../../lib/data";

interface CardProps {
    establishment: Establishment;
    onClick: () => void;
}

export default function Card({ establishment, onClick }: CardProps) {
    return (
        // container principal
        <div
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <h3 className="font-bold text-lg">{establishment.name}</h3>
            <p className="text-sm text-gray-600 capitalize">
                {establishment.type}
            </p>
            {/* ajustar a parte das fotos e import **resolver erro de import */}
            {establishment.photos[0] && (
                <img
                    src={establishment.photos[0]}
                    alt={establishment.name}
                    className="mt-2 w-full h-32 object-cover rounded"
                />
            )}
        </div>
    );
}
