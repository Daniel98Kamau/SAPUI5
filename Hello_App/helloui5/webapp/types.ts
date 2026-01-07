// Type definitions for helloui5 application, JSON models
export interface IInventoryData {
    productName: string;
    stockCount: number;
    price: number;
    status: "In Stock" | "Out of Stock";
}

export interface ISalesSummary {
    totalRevenue: number;
    lastUpdated: string;
}