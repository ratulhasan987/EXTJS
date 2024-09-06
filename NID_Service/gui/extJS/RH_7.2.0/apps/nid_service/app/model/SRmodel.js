Ext.define('Admin.model.SRmodel', {
    extend: 'Ext.data.Model',
	
    fields: [
        {name: 'nationalId'},
        // {name: 'birthDate'},
        {name: 'nameEng'},
        {name: 'fatherName'},
        {name: 'motherName'},
		{name:'id'},
		{name:'version'},
		{name:'isActive'},
		{name:'modifiedDate'},
		{name:'createdDate'},
		{name:'expireDate'},
		{name:'nameBang'},
		{name:'photo'},
		{name:'spouseName'},
		{name:'occupation'},
		{name:'bloodGroup'},
		{name:'pin'},
		{name:'division'},
		{name:'rmo'},
		{name:'cityCorporationMunicipality'},
		{name:'upozila'},
		{name:'unionWard'},
		{name:'mouzaMoholla'},
		{name:'additionalMouzaMoholla'},
		{name:'wardForUnionPorishod'},
		{name:'villageRoad'},
		{name:'additionalVillageRoad'},
		{name:'homeHoldingNo'},
		{name:'postalCode'},
		{name:'region'},
		{name:'isPresent'},
		{
			type: 'date',
			name: 'birthDate',
			convert:function(record){
				
				// var date = record.get('modDate');
				// Ext.Date.format(new Date(date), 'h:i: A');
				// return Ext.Date.format(new Date(record), 'h:i: A d-M');
				return Ext.Date.format(new Date(record), 'd-M-Y');
			}
		},



    ]
});

 // items: [
    //      {
	// 		xtype: 'toolbar',
	// 		dock: 'bottom',
	// 		layout: 'column',
	// 		items: [
            
    //     {
    //         xtype: 'combobox',
    //         fieldLabel: 'Search to',
    //         flex: 1,
    //         mode: 'local',
    //         queryMode: 'local',
    //         forceSelection: true,
    //         triggerAction: 'all',
    //         selectOnFocus: true,
    //         store: ['EC', 'Local'],
    //         labelAlign: 'top',
    //         listeners: {
    //             select: function (combo) {
    //                 var localField = combo.up('toolbar').down('[fieldLabel=Name]');
    //                 // var ecField = combo.up('toolbar').down('[fieldLabel=NID]');
    //                 var localCheckbox = combo.up('toolbar').down('[boxLabel=Forcefully Pull From EC]');
    //                 if (combo.getValue() === 'Local') {
    //                     // Ext.getCmp('nameField').setVisible(false);
    //                     localField.setDisabled(false);
    //                     // ecField.hide();
    //                     // localField.show();
    //                     // localCheckbox.hide();
    //                     localCheckbox.setDisabled(true);

    //                 } else {
    //                     // localField.hide();
    //                     localField.setDisabled(true);
    //                     // Ext.getCmp('nameField').setVisible(false);
    //                     // ecField.show();
    //                     // localCheckbox.show();
    //                     localCheckbox.setDisabled(false);
    //                 }
    //             },
    //         }
    //     },
                
	// 			{
	// 				xtype: 'textfield',
	// 				// reference: 'cardSrc',
	// 				// itemId: 'cardSrc',
	// 				fieldLabel: 'NID',
	// 				// margin: '0 10 0 10',
	// 				// emptyText: 'ex: XXXXXXXXXXXXXXXX',
	// 				// labelWidth: 60,
    //                 flex:1,
	// 				// columnWidth: 0.30,
	// 				labelAlign: 'top',
	// 				//readOnly: true,
	// 				// listeners: {
	// 				// 	change:  'onComplaintGridFilter'
	// 				// }
	// 			},
				
	// 			{
	// 				xtype: 'datefield',
	// 				// reference: 'fromDateComplaint',
	// 				fieldLabel: 'Date of Birth',
	// 				labelAlign: 'top',
	// 				// emptyText: 'From Date',
	// 				// labelWidth: 50,
	// 				// columnWidth: 0.30,
    //                 flex:1,
	// 				format: 'd M Y',
	// 				// margin: '0 10 0 10',
	// 				// listeners : {
	// 				// 	render : function(datefield) {
	// 				// 		datefield.setValue(new Date());
	// 				// 	}
	// 				// }
	// 			},
    //             {
	// 				xtype: 'textfield',
	// 				// reference: 'mobileSrc',
	// 				// itemId: 'mobileSrc',
    //                 labelAlign: 'top',
	// 				fieldLabel: 'Name',
    //                 // hidden: true,
    //                 // hideMode: 'visibility',
	// 				// margin: '0 10 0 10',
	// 				// emptyText: 'ex: XXXXXXXXXXXXXXXX',
	// 				// labelWidth: 60,
    //                 // disabled:true,
    //                 flex:1,
	// 				// columnWidth: 0.30,
	// 				//readOnly: true,
	// 				// listeners: {
	// 				// 	change:  'onComplaintGridFilter'
	// 				// }
	// 			},

    //             {
	// 				xtype: 'button',
	// 				margin: '28 0 0 0',
	// 				text: '<span style="color: #ffffff;">Search</span>',
	// 				iconCls: 'searchBtn',
	// 				// labelWidth: 40,
    //                 flex:1,
	// 				style: {
	// 					// 'background-image': 'linear-gradient(to top right, #7064E2, #3C196A)',
    //                     "background-color": "#35baf6",
	// 					"border": "solid",
	// 					"border-width": "1px",
	// 					"border-radius": "4px",
	// 					"border-color": "#35baf6;"
	// 				},
	// 				listeners:{
	// 					click:'onSearchClick',
	// 				}
	// 			},
					
				
    //             {
	// 				xtype: 'button',
    //                 margin: '28 0 0 10',
	// 				// id: 'login-icon',
	// 				text: '<span style="color:#ffffff;">Reset</span>',
	// 				iconCls: 'searchBtn',
	// 				reference: 'complaintSrc',
	// 				// labelWidth: 40,
    //                 flex:1,
	// 				// columnWidth: 0.1,
	// 				// listeners: {
	// 				// 	click: 'onComplaintSearch'
	// 				// },
	// 				style: {
	// 					// 'background-image': 'linear-gradient(to top right, #166CCE, #3C196A)',
    //                     "background-color": "#35baf6",
	// 					"border": "solid",
	// 					"border-width": "1px",
	// 					"border-radius": "4px",
	// 					"border-color": "#35baf6;"
	// 				},
	// 			},

    //             {
    //                 xtype:'checkboxfield',
    //                 margin: '28 0 0 5',
    //                 boxLabel: 'Forcefully Pull From EC',
    //                 name: 'topping',
    //                 flex:1,
    //                 // disabled:true,

    //                 // hidden: true,
    //                 // hideMode: 'visibility',
    //             },
        
	// 		],
	// 	},
        

    // //     {
    // //     // items:{
			
    // //     //      xtype: 'SearchResult-grid',
    // //     // }
	// // 	xtype:'panel',
	// // 	title: 'Search Result',
	// // 	width: 0.78 * (window.innerWidth),
	// // 	height: 0.90 * (window.innerHeight),
	// // 	stateful: true,
	// // 	multiSelect: true,
	// // 	headerBorders: false,
	// // 	viewConfig: {
	// // 		enableTextSelection: true
	// // 	},
	
    // // 	store:'SRStore',
	// // 	columns: [
	// // 		{
	// // 			text: 'NID',
	// // 			flex: 1,
	// // 			dataIndex: 'nationalId'
	// // 		},
	// // 		{
	// // 			text: 'DOB',
	// // 			flex: 1,
	// // 			dataIndex: 'birthDate'
	// // 		},
	// // 		{
	// // 			text: 'Name',
	// // 			flex: 1,
	// // 			dataIndex: 'nameEng'
	// // 		},
	// // 		{
	// // 			text: 'Father Name',
	// // 			flex: 1,
	// // 			dataIndex: 'fatherName'
	// // 		},
	// // 		{
	// // 			text: 'Mother Name',
	// // 			flex: 1,
	// // 			dataIndex: 'motherName'
	// // 		}
	// // 	],
	
	// // 	// listeners: {
	// // 	// 	render: 'loadGridData',
	// // 	// },
	
	
	// // 	// listeners: {
	// // 	//     render: function () {
	// // 	//         var myHeaders = new Headers();
	// // 	//         myHeaders.append("Content-Type", "application/json");
	
	// // 	//         var raw = JSON.stringify({
	// // 	//             "nidNo": "42108757248",
	// // 	//             "dob": "08/12/2000",
	// // 	//             "forceUpdate": false,
	// // 	//             "userId": 10001,
	// // 	//             "source": "POSTMAN"
	// // 	//         });
	
	// // 	//         var requestOptions = {
	// // 	//             method: 'GET',
	// // 	//             // headers: myHeaders,
	// // 	//             // body: raw,
	// // 	//             // redirect: 'follow'
	// // 	//         };
	
	// // 	//         fetch("http://10.33.255.13:8080/nid/api/v1/NID/all-nid", requestOptions)
	// // 	//             .then(response => response.json())
	// // 	//             .then(result => {
	// // 	//                 console.log(result);
	// // 	//                 var store = this.getStore();
	// // 	//                 // store.removeAll();
	// // 	//                 store.add(result);
	// // 	//                 console.table(result);
	// // 	//             })
	// // 	//             .catch(error => console.log('error', error));
	// // 	//     }
	// // 	// },
    // //    }
    // ]
