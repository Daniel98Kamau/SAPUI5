/*global QUnit*/
import Controller from "warehousemanager/controller/MyWarehouse.controller";

QUnit.module("MyWarehouse Controller");

QUnit.test("I should test the MyWarehouse controller", function (assert: Assert) {
	const oAppController = new Controller("MyWarehouse");
	oAppController.onInit();
	assert.ok(oAppController);
});