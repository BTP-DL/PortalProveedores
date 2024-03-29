sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var GoalsBlock = BlockBase.extend("simplot.portalsqas.view.AltaForm.SectionBlocks.datosImpuesto.DatosImpuestoBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "simplot.portalsqas.view.AltaForm.SectionBlocks.datosImpuesto.DatosImpuestoBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "simplot.portalsqas.view.AltaForm.SectionBlocks.datosImpuesto.DatosImpuestoBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return GoalsBlock;
}, true);
