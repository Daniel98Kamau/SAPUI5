import BaseComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import { createDeviceModel } from "./model/models";
import { createUserModel } from "./model/models";

/**
 * @namespace helloui5
 */
export default class Component extends BaseComponent {

	public static metadata = {
		manifest: "json",
        interfaces: [
            "sap.ui.core.IAsyncContentCreation"
        ]
	};

	public init() : void {
		// call the base component's init function
		super.init();

        // set the device model
        this.setModel(createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();

        // set the user model
        this.setModel(createUserModel(), "user");

        // set the local invoice model
        const oInvoiceModel = new JSONModel();
        oInvoiceModel.loadData("model/localInvoices.json");
        this.setModel(oInvoiceModel, "invoice");
	}
}