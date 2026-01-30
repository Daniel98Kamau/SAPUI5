import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import Router from "sap/ui/core/routing/Router";
import Model from "sap/ui/model/Model";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import History from "sap/ui/core/routing/History";

/**
 * @namespace navigation.controller
 */
export default abstract class BaseController extends Controller {
    
    public onInit(): void {
        // Standard base init logic (if any)
    }

    /**
     * Convenience method for accessing the router of the component.
     * @returns {Router} the router for this component
     */
    public getRouter(): Router {
        return UIComponent.getRouterFor(this);
    }

    /**
     * Convenience method for getting the view model by name.
     * @param {string} [sName] the model name
     * @returns {Model} the model instance
     */
    public getModel(sName?: string): Model {
        const oView = this.getView();
        const oViewModel = oView ? oView.getModel(sName) : undefined;
        const oOwnerComponent = this.getOwnerComponent?.();
        const oComponentModel = oOwnerComponent ? oOwnerComponent.getModel(sName) : undefined;
        if (oViewModel) {
            return oViewModel as Model;
        } else if (oComponentModel) {
            return oComponentModel as Model;
        } else {
            throw new Error(`Model${sName ? ' ' + sName : ''} not found`);
        }
    }

    /**
     * Convenience method for getting the resource bundle.
     * @returns {ResourceBundle} the resource bundle of the component
     */
    public getResourceBundle(): ResourceBundle {
        const oOwnerComponent = this.getOwnerComponent?.();
        if (!oOwnerComponent) {
            throw new Error("Owner component is undefined");
        }
        const oModel = oOwnerComponent.getModel("i18n") as ResourceModel;
        return oModel.getResourceBundle() as ResourceBundle;
    }

    /**
     * Global Back Navigation logic.
     */
    public onNavBack(): void {
        const sPreviousHash = History.getInstance().getPreviousHash();

        if (sPreviousHash !== undefined) {
            window.history.go(-1);
        } else {
            // Default back to home if no history exists
            this.getRouter().navTo("RouteHome", {}, true);
        }
    }

    
}