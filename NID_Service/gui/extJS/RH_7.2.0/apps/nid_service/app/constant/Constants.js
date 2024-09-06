Ext.define('atm_recon.constant.Constants', {
	alias: 'appConstants',
	alternateClassName: 'appConstants',
	requires: [
		'atm_recon.constant.ActionType',
		'atm_recon.constant.ContentType',
		'atm_recon.constant.StatusType',
		'atm_recon.constant.Type'
	],
	statics: {
  		APP_NAME: 'atm_recon-server',
		APP_VER: '1.0.0.0',
		SERVER_URL: 'http://127.0.0.1:8081/atm_recon-server/jsonRequest',
		SOURCE: 'client',
		DESTINATION: 'atm_recon-server',
		UNIQUE_ID:'ac93b389-dc61-4b2b-bae2-a1f52d4d8f1b'

	}
});