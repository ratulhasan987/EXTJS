Ext.define('Admin.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',

    requires: [
		'Ext.data.*',
	],
    
    stores: {
        dashboardStore: {
            model: 'Admin.model.SRmodel'
         },
    }
});
