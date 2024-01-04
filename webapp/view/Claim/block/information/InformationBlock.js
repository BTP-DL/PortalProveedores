sap.ui.define(["sap/ui/core/library", "sap/uxap/BlockBase"], function (coreLibrary, BlockBase) {
	"use strict";

	let ViewType = coreLibrary.mvc.ViewType;

	let InformationBlock = BlockBase.extend("simplot.portalsqas.view.Claim.block.information.InformationBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "simplot.portalsqas.view.Claim.block.information.InformationBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "simplot.portalsqas.view.Claim.block.information.InformationBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return InformationBlock;
}, true);
