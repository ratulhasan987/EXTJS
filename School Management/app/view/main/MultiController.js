Ext.define('School.view.main.MutliController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.multi',
    init: function(){

    },

    routes: {
        panelone: 'onPanelOne',
        paneltwo: 'onPanelTwo'
    },
   onButtonPress1: function() {
       this.redirectTo("panelone", true);
   },
   onButtonPress2: function() {
       this.redirectTo("paneltwo", true);
   },
   onPanelOne: function() {
       this.getView().down("app-multi").setActiveItem(1);
   },
   onPanelTwo: function() {
       this.getView().down("tabpanel").setActiveItem(1);
   },
    
});