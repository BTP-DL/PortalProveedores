sap.ui.define(["sap/ui/core/library", "sap/uxap/BlockBase"], function (coreLibrary, BlockBase) {
	"use strict";

	let ViewType = coreLibrary.mvc.ViewType;

	let AttachmentBlock = BlockBase.extend("simplot.portalsqas.view.Claim.block.attachment.AttachmentBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "simplot.portalsqas.view.Claim.block.attachment.AttachmentBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "simplot.portalsqas.view.Claim.block.attachment.AttachmentBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return AttachmentBlock;
}, true);
