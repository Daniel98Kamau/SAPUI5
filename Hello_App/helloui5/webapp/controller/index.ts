import Text from "sap/m/Text";
import XMLView from "sap/ui/core/mvc/XMLView";

XMLView.create({
    viewName: "helloui5.view.View1"
}).then((view) => {
    view.placeAt("content");
})