sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var GoalsBlock = BlockBase.extend("simplot.portalsqas.view.Autogestion.SectionBlocks.cuentas.CuentasBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "simplot.portalsqas.view.Autogestion.SectionBlocks.cuentas.CuentasBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "simplot.portalsqas.view.Autogestion.SectionBlocks.cuentas.CuentasBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return GoalsBlock;
}, true);
