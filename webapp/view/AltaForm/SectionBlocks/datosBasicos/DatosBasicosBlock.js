sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var GoalsBlock = BlockBase.extend("simplot.portalsqas.view.AltaForm.SectionBlocks.datosBasicos.DatosBasicosBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "simplot.portalsqas.view.AltaForm.SectionBlocks.datosBasicos.DatosBasicosBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "simplot.portalsqas.view.AltaForm.SectionBlocks.datosBasicos.DatosBasicosBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return GoalsBlock;
}, true);
