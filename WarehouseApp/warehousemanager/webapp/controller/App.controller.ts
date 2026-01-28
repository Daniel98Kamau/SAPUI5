import Controller from "sap/ui/core/mvc/Controller";
import Model from "sap/ui/model/Model";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @namespace warehousemanager.controller
 */
export default abstract class App extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    // Helper to get models without repetitive casting
    public getModel(sName?: string): Model {
        return this.getView().getModel(sName);
    }

    // Helper to get the i18n resource bundle for translations
    public getResourceBundle(): ResourceBundle {
        const oModel = this.getOwnerComponent().getModel("i18n") as ResourceModel;
        return oModel.getResourceBundle() as ResourceBundle;
    }
}