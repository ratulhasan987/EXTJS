
Ext.define('Admin.view.login.Login', {
	extend: 'Ext.panel.Panel',

	requires: [
		'appConstants',
		'Ext.window.MessageBox',
		'Admin.view.login.LoginController',
		'Admin.view.login.LoginModel',
		'Ext.form.field.plugin.CapsDetector',
		'Ext.form.Panel'
	],

	xtype: 'login',
	// reference: 'dashLogin',
	id: 'loginBG',
	controller: 'login-login',
	viewModel: {
		type: 'login-login'
	},

	// listeners: {
	// 	beforerender: 'loadCaptcha'
	// },

	closable: false,
	draggable: false,
	resizable: false,
	bodyStyle: "background-color:white",
	//bodyStyle: "background-image:url(resources/images/lock-screen-background.jpg)",

	layout: {
		type: 'vbox',
		align: 'left',
		pack: 'center'
	},
	width: 350,
	height: 380,
	bodyStyle: {
		'background-image': 'linear-gradient(to right, #17546D, #196E96,#308B4C, #0D7512);',
		'color': 'white'
		// backgroundImage: 'url("resources/images/imagesbgNIC.png")',
		// backgroundSize: 'cover',
		// backgroundRepeat: 'no-repeat'
	},
	bodyPadding: '0, 0, 0, 500',
	items: [
		{

			layout: 'form',
			style: {
				'border-radius': '15px',
				'border': 'none',
			},
			height: 430,
	        // width: 420,
			bodyPadding: '0, 10, 0, 10',
			items: [


				{
					xtype: 'form',
					reference: 'loginFormD',
					id: 'loginForm',
					bodyBorder: false,
					frame: false,
					// title: 'Login',
					title: '<div style = "background-color: white; color: white; padding: 10 0 0 0;"><img src="resources/images/cbbl-login-logo.png" width="60" height="60"></div><div><span style="color:#090979; background:linear-gradient(to right, #3c196a, #363683, #258acb); font-size:14px; line-height:10px;"><h2>NID Service</h2></span></div>',
					titleAlign: 'center',
					// x:200, y:200,
					header: {

						style: {
							background: "rgba(0, 0, 0, 0)",
							border: 'none'
						}
					},
					layout: {
						type: 'vbox',
						align: 'center',
						pack: 'top'
					},
					items: [

						// {
						// 	html: '<span style="color:#3c196a; font-size:16px;  bodyStyle: text-align: left; line-height:14px; text-decoration-thickness: 25px;"><h4>Login</h4></span>',
						// 	width:370,
						// 	height:50
						// },						
						{
							reference: 'uidD',
							id: 'username',
							xtype: 'textfield',
							emptyText: 'User Name',
							fieldLabel: '<p style="color:#090979; font-size:20px;  bodyStyle: text-align: left; line-height:0px;  font-weight: bold">Login Form</p>',
							labelAlign: 'top',
							labelSeparator: "",
							width: 350,
							height: 35,
							bodyPadding: '0, 0, 0, 300',
							allowBlank: false,
							// msgTarget: 'under',
							fieldStyle: 'border-radius: 0px;',
							listeners: {
								specialkey: 'onKeyPress'
							},

						},


						{
							xtype: 'tbspacer',
							height: 50
						},

						{
							layout: 'hbox',
							items: [
								{
									id: 'password-field',
									reference: 'passD',
									xtype: 'textfield',
									emptyText: 'Password',
									// fieldLabel: '<p style="color:#3c196a; font-size:1px;  bodyStyle: text-align: left; line-height:14px;  font-weight: bold"><br></p>',
									labelAlign: 'top',
									labelSeparator: "",
									width: 318,
									// flex: 1,
									height: 35,
									allowBlank: false,
									inputType: 'password',
									listeners: {
										specialkey: 'onKeyPress'
									},
									allowBlank: false,
									plugins: [
										{
											ptype: 'capslockdetector',
											title: '<span style="color : red">Caps lock is on</span>',
											message: 'Having caps lock on may cause you to enter your password incorrectly.'
										}
									]
								},

								{

									xtype: 'button',
									iconCls: 'x-fa fa-eye-slash',
									// cls:'x-fa fa-eye',
									listeners: {
										click: 'onEyeButtonClick'
									},

									id: 'eyeBtn',
									style: {

										// 'border-radius': '0px 7px 7px 0px',
										'height': '35px',
										'background': 'rgba(37, 139, 203, 0)',
										// 'border - color': 'rgba(37, 139, 203, 0)',
										'border-color': '#d0d0d0',
										'border-left': 'none',
										'box-shadow': 'none'
									},
								}
							],

						},
						// {
						// 	xtype: 'tbspacer',
						// 	height: 20
						// },
						// {
						// 	xtype: 'fieldcontainer',
						// 	layout: 'hbox',
						// 	//bodyPadding: "0,100,0,100",
						// 	items: [
						// 		{
						// 			xtype: 'displayfield',
						// 			reference: 'captchaTextD',
						// 			readOnly: true,
						// 			width: 240,
						// 			id: 'captcha'
						// 		},
						// 		// {
						// 		// 	xtype: 'button',
						// 		// 	text: 'Refresh',
						// 		// 	id: 'login-icon',
						// 		// 	width: 100,
						// 		// 	height: 30,
						// 		// 	style: {
						// 		// 		// 'border': 'groove'
						// 		// 		'border-radius': '10px',
						// 		// 		'border': 'none',
						// 		// 		'background': '#0E8F64 !important'
						// 		// 	},

						// 		// 	iconCls: 'refreshBtn',
						// 		// 	tooltip: 'Reload Captcha',
						// 		// 	listeners: {
						// 		// 		click: 'onCaptchaRefreshBtnClick'
						// 		// 	}
						// 		// }
						// 	]
						// },
						// {
						// 	xtype: 'tbspacer',
						// 	height: 5
						// },

						// {
						// 	reference: 'captchaD',
						// 	xtype: 'textfield',
						// 	emptyText: 'Security',
						// 	align: 'right',
						// 	width: 350,
						// 	height: 35,
						// 	bodyPadding: '0, 0, 0, 300',
						// 	// msgTarget: 'under',
						// 	allowBlank: false,
						// 	listeners: {
						// 		specialkey: 'onKeyPress',
						// 		paste: {
						// 			element: 'inputEl',
						// 			fn: function (event, inputEl) {
						// 				event.preventDefault();
						// 				return false;
						// 			}
						// 		}
						// 	}
						// },
						{
							xtype: 'tbspacer',
							height: 30,
						},
						{
							layout: 'hbox',
							margin: '0 0 0 60',
							items:[
								{
									xtype: 'button',
									reference: 'loginBtnD',
									width: 166,
									height: 35,
									// formBind: true,
									style: {
										// '' : ''
										// 'border': 'groove'
										'border-radius': '2px',
										'border': 'none',
										'background': '#0E8F64 !important'
									},
									//icon: 'resources/images/admin.png',
									text: '<div style="margin-left:0px">Login</div>',
									// listeners: {
									// 	click: 'onLoginButtonClick'
									// },
									handler: function () {
										var form = this.up('form').getForm();
										if (form.isValid()) {
											var username = form.findField('username').getValue();
											var password = form.findField('password-field').getValue();
		
											
											// Replace the following lines with your own logic for checking the credentials
											if (username === 'rh' && password === 'r') {
		
											// localStorage.setItem("LogInState", "LogIn");
											// localStorage.setItem("gLoginName", username);
											sessionStorage.setItem("LogInState", "LogIn");
											sessionStorage.setItem("gLoginName", username);
		
												Ext.getCmp('loginBG').destroy();
												
												// Ext.Viewport.destroy();
		
												// // Add the main view to the viewport
												Ext.widget('app-main');
		
							
												// Ext.Msg.alert('Success', 'Login successful');
		
											} else {
												Ext.Msg.alert('Failed', 'Invalid username or password');
											}
										}
									}
		
								},
		
								// {
								// 	xtype: 'tbspacer',
								// 	height: 10
								// },
		
								{
									xtype: 'button',
									width: 166,
									height: 35,
									// formBind: true,
									style: {
										// '' : ''
										// 'border': 'groove'
										'border-radius': '2px',
										'border': 'none',
										'background': '#E70A0AE5 !important'
										// 'background': 'red !important'
		
									},
									margin: '0 0 0 15',
									//icon: 'resources/images/cleaning_brush.png',
									text: '<div style="margin-left:0px">Clear</div>',
									// listeners: {
									// 	click: 'onCancelButtonClick'
									// },
									handler: function () {
										Ext.getCmp('username').reset();
										Ext.getCmp('password-field').reset();
									},
								},
								// {
								// 	html: '',
								// 	width: 350,
								// 	height: 30
								// },
							]
						},

					

					],





				},

			]
		}


	]
});
