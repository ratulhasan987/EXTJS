Ext.define('nazdaq.message.MessageProcessor', {
	alias: 'nMessageProcessor',
	alternateClassName: 'nMessageProcessor',
	statics: {

		sendRequest: function(request) {

			// function(actionName, contentType, payload, sendingController, control, msgHeader)

			var clientSource = {
				id		 	: request.sender.getId(),
				uniqueId	: request.sender.getId(),
				//uniqueId	: request.sender.getUniqueId(),
				alias		: request.sender.alias
			};


			// TODO_H : use MessageHeader Object

			var header = Ext.create('Ext.util.MixedCollection');

			header.add(nMessageHeader.SOURCE, appConstants.SOURCE);
			header.add(nMessageHeader.CLIENT_SOURCE, clientSource);

			header.add(nMessageHeader.OBJECT_TYPE, request.contentType);
			
			header.add(nMessageHeader.DESTINATION, appConstants.DESTINATION);
			
			

			header.add(nMessageHeader.CONTENT_TYPE, request.contentType);
			header.add(nMessageHeader.ACTION_TYPE, request.actionName);
			// if(loginUser){
			// 	header.add(nMessageHeader.USER_ID,loginUser.id);
			// 	header.add('senderId',loginUser.id);
			// }
			
		//	header.add(nMessageHeader.fromDate, request.actionName);
		//	header.add(nMessageHeader.fromDate, request.actionName);

			if (!Ext.isEmpty(request.header)) {
				header.addAll(request.header);

				/*if (msgHeader.isMixedCollection) {
					header.addAll(msgHeader.map);
				}*/
			}

			// validate
			if (!nMessageProcessor.validateMessageHeader(header)) {
				console.log('Erorr Message validation failed');
				return;
			}


			var message = nMessageBuilder.withPayload(request.body).setHeader(header).build();

			var msgId = message.getHeader().getId();

			request.requestId = msgId;
			request.message = message;

			nMessageDispatcher.dispatch(request);

			header = null;
			message = null;

			return msgId;
		},

		processResponse: function(request, response) {

			//console.log('request : ', request, '\nresponse :', response);

			if( request.actionName === "SELECT_TODAYS_DATA" && request.contentType.toUpperCase() === "DASHBOARD" ) {

				if( response && response.payload[1] && response.payload[1].payload[0] ) {
					let pl = response.payload[1].payload[0];
					let todaysTotalDispute = pl.todaysTotalDispute || 0;
					let todaysDisputeOwn = pl.todaysDisputeOwn || 0;
					let todaysAutoReversal = pl.todaysAutoReversal || 0;
					let todaysComplaint = pl.todaysComplaint || 0;
					let todaysOutstanding = pl.todaysOutstanding || 0;
					//
					let totalDispute = pl.totalDispute || 0;
					let disputeOwn = pl.disputeOwn || 0;
					let disputeNpsb = pl.disputeNpsb || 0;
					let disputeQcash = pl.disputeQcash || 0;
					let autoReversalDispute = pl.autoReversalDispute || 0;
					//
					let totalComplaint = pl.totalComplaint || 0;
					let newComplaint = pl.newComplaint || 0;
					let inprogressComplaint = pl.inprogressComplaint || 0;
					let resolvedComplaint = pl.resolvedComplaint || 0;
					let closedComplaint = pl.closedComplaint || 0;

					document.querySelector('#todaysTotalDispute').innerHTML = todaysTotalDispute;
					document.querySelector('#todaysDisputeOwn').innerHTML = todaysDisputeOwn;
					document.querySelector('#todaysAutoReversal').innerHTML = todaysAutoReversal;
					document.querySelector('#todaysComplaint').innerHTML = todaysComplaint;
					document.querySelector('#todaysOutstanding').innerHTML = todaysOutstanding;
					//
					document.querySelector('#totalDispute').innerHTML = totalDispute;
					document.querySelector('#disputeOwn').innerHTML = disputeOwn;
					document.querySelector('#disputeNpsb').innerHTML = disputeNpsb;
					document.querySelector('#disputeQcash').innerHTML = disputeQcash;
					document.querySelector('#autoReversalDispute').innerHTML = autoReversalDispute;
					//
					document.querySelector('#totalComplaint').innerHTML = totalComplaint;
					document.querySelector('#newComplaint').innerHTML = newComplaint;
					document.querySelector('#inprogressComplaint').innerHTML = inprogressComplaint;
					document.querySelector('#resolvedComplaint').innerHTML = resolvedComplaint;
					document.querySelector('#closedComplaint').innerHTML = closedComplaint;
				}
			}

			var statusMessage = null;
			var contentMessageArray = null;

			// STATUS Msg only
			if(response.header){
				if (response.header.contentType == appContentType.CONTENT_TYPE_STATUS) {
					statusMessage = response;
				}
				else if (response.header.contentType == appContentType.CONTENT_TYPE_MULTI_MESSAGE || response.header.contentType == appContentType.CONTENT_TYPE_MULTI) {

					// MULTI Msg
					if (response.payload != null && response.payload.length > 0) {

						contentMessageArray = new Array();

						for (var i = 0, j = 0; i < response.payload.length; i++) {

							if (response.payload[i].header.contentType == appContentType.CONTENT_TYPE_STATUS) {
								statusMessage = response.payload[i];
							}
							else {
								contentMessageArray[j++] = response.payload[i];
							}
						}
					}
				}
				else {
					// Content Msg Only
					contentMessageArray = new Array(1);
					contentMessageArray[0] = response;
				}
			}
			else if (response.headers){
				if (response.headers.contentType == appContentType.CONTENT_TYPE_STATUS) {
					statusMessage = response;
				}
				else if (response.headers.contentType == appContentType.CONTENT_TYPE_MULTI_MESSAGE || response.headers.contentType == appContentType.CONTENT_TYPE_MULTI) {

					// MULTI Msg
					if (response.payload != null && response.payload.length > 0) {

						contentMessageArray = new Array();

						for (var i = 0, j = 0; i < response.payload.length; i++) {

							if (response.payload[i].headers.contentType == appContentType.CONTENT_TYPE_STATUS) {
								statusMessage = response.payload[i];
							}
							else {
								contentMessageArray[j++] = response.payload[i];
							}
						}
					}
				}
			}
			else {
				// Content Msg Only
				contentMessageArray = new Array(1);
				contentMessageArray[0] = response;
			}

			// handle STATUS Msg
			if (!Ext.isEmpty(statusMessage)) {
				if (!Ext.isEmpty(statusMessage.payload)) {

					var statusMessageText = null, isErrorStatus = false;

					for (var i = 0; i < statusMessage.payload.length; i++) {

						if (statusMessage.payload[i].status == appStatusType.STATUS_TYPE_ERROR) {

							isErrorStatus = true;

							if ( i == 0) {
								statusMessageText = (statusMessage.payload[i].statusText == null || statusMessage.payload[i].statusText == '') ? 'Server Error' : statusMessage.payload[i].statusText;
							}
							else {
								statusMessageText = statusMessageText + '<br/>' + ((statusMessage.payload[i].statusText == null || statusMessage.payload[i].statusText == '') ? 'Server Error' : statusMessage.payload[i].statusText);
							}
						}
					}

					if (isErrorStatus) {

						if (Ext.isEmpty(statusMessageText)) {
							statusMessageText = 'Server Error', 'Unknown status text: status message text is empty';

							//unmask
 							Ext.getBody().unmask();
						}

						if (!Ext.isEmpty(request.onError))
						{
							// forward to ErrorHandler
							request.onError(request, response, statusMessageText);
							return;
						}
						else
						{
							Ext.MessageBox.alert('Server Error', statusMessageText);

							//unmask
 							Ext.getBody().unmask();

							return;
						}
					}
				}
				else {
					Ext.MessageBox.alert('Server Error', 'Unknown status: status message is empty');

					//unmask
 					Ext.getBody().unmask();

					return;
				}
			}

			// handle Content Msg
			if (!Ext.isEmpty(contentMessageArray)) {

				request.onSuccess(request, response);

				//ControllerCoordinator.handleResponse(contentMessageArray, controller, control);
			}
			else {
				if(response.header.actionType == 'LOGIN'){
					request.onLoginFailed(request, response);
				}
				/*else if(response.header.actionType == 'UPDATE_LOCAL_STATUS'){
					request.onStatusUpdate(request, response);
				}*/
				else{
					//Ext.MessageBox.alert('Server Error', 'Content message payload must not empty');
					Ext.Msg.show({
						title: 'Server Error',
						message: 'Content message payload must not empty',
						buttons: Ext.Msg.OK,
						icon: Ext.Msg.INFO,
						closable: false,
					});
					//unmask
 					Ext.getBody().unmask();

					return;
				}
				
			}
		},


		validateMessageHeader: function(header) {
			if (header == null || !header.isMixedCollection) {
				console.error('Incorrect message header');
				return false;
			}

			if (header.getByKey(nMessageHeader.SOURCE) == null || header.getByKey(nMessageHeader.SOURCE) == '')
			{
				console.error('Message header field \'source\' must not be null or empty');
				return false;
			}

			if (header.getByKey(nMessageHeader.DESTINATION) == null || header.getByKey(nMessageHeader.DESTINATION) == '')
			{
				console.error('Message header field \'destination\' must not be null or empty');
				return false;
			}

			if (header.getByKey(nMessageHeader.CONTENT_TYPE) == null || header.getByKey(nMessageHeader.CONTENT_TYPE) == '')
			{
				console.error('Message header field \'contentType\' must not be null or empty');
				return false;
			}

			if (header.getByKey(nMessageHeader.ACTION_TYPE) == null || header.getByKey(nMessageHeader.ACTION_TYPE) == '')
			{
				console.error('Message header field \'actionType\' must not be null or empty');
				return false;
			}

			return true;
		}
	}
});