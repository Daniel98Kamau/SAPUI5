import JSONModel from "sap/ui/model/json/JSONModel";
import Device from "sap/ui/Device";

export function createDeviceModel () {
    const model = new JSONModel(Device);
    model.setDefaultBindingMode("OneWay");
    return model;
};

export function createUserModel () {
    const model = new JSONModel({
        user: {
            firstname: "Daniel",
            lastname: "Kamau",
            loggedIn: true
        }
    });
    model.setDefaultBindingMode("TwoWay");
    return model;
};
