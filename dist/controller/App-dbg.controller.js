sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.gr.customcontrol.controller.App", {
			onInit: function () {

			},

			onRatingChange: function (oEvent) {
				var fValue = oEvent.getParameter("value");
				var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
				MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
			}
		});
	});
