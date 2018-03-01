sap.ui.define([], function() {
	"use strict";
	return {
		delivery: function(sMeasure, iWeight) {
			var oResourceBundle =
				this.getView().getModel("i18n").getResourceBundle(),
				sResult = "";
			if (sMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				sResult = oResourceBundle.getText("Mail Delivery");
			} else if (iWeight < 5) {
				sResult = oResourceBundle.getText("Parcel Delivery");
			} else {
				sResult = oResourceBundle.getText("Carrier Delivery");
			}
			return sResult;
		}
	};
});