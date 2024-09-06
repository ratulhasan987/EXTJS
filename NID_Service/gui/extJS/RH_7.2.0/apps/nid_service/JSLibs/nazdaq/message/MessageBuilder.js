Ext.define(
	'nazdaq.message.MessageBuilder', {
		alias: 'nMessageBuilder',
		alternateClassName: 'nMessageBuilder',

		statics: {

			withPayload: function (payload) {

				if (payload == null) {
					payload = '';
				}
				/*else{
					payload.userModKey 		= gUserId;
					payload.userModifiedId 	= gUserId;

					payload.envId 			= gEnvId;
					payload.envName 		= gEnvName;
					
					if(Ext.isEmpty(payload.legalEntityId)
						|| !Ext.isDefined(payload.legalEntityId)){
						payload.legalEntityId 	= gLegalEntityId;
						payload.legalEntityKey 	= gLegalEntityKey;
						payload.legalEntityName = gLegalEntityName;
					}
				}*/

				var msgBuilder = Ext.create('nMessageBuilder', {
					headers: new Ext.util.MixedCollection(),
					payload: payload
				});

				return msgBuilder;
			}
		},

		config: {
			header: null,
			payload: null
		},

		constructor: function (config) {
			this.initConfig(config);
			//console.log('nMessageBuilder');
		},

		setAllHeader: function (values) {
			if (this.getHeader() == null || !this.getHeader().isMixedCollection) {
				this.setHeader(new Ext.util.MixedCollection());
			}

			if (values.isMixedCollection) {
				this.getHeader().addAll(values.map);
			} else {
				this.getHeader().addAll(values);
			}

			return this;
		},

		addHeader: function (key, value) {
			if (this.getHeader() == null || !this.getHeader().isMixedCollection) {
				this.setHeader(new Ext.util.MixedCollection());
			}

			this.getHeader().add(key, value);

			return this;
		},

		updateHeader: function (key, value) {
			if (this.getHeader() == null || !this.getHeader().isMixedCollection) {
				this.setHeader(new Ext.util.MixedCollection());
			}

			if (this.getHeader().containsKey(key)) {
				this.getHeader().removeAtKey(key);
			}

			this.getHeader().add(key, value);

			return this;
		},

		build: function () {

			var message = Ext.create('nMessage', {
				header: this.getHeader(),
				payload: this.getPayload()
			});

			return message;
		}
	});