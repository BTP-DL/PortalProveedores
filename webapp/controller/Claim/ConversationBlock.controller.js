sap.ui.define([
    "simplot/portalsqas/controller/BaseController",
    "simplot/portalsqas/model/Claim/formatter"
], function (Controller, formatter) {
    "use strict";
    return Controller.extend("simplot.portalsqas.controller.Claim.ConversationBlock", {
        formatter: formatter,
        /* =========================================================== */
        /* Lifecycle events                                            */
        /* =========================================================== */
        onInit: function () {
        }

        /* =========================================================== */
        /* event handlers                                              */
        /* =========================================================== */

        /* =========================================================== */
        /* Private Methods                                             */
        /* =========================================================== */
    });
});