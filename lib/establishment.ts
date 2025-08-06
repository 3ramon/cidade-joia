export interface Establishment {
    id: number;
    name: string;
    type: "farmácia" | "academia" | "mercado" | "hamburgueria";
    photos: string[];
    openingHours: string;
    contact: string;
}

export const establishments: Establishment[] = [
    {
        id: 1,
        name: "Farmácia Pérola",
        type: "farmácia",
        photos: ["/establishments/farmacia.jpg"],
        openingHours: "07:00 - 23:00 (Segunda a Sabado)",
        contact: "(44) 90000-1111 | @farmaciaperola",
    },
    {
        id: 2,
        name: "Texas Burguer",
        type: "hamburgueria",
        photos: [
            "/establishments/burguer.jpg",
            "/establishments/burguer.jpg",
            "/establishments/burguer.jpg",
            "/establishments/burguer.jpg",
        ],
        openingHours: "19:00 - 01:00 (Terça a Domingo)",
        contact: "(44) 91122-3344 | @texasburguer",
    },
    {
        id: 3,
        name: "Supermercado Mendes",
        type: "mercado",
        photos: ["/establishments/mercado.jpg"],
        openingHours: "09:00 - 19:00 (Segunda a Sabado)",
        contact: "(44) 90088-7766 | @supermercadomendes",
    },
    {
        id: 4,
        name: "Academia Monster",
        type: "academia",
        photos: ["/establishments/academia.jpg"],
        openingHours: "05:00 - 21:00 (segunda a sexta)",
        contact: "(44) 95544-3333 | @monsteracademia",
    },
];
