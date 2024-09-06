Ext.define('Admin.view.dashboard.DashboardMain', {
    extend: 'Ext.container.Container',
    xtype: 'admindashboard',
    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],
    controller: 'dashboard',

    // viewModel: {
    //     type: 'dashboard'
    // },
    layout: 'responsivecolumn',

    // listeners: {
    //     hide: 'onHideView'
    // },
    listeners: {
        render: 'onSearchData'
    },

   columnWidth: 1,
    items: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout: 'column',
            items: [

                {
                    xtype: 'combobox',
                    fieldLabel: 'Search to',
                    flex: 1,
                    // columnWidth: 0.33,
                    mode: 'local',
                    queryMode: 'local',
                    forceSelection: true,
                    triggerAction: 'all',
                    selectOnFocus: true,
                    store: ['EC', 'Local'],
                    labelAlign: 'top',
                    listeners: {
                        select: function (combo) {
                            var localField = combo.up('toolbar').down('[fieldLabel=Name]');
                            // var ecField = combo.up('toolbar').down('[fieldLabel=NID]');
                            var localCheckbox = combo.up('toolbar').down('[boxLabel=Forcefully Pull From EC]');
                            if (combo.getValue() === 'Local') {
                                // Ext.getCmp('nameField').setVisible(false);
                                localField.setDisabled(false);
                                // ecField.hide();
                                // localField.show();
                                // localCheckbox.hide();
                                localCheckbox.setDisabled(true);

                            } else {
                                // localField.hide();
                                localField.setDisabled(true);
                                // Ext.getCmp('nameField').setVisible(false);
                                // ecField.show();
                                // localCheckbox.show();
                                localCheckbox.setDisabled(false);
                            }
                        },
                    }
                },

                {
                    xtype: 'textfield',
                    // reference: 'cardSrc',
                    // itemId: 'cardSrc',
                    fieldLabel: 'NID',
                    id: 'NID_Search',
                    reference: 'NID_Search',
                    // margin: '0 10 0 10',
                    // emptyText: 'ex: XXXXXXXXXXXXXXXX',
                    // labelWidth: 60,
                    flex: 1,
                    // columnWidth: 0.33,
                    // columnWidth: 0.30,
                    labelAlign: 'top',
                    //readOnly: true,
                    // listeners: {
                    // 	change:  'onComplaintGridFilter'
                    // }
                },

                {
                    xtype: 'datefield',
                    // reference: 'fromDateComplaint',
                    fieldLabel: 'Date of Birth',
                    labelAlign: 'top',
                    id: 'DOB_Search',
                    reference: 'DOB_Search',
                    value: Ext.Date.format("d-M-Y"),
                    // emptyText: 'From Date',
                    // labelWidth: 50,
                    // columnWidth: 0.30,
                    flex: 1,
                    // columnWidth: 0.33,
                    format: "d-M-Y",
                    // margin: '0 10 0 10',
                    // listeners : {
                    // 	render : function(datefield) {
                    // 		datefield.setValue(new Date());
                    // 	}
                    // }
                    
                    //Added Manzur Bhai.....
                    enableKeyEvents: true,
                    listeners: {
                        'keydown': function (f, e) {
                            var charCode = e.getCharCode();
                            var key = e.getKey();
                            // console.log(charCode);
                            // console.log(key);
                            if (key == 8){
                                Ext.getCmp('DOB_Search').reset();
                            }
                        }
                    },
                },
                
                {
                    xtype: 'textfield',
                    // reference: 'mobileSrc',
                    // itemId: 'mobileSrc',
                    labelAlign: 'top',
                    fieldLabel: 'Name',
                    id: 'Name_Search',
                    reference: 'Name_Search',
                    // hidden: true,
                    // hideMode: 'visibility',
                    // margin: '0 10 0 10',
                    // emptyText: 'ex: XXXXXXXXXXXXXXXX',
                    // labelWidth: 60,
                    disabled: true,
                    flex: 1,
                    // columnWidth: 0.33,
                    // columnWidth: 0.30,
                    //readOnly: true,
                    // listeners: {
                    // 	change:  'onComplaintGridFilter'
                    // }
                },


                {
                    xtype: 'button',
                    margin: '28 0 0 0',
                    text: '<span style="color: #ffffff;">Search</span>',
                    iconCls: 'searchBtn',
                    flex: 1,
                    // columnWidth: 0.33,
                    style: {
                        "background-color": "#35baf6",
                        "border": "solid",
                        "border-width": "1px",
                        "border-radius": "4px",
                        "border-color": "#35baf6;"
                    },

                    listeners: {
                        click: 'onSearchResult',
                    },
                    // listeners: {
                    //   click: function() {
                    //     var myHeaders = new Headers();

                    //     var nidNo = Ext.getCmp('NID_Search').value;
                    //     var dob = Ext.getCmp('DOB_Search').value;
                    //     var name = Ext.getCmp('Name_Search').value;
                    //     var forceUpdate=Ext.getCmp('Forcefully_Search').value;

                    //     console.log(nidNo);
                    //     console.log(dob);
                    //     // console.log(name);
                    //     // console.log(forceUpdate);

                    //     myHeaders.append("Content-Type", "application/json");

                    //     var raw = JSON.stringify({
                    //       "nidNo": nidNo,
                    //       "dob": Ext.Date.format(new Date(dob), 'd/m/Y'),
                    //       "userId": 10001,
                    //       "source": "POSTMAN",
                    //     //   "name":name,
                    //     //   "forceUpdate":forceUpdate,

                    //     });
                    //     console.table(raw);

                    //     var requestOptions = {
                    //       method: 'POST',
                    //       headers: myHeaders,
                    //       body: raw,
                    //       redirect: 'follow'
                    //     };

                    //     fetch("http://10.33.255.13:8080/nid/api/v1/NID/details", requestOptions)
                    //       .then(response => response.json())
                    //       .then(result => {
                    //         // var storeData = Ext.getCmp('SearchResult');
                    //         // console.table(result);
                    //         // var store = storeData.getStore();
                    //         var store = Ext.getStore('SRStore');
                    //         store.removeAll();
                    //         store.add(result["personList"]);
                    //         console.table(result["personList"]);
                    //         // console.log(result)
                    //     })

                    //       .catch(error => console.log('error', error));
                    //   }
                    // }
                },



                {
                    xtype: 'button',
                    margin: '28 0 0 10',
                    // id: 'login-icon',
                    text: '<span style="color:#ffffff;">Reset</span>',
                    iconCls: 'searchBtn',
                    reference: 'complaintSrc',
                    // labelWidth: 40,
                    flex: 1,
                    // columnWidth: 0.33,
                    // columnWidth: 0.1,
                    // listeners: {
                    // 	click: 'onComplaintSearch'
                    // },
                    style: {
                        // 'background-image': 'linear-gradient(to top right, #166CCE, #3C196A)',
                        "background-color": "#35baf6",
                        "border": "solid",
                        "border-width": "1px",
                        "border-radius": "4px",
                        "border-color": "#35baf6;"
                    },

                    listeners: {
                        click: 'onClickSearchReset'
                    }
                },


                {
                    xtype: 'checkboxfield',
                    margin: '28 0 0 5',
                    id: 'Forcefully_Search',
                    reference: 'Forcefully_Search',
                    boxLabel: 'Forcefully Pull From EC',
                    name: 'topping',
                    flex: 1,
                    // columnWidth: 0.33,
                    disabled: true,
                    // hidden: true,
                    // hideMode: 'visibility',
                },

            ],
        },

        //     {
        //     items:{
        //          xtype: 'SearchResult-grid',
        //     }
        // }

        {
            // title: '<p style="line-height:0px; color: white; font-weight: bold;"> Tranzware Data</p>',
            title: 'Search Result',
            width: 0.78 * (window.innerWidth),
            height: 0.90 * (window.innerHeight),
            // columnWidth: 1,
            // layout:'column',
            flex:1,
            stateful: true,
            multiSelect: true,
            headerBorders: false,
            viewConfig: {
                enableTextSelection: true
            },
            id: 'SearchResult',
            // collapsible: false,
            // loadMask: true,
            // region: 'center',
            xtype: 'gridpanel',
            // reference: 'npsbDataGrid',
            // height: 0.50 * (window.innerHeight),
            // store: 'SRStore',
            store: 'S_Result',
            listeners: {
                itemdblclick: 'onSearchResultGridItmDblClk',
                // itemclick: 'onNpsbGridItmClk',
            },

            columns: [

                {
                    text: 'NID',
                    id: 'nidNumberReset',
                    // reference: 'nidNo',
                    flex: 1,
                    align: 'left',
                    // dataIndex: 'nationalId'
                    dataIndex:'nid',
                },
                {
                    text: 'DOB',
                    id: 'dateOfBirthReset',
                    // reference: 'dateOfBirth',
                    flex: 1,
                    align: 'center',
                    // dataIndex: 'birthDate'
                    dataIndex:'dob',
                },
                {
                    text: 'Name',
                    flex: 1,
                    id: 'nameOfEnglishReset',
                    // reference: 'nameOfEnglish',
                    align: 'center',
                    // dataIndex: 'nameEng'
                    dataIndex:'name',
                },
                {
                    text: 'Father Name',
                    id: 'fatherNameReset',
                    // reference: 'fatherName',
                    flex: 1,
                    align: 'center',
                    dataIndex: 'fatherName'
                },
                {
                    text: 'Mother Name',
                    id: 'motherNameReset',
                    // reference: 'motherName',
                    flex: 1,
                    align: 'center',
                    dataIndex: 'motherName'
                }
            ],


            // listeners: {
            //     rowdblclick: function(grid, record) {
            //         Ext.create('Ext.window.Window', {
            //             title: 'Edit Record',
            //             width: 400,
            //             height: 300,
            //             layout: 'fit',

            //         }).show();
            //     }
            // }


            // listeners: {
            //     render: function () {
            //         var myHeaders = new Headers();
            //         myHeaders.append("Content-Type", "application/json");

            //         var raw = JSON.stringify({
            //             "nidNo": "42108757248",
            //             "dob": "08/12/2000",
            //             "forceUpdate": false,
            //             "userId": 10001,
            //             "source": "POSTMAN"
            //         });

            //         var requestOptions = {
            //             method: 'GET',
            //             // headers: myHeaders,
            //             // body: raw,
            //             // redirect: 'follow'
            //         };

            //         fetch("http://10.33.255.13:8080/nid/api/v1/NID/all-nid", requestOptions)
            //             .then(response => response.json())
            //             .then(result => {
            //                 console.log(result);
            //                 var store = this.getStore();
            //                 // store.removeAll();
            //                 store.add(result);
            //                 console.table(result);
            //             })
            //             .catch(error => console.log('error', error));
            //     }
            // },

        },




    ]

});
