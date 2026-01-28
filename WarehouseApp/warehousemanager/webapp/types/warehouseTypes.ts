// Data structure for a product in the warehouse
export interface IProduct {
    ID: string;
    Name: string;
    Price: number;
    Currency: string;
    StockStatus: "Low" | "High" | "Critical";
}

// State for the UI (e.g., controlling visibility or busy states)
export interface IViewModel {
    isBusy: boolean;
    delay: number;
    title: string;
}