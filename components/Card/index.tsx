import { Establishment } from "../../lib/establishment";

interface CardProps {
    establishment: Establishment;
    onClick: () => void;
}

export default function Card({ establishment, onClick }: CardProps) {
    return (
        <div
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <h3 className="font-bold text-lg">{establishment.name}</h3>
            <p className="text-sm text-gray-600 capitalize">
                {establishment.type}
            </p>
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
