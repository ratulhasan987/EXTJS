Ext.define('Admin.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login-login',

	// onKeyPress: function (field, e) {
	// 	if (e.getKey() == e.ENTER) {
	// 		this.onLoginButtonClick(field, e);
	// 	}
	// },

	/**
	*  Application access gateway. It sends user information to confirm them, 
	*  whether they have an authentication.If then so, user can do their task 
	*  as they should. NOPE
	*/
	//add eye button controller for password start..........................
	onEyeButtonClick: function (button) {

			button.setIconCls('x-fa fa-eye');
			var passwordField = this.lookup('passD');
			passwordField.inputEl.dom.type = passwordField.inputEl.dom.type === 'password' ? 'text' : 'password';

			if(passwordField.inputEl.dom.type == 'text'){
				button.setIconCls('x-fa fa-eye');
			}
			else{
				button.setIconCls('x-fa fa-eye-slash');
			}
	},
	//add eye button controller for password end..........................
	// LATEST 

	// onLoginButtonClick: function (button, e, eOpts) {

	// 	/*Login config for dev and prod+uat*/
	// 	var isDevLogin = false;
	// 	//var isDevLogin = true;

	// 	var loginForm = this.lookupReference('loginFormD');
	// 	var captcha = this.lookupReference('captchaD').value;

	// 	if (isDevLogin) {

	// 		/*for testing purpose*/
	// 		var userId = 'nazdaq_dev';
	// 		var password = '1234';

	// 		var header = {
	// 			destination: 'login'
	// 		};

	// 		var payload = {
	// 			loginName: userId,
	// 			password: password,
	// 			reference: 'onLoginButtonClick'
	// 		};

	// 		this.sendRequest(appActionType.ACTION_TYPE_LOGIN, appContentType.CONTENT_TYPE_USER, payload, header);
	// 	}
	// 	else {

	// 		/*prod and uat*/
	// 		var captchaText = this.lookupReference('captchaTextD').value;
	// 		var validCaptcha = ValidCaptcha(captchaText, captcha);

	// 		if (loginForm.isValid()) {

	// 			if (validCaptcha) {

	// 				var userId = this.lookupReference('uidD').value;

	// 				var password = this.lookupReference('passD').value;

	// 				var header = {
	// 					destination: 'login'
	// 				};

	// 				var payload = {
	// 					loginName: userId,
	// 					password: password,
	// 					reference: 'onLoginButtonClick'
	// 				};

	// 				this.sendRequest(appActionType.ACTION_TYPE_LOGIN, appContentType.CONTENT_TYPE_USER, payload, header);

	// 				this.lookupReference('passD').reset();
	// 			}
	// 			else {
	// 				icon = Ext.MessageBox['error'.toUpperCase()];

	// 				Ext.MessageBox.show({
	// 					title: 'Error',
	// 					msg: "Security ID didn't match!",
	// 					buttons: Ext.MessageBox.OK,
	// 					animateTarget: this.lookupReference('loginBtnD'),
	// 					scope: this,
	// 					fn: this.showResult,
	// 					icon: icon
	// 				});

	// 				this.loadCaptcha();
	// 			}
	// 		}
	// 	}
	// },

	// onCancelButtonClick: function (button, e, eOpts) {

	// 	this.lookupReference('loginFormD').reset();
	// 	this.loadCaptcha();
	// },

	// sendRequest: function (actionName, contentType, payload, header) {

	// 	var component = null;

	// 	if (Ext.isEmpty(payload)) {
	// 		payload = new Array();
	// 	} else if (!Ext.isEmpty(payload.reference)) {
	// 		component = payload.reference;
	// 	} else if (!Ext.isEmpty(payload[0]) && payload[0].reference != 'undefined') {
	// 		component = payload[0].reference;
	// 	}

	// 	var request = {
	// 		actionName: actionName,
	// 		contentType: contentType,
	// 		requestId: null,
	// 		requestType: null,
	// 		header: header,
	// 		body: payload,
	// 		message: null,
	// 		dispatchType: null,
	// 		sender: this,
	// 		component: component,
	// 		onSuccess: this.onSuccess,
	// 		onError: this.onError
	// 	};

	// 	var requestId = nMessageProcessor.sendRequest(request);
	// },

	// onSuccess: function (request, response) {

	// 	var items = response.payload[1].payload;

	// 	if (request.component == 'onLoginButtonClick') {

	// 		if (items.errMsg == null) {

	// 			gUserId = items.userId;
	// 			gUserVer = items.userVer;
	// 			gLoginName = items.loginName;
	// 			gUserAlias = items.userAlias;
	// 			gEnvId = items.envId;
	// 			localStorage.setItem("LogInState", "LogIn");
	// 			localStorage.setItem("gLoginName", gLoginName);


	// 			for (i = 0; i < items.roleList.length; i++) {
	// 				userRoles.add(items.roleList[i].name, items.roleList[i].name);
	// 			}

	// 			/*Remove Login Window*/
	// 			request.sender.getView().destroy();

				
	// 			/*show the Desktop view*/
	// 			// Add the main view to the viewport
	// 			Ext.widget('app-main');

	// 			/*call function for checking idle user*/
	// 			//Ext.ux.ActivityMonitor.init({ verbose : true });
	// 			//Ext.ux.ActivityMonitor.start();
	// 		} else {
	// 			icon = Ext.MessageBox['error'.toUpperCase()];

	// 			Ext.MessageBox.show({
	// 				title: 'Error',
	// 				msg: items.errMsg,
	// 				buttons: Ext.MessageBox.OK,
	// 				animateTarget: this.sender.lookupReference('loginBtnD'),
	// 				scope: this,
	// 				fn: this.showResult,
	// 				icon: icon
	// 			});
	// 		}
	// 	}
	// },

	// loadCaptcha: function (button, e, eOpts) {
	// 	this.lookupReference('captchaTextD').setValue(Captcha());
	// },

	// onCaptchaRefreshBtnClick: function () {
	// 	this.loadCaptcha();
	// }
});