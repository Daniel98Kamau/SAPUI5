import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace helloui5.controller
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        MessageToast.show("Your Exploration Begins Now!")
    }

    onPress(): void {
    alert("Button clicked!");
    }

    onSubmit(): void {
        alert("Successfully submitted")
    }
}