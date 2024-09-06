Ext.define('Admin.view.dashboard.AllHistoryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.history',

    requires: [
		'Ext.data.*',
	],
    
    stores: {
        dashboardStore: {
            model: 'Admin.model.SRmodel'
         },
    }
});