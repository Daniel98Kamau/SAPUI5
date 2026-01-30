/*global QUnit*/
import Controller from "navigation/controller/InvoiceList.controller";

QUnit.module("InvoiceList Controller");

QUnit.test("I should test the InvoiceList controller", function (assert: Assert) {
	const oAppController = new Controller("InvoiceList");
	oAppController.onInit();
	assert.ok(oAppController);
});