import BaseController from "./BaseController.controller.js";

/**
 * @namespace navigation.controller
 */
export default class Home extends BaseController {

    public onInit(): void {
        // If your BaseController ever adds logic in its own onInit, 
        // calling super ensures you don't overwrite it.
        super.onInit(); 
        
        // Your home-specific initialization logic here
    }

    /**
     * Example of using a base method
     */
    public onNavToDetails(): void {
        // You can access methods from BaseController directly
        this.getRouter().navTo("RouteInvoiceList");
    }

    onGoToDetailsPress(): void {
        this.onNavToDetails();
    }
}