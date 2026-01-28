// Defines formatting functions for stock status texts
export default {
    formatStockText: function (status: string): string {
        switch (status) {
            case "Critical": return "Urgent Reorder Required";
            case "Low": return "Stock Running Low";
            default: return "Sufficient Stock";
        }
    }
};