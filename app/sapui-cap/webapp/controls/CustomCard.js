sap.ui.define([
	"sap/ui/core/Control"
], function(Control) {
	"use strict";

	return Control.extend("sapuicap.control.CustomCard", {

		metadata: {
			properties: {
				width: {
					type: "sap.ui.core.CSSSize" 
                },
				height: {
					type: "sap.ui.core.CSSSize"
				}
			},
			aggregations: {
				content: {
					type: "sap.ui.core.Control"
				}
			},
			defaultAggregation: "content"
		},

        init: function() {
            //initialisation code, in this case, ensure css is imported
            var libraryPath = jQuery.sap.getModulePath("sapuicap"); //get the server location of the ui library
            jQuery.sap.includeStyleSheet(libraryPath + "/controls/CustomCard.css"); //specify the css path relative from the ui folder
        },

		renderer: function(oRm, oControl) {
			oRm.write("<div");
			oRm.write(" style=\"width: " + oControl.getWidth() + "; height: " + oControl.getHeight() + ";\"");
			oRm.addClass("card");
            oRm.writeControlData(oControl);
			oRm.write(">");
			$(oControl.getContent()).each(function() {
				oRm.renderControl(this);
			});
			oRm.write("</div>");
		}
	});

});