import App from "./App.controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import { IProduct, IViewModel } from "../types/AppTypes";
import MessageToast from "sap/m/MessageToast";
import Fragment from "sap/ui/core/Fragment";
import Dialog from "sap/m/Dialog";

/**
 * @namespace warehouse.controller
 */
export default class Warehouse extends App {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        // 1. Setup Local Product Data
        const oProductData: IProduct = {
            ID: "M001",
            Name: "Premium Maize Flour",
            Price: 180,
            Currency: "KES",
            StockStatus: "High"
        };

        // 2. Create and set models
        this.getView().setModel(new JSONModel(oProductData), "products");
        
        const oViewModel: IViewModel = {
            isBusy: false,
            delay: 0,
            title: "Inventory Dashboard"
        };
        this.getView().setModel(new JSONModel(oViewModel), "view");
    }

    // Inside your controller
    public async onHighlightTitle(): Promise<void> {
        // Use Fragment.byId to find the control within the prefixed namespace
        const oDialog = await this._pDialog;
        const oInput = Fragment.byId(this.getView().getId(), "idProductDialog") as Dialog;
        
        oInput.addStyleClass("myCustomHighlight");
    }

    // Event handler for ordering more stock
    public onOrderMore(): void {
        MessageToast.show("Order placed for more stock!");
    }

    public onUpdateStock(): void {
        // Get data from Model, not the UI
        const oModel = this.getModel("products") as JSONModel;
        const oData = oModel.getData() as IProduct;

        if (oData.Price > 200) {
            oModel.setProperty("/StockStatus", "Critical");
            MessageToast.show(this.getResourceBundle().getText("priceWarning"));
        }
    }

    private _pDialog: Promise<Dialog>;

    public async onOpenQuickEdit(): Promise<void> {
        const oView = this.getView();

        // 2. Lazy loading: create the fragment only once
        if (!this._pDialog) {
            this._pDialog = Fragment.load({
                id: oView.getId(), // Connects fragment IDs to View IDs
                name: "com.myorg.view.fragments.ProductDialog",
                controller: this // Tells fragment to use 'this' controller for events
            }).then((oFragment) => {
                // 3. Connect the fragment to the View's lifecycle (models, i18n)
                oView.addDependent(oFragment as Dialog);
                return oFragment as Dialog;
            });
        }

        const oDialog = await this._pDialog;
        oDialog.open();
    }

    public async onCloseDialog(): Promise<void> {
        const oDialog = await this._pDialog;
        oDialog.close();
    }

    public async onRefreshData(): Promise<void> {
        const oViewModel = this.getModel("view") as JSONModel;
        oViewModel.setProperty("/isBusy", true);

        // Simulate a data fetch with a timeout
        setTimeout(() => {
            oViewModel.setProperty("/isBusy", false);
            MessageToast.show("Data refreshed successfully!");
        }, 2000);
    }
}