Ext.define('DashBoard.view.complaint.FlexGridComplaint', {
	extend: 'Ext.panel.Panel',
	xtype: 'npsb-grid-complaint',

	requires: [
		'Ext.grid.*',
		'Ext.toolbar.Paging',
		'Ext.layout.container.Border'
	],


	controller: 'complaint',

	layout: 'border',
    width: '100%',
    height: 0.90 * (window.innerHeight),
    cls: Ext.baseCSSPrefix + 'shadow',

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

	listeners: {
		render: 'onComplaintRender'
	},

	
	items: [
		{
			// title: '<span style="color:white;">Complaints</span>',
			collapsible: false,
            region: 'center',
			xtype: 'gridpanel',
			reference: 'complaintDataGrid',
			height: 0.50 * (window.innerHeight),
			store: {
				type: 'personnel'
			},
			columns: [
				{ 
					xtype: 'gridcolumn',
					text: 'Complaint Id',
					dataIndex: 'customerComplaintKey',
					hidden: true,
					filter: {
						type: 'string' 
					}
				},
				{
					xtype: 'datecolumn',
					text: 'Complaint Date',
					width: 175,
					dataIndex: 'txnDate',
					format:'d-M-y h:i:s A',
					filter: {
						type: 'date' 
					}
				},
				{
					xtype: 'datecolumn',
					text: 'Time',
					width: 175,
					dataIndex: 'txnDate',
					format:'d-M-y h:i:s A',
					filter: {
						type: 'date' 
					}
				},	 				
				{ 
					xtype: 'gridcolumn',
					text: 'Atm Owner',
					width: 100,
					dataIndex: 'name',
					filter: {
						type: 'string' 
					}
				},
				{
					xtype: 'numbercolumn',
					text: 'Transaction Amount',
					width: 100,
					dataIndex: 'txnAmount',
					format: '0,000',
					filter: {
						type: 'number' 
					}
				},
				{
					xtype: 'gridcolumn',
					text: 'Account No.',
					dataIndex: 'accountNumber',
					width: 150,
					filter: {
						type: 'string' 
					}
				},
				{
					xtype: 'gridcolumn',
					text: 'Card No.',
					dataIndex: 'cardNumber',
					width: 150,
					filter: {
						type: 'string' 
					}
				},
				{
					xtype: 'gridcolumn',
					text: 'Atm Location',
					width: 100,
					dataIndex: 'atmLocation',
					filter: {
						type: 'string' 
					}
				},
				{
					xtype: 'gridcolumn',
					text: 'Status',
					dataIndex: 'colour',
					flex: 1,
					tdCls: 'x-change-cell' ,
					viewConfig: {
						getRowClass: function(record, index) {
							var c = record.get('colour');
							if (c == 'green') {
								return 'green';
							} else if (c == 'red') {
								return 'red';
							}
						}
					},
					renderTo: Ext.getBody()
					// renderer : function(dataIndex, meta) {
					// 	if(parseString(dataIndex) = 'green') {
					// 		meta.style = "background-color:green;";
					// 	} else {
					// 		meta.style = "background-color:red;";
					// 	}
					// 	return value;
					// }
					// filter: {
					// 	type: 'string' 
					// }
				}
			]
		}
	]
});