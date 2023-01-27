var complaintGridFilter = new Array('complaintTxnId','fileName','txnDate','origTransDate','srcCity','srcMerchantName','srcMerchantId','origContractNumber','origMemberId','destContractNumber','destMemberId','txnAmount','parmValue','cardHolderBank','txnType','transCondition','origTransCondition');
var cbsGridFilter = new Array('complaintTxnId');

Ext.define('DashBoard.view.complaint.ComplaintController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.complaint',

	onSuccess: function(request, response) {

		var controller 	= request.sender;
		var view 		= controller.view;
		var headerRef 	= request.header.reference;
		var data 		= response.payload[1].payload; 

		if (isMessageBox) {
			Ext.MessageBox.hide();
			isMessageBox = false;
		}

		if(headerRef == 'loadComplaintData'){
			Ext.getBody().unmask();

			controller.lookupReference('totalComplaintData').setValue(data.length);

			loadDataInGlobalStore(data, 'ComplaintStore');
		}
	},

	sendRequest: function(actionName, contentType, payload, header) {
		
		var component = null;
		
		if (Ext.isEmpty(payload)) {
			payload = new Array();
		}
		else if(!Ext.isEmpty(payload.reference)){
			component = payload.reference;
		}
		else if(!Ext.isEmpty(payload[0]) && payload[0].reference != 'undefined'){
			component = payload[0].reference;
		}

		var request = {
			actionName      : actionName,
			contentType     : contentType,
			requestId       : null,
			requestType     : null,
			header          : header,
			body            : payload,
			message         : null,
			dispatchType    : null,
			sender          : this,
			component       : component,
			onSuccess       : this.onSuccess,
			onError         : this.onError
		};

		var requestId = nMessageProcessor.sendRequest(request); 
	},
	onComplaintRender: function(btn, eOpts){
		this.loadComplaintData(new Date(), new Date());
	},
	onComplaintSearch: function(){
		var toDate 		= this.lookupReference('toDateComplaint').value;
		var fromDate 	= this.lookupReference('fromDateComplaint').value;

		this.loadComplaintData(fromDate, toDate);
	},
	loadComplaintData: function(fromDate,toDate){
		var me = this;

		var header = {
			reference  : 'loadComplaintData'
		};

		var payload = {
			userModkey		: 100000,
			userModifiedId	: 100000,
			fromDate		: Ext.isEmpty(fromDate) ? null : Ext.Date.format(fromDate, 'Ymd'),
			toDate			: Ext.isEmpty(toDate) ? null : Ext.Date.format(toDate, 'Ymd'),
			reference 		: 'loadComplaintData'
		};

		Ext.getBody().mask('Please wait...');

		me.sendRequest(appActionType.ACTION_TYPE_SELECT, 'Complaint', payload, header);
	},

	onComplaintGridFilter: function (component, newValue, oldValue, eOpts) {
		var grid = this.lookupReference('complaintDataGrid');
		this.filterGrid(grid, newValue, complaintGridFilter);
	},

	onClearFilter: function () {
		var complaint = this.lookupReference('complaintDataGrid');
		complaint.store.clearFilter();
		var cbs = this.lookupReference('cbsGridComplaint');
		cbs.store.clearFilter();
	},		

	filterGrid: function (grid, newValue, arrOfresultFilter) {
		grid.store.clearFilter();
		if (newValue) {
			var matcher = new RegExp(Ext.String.escapeRegex(newValue), "i");
			grid.store.filter({
				filterFn: function (record) {
					var match = false;
					Ext.Object.each(record.data, function (property, value) {
						if (arrOfresultFilter.indexOf(property) > -1) {
							match = match || matcher.test(String(value));
						}
					});
					return match;
				}
			});
		}
	}
});

function createMessageBox(title, message){
  Ext.create('Ext.window.MessageBox', {
      alwaysOnTop: true,
      closeAction: 'destroy'
  }).show({
      title: 'title',
      buttons: Ext.Msg.OK,
      message: message
  });
}