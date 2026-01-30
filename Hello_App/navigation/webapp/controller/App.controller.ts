import BaseController from "./BaseController.controller.js";
import Component from "sap/ui/core/Component";
import View from "sap/ui/core/mvc/View";

/**
 * @namespace navigation.controller
 */
// Ensure BaseController extends from sap/ui/core/mvc/Controller
export default class App extends BaseController {
    public onInit(): void {
        // Apply the content density class (compact or cozy) to the root view
        const oComponent = (this as BaseController).getOwnerComponent() as Component;
        const oView = (this as any).getView(); // TypeScript workaround if BaseController type is not correct
        if (oComponent && oView) {
            oView.addStyleClass((oComponent as any).getContentDensityClass());
        }
    }
}