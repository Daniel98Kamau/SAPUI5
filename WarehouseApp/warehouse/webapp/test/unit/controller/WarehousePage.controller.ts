/*global QUnit*/
import Controller from "warehouse/controller/Warehouse.controller";

QUnit.module("Warehouse Controller");

QUnit.test("I should test the Warehouse controller", function (assert: Assert) {
	const oAppController = new Controller("Warehouse");
	oAppController.onInit();
	assert.ok(oAppController);
});