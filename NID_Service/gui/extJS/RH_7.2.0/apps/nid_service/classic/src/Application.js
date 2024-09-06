Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    stores: [
        'NavigationTree',
        'AS_Store',
        'SRStore',
        'S_Result',
       
    ],

    // defaultToken : 'dashboard',
    // defaultToken: 'login',

    // // The name of the initial view to create. This class will gain a "viewport" plugin
    // // if it does not extend Ext.Viewport.

    
   
    launch: function () {
        Ext.require('Ext.form.field.Display');
        Ext.require('Ext.form.FieldContainer');
        Ext.require('Ext.layout.container.Form');
    
        Ext.Ajax.setTimeout(1800000);
    
        Ext.merge(appConstants, nConstants);
        Ext.merge(appActionType, nActionType);
        Ext.merge(appContentType, nContentType);
        Ext.merge(appStatusType, nStatusType);
    
        Ext.ariaWarn = Ext.emptyFn;
    
        // this.redirectTo("admindashboard");
        // Ext.app.Application.instance.redirectTo("admindashboard");
    },  
    
    // mainView: sessionStorage.getItem("LogInState") == ('LogIn') ? 'Admin.view.main.Main' : 'Admin.view.login.Login',



   mainView:'Admin.view.main.Main',

    
    // onAppUpdate: function () {
    //     Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
    //         function (choice) {
    //             if (choice === 'yes') {
    //                 window.location.reload();
    //             }
    //         }
    //     );
    // }
});
