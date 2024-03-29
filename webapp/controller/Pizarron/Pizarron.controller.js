sap.ui.define([
	"simplot/portalsqas/controller/BaseController",
	"simplot/portalsqas/utils/models",
	"simplot/portalsqas/utils/gateway",
	"sap/ui/core/BusyIndicator",
    "simplot/portalsqas/utils/modelHelper",
    "simplot/portalsqas/utils/FileReaderHelp",
    "simplot/portalsqas/utils/Common",
    "simplot/portalsqas/utils/controller/CommonNoticia"
], function (Controller,  models, gateway, BusyIndicator,  modelHelper, FileReaderHelp,  Common, CommonNoticia) {
	"use strict";
	var sService = "AUTOGESTION";
	var sModelMainPizarron = "Model_Pizarron";
	return Controller.extend("simplot.portalsqas.controller.Pizarron.Pizarron", {
		onInit: function() {
            //this._onObjectMatched(); 
		},	
		
        onAfterRendering: function(){
            //this.getRouter().getRoute("altaform").attachPatternMatched(this._onObjectMatched, this);             
            this._onObjectMatched(); 			
		},

        _onObjectMatched: function() {
            //this.onLoadModelAlta();
            this.getView().setModel(models.get(sModelMainPizarron));            
        },

        onLoadModelAlta:function(){
            //var oRow = modelHelper.getObjectJson();
            models.load(sModelMainPizarron, {
				"rowsPizarron": [],
                "rowsPizarronCount": 0
			});
        },

        onViewNoticia:function(oEvent){
            var oNoticia = oEvent.getSource().getBindingContext().getObject();
            CommonNoticia.onViewNoticia(oNoticia);
        },

        onSearch:function(){
            var objectData = {
                Query: models.get(sModelMainPizarron).getProperty("/valueSearch"),
                Model: models.get(sModelMainPizarron), 
                Prop1: "Titulo", Prop2: "Titulo",
                ListaData: "/rowsPizarron", ListaDataBack: "/rowsPizarronBack", 
                ListaDataCount: "/rowsPizarronCount", ListaDataRealCount: "/rowsPizarronCount"
            };
            Common.onSearchGlobal(objectData);
        },
        
        onNavBack: function (oEvent) {
            //this.getRouter().navTo("main", {}, true);
			this.getOwnerComponent().getTargets().display("TargetMain");
		}
	});
});