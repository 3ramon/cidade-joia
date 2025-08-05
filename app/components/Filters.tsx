// components/Filters.tsx
"use client";

type FilterType = "todos" | "farmácia" | "restaurante" | "mercado";

export default function Filters({ activeFilter, setActiveFilter }: { 
  activeFilter: FilterType; 
  setActiveFilter: (filter: FilterType) => void 
}) {
  const filters: FilterType[] = ["todos", "farmácia", "restaurante", "mercado"];
  
  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-full capitalize ${
            activeFilter === filter 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}