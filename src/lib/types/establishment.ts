export interface Establishment {
    id: number;
    name: string;
    type: "farmácia" | "academia" | "mercado" | "hamburgueria";
    photos: string[];
    openingHours: string;
    contact: string;
}


