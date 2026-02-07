import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import Input from "sap/m/Input";

/**
 * @namespace helloui5.controller
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        MessageToast.show("Your Exploration Begins Now!")
        const data = {
            user: {
                name: "John Doe",
                loggedIn: false
            }
        };
        const dataModel = new JSONModel(data);
        this.getView()?.setModel(dataModel, "user");
    }

    onPress(): void {
        alert("Button Pressed!");
    }

    onloginPress(): void {
        const oUserModel = this.getView()?.getModel("user") as JSONModel;
        const bLoggedIn = oUserModel.getProperty("/user/loggedIn");
        if (bLoggedIn) {
            oUserModel.setProperty("/user/loggedIn", false);
            MessageToast.show("You have successfully logged out.");
        } else {
            oUserModel.setProperty("/user/loggedIn", true);
            MessageToast.show("You have successfully logged in.");
        }
    }

    private _getUserModel() {
        return this.getView()?.getModel("user");
    }

    onShowInvoiceList(): void {
        (this.getOwnerComponent() as any)?.getRouter()?.navTo("InvoiceList");
    }

    onSignUpPress(): void {

    }

    onSettingsPress(): void {

    }
    
}
