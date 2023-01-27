Ext.define('DashBoard.view.complaint.Complaint', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.complaint',

	requires: [
		'Ext.data.*',
	],

	stores: {
		complaintStore: {
        model: 'Admin.model.Complaint'
     },
	}
});
