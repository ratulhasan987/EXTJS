
Ext.define('Admin.view.history.AllHistory', {
    extend: 'Ext.container.Container',
    xtype: 'all-history',
    // xtype: 'history',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    layout: 'responsivecolumn',

    controller: 'all-history',
    // controller:'all-history',

    viewModel: {
        type: 'history'
    },

	// width: 0.80 * (window.innerWidth),
	// height: 0.90 * (window.innerHeight),
    // // height: screenHeight * 0.90,

    listeners: {
        render: 'onAllSearchData'
    },
    scrollable:true,
    items: [
        {
            xtype: 'toolbar',
            dock: 'top',
            layout: 'column',
            items: [

                {
                    xtype: 'combobox',
                    fieldLabel: 'Search to',
                    id: 'Search_To',
                    // flex: 1,
                    columnWidth: 0.2,
                    mode: 'local',
                    queryMode: 'local',
                    forceSelection: true,
                    triggerAction: 'all',
                    selectOnFocus: true,
                    store: ['All', 'LMS', 'NID UI', 'Other'],
                    labelAlign: 'top',
                    // width: 200,
                    //    listeners: {
                    //        select: function (combo) {
                    //            var localField = combo.up('toolbar').down('[fieldLabel=Name]');
                    //            // var ecField = combo.up('toolbar').down('[fieldLabel=NID]');
                    //            var localCheckbox = combo.up('toolbar').down('[boxLabel=Forcefully Pull From EC]');
                    //            if (combo.getValue() === 'Local') {
                    //                // Ext.getCmp('nameField').setVisible(false);
                    //                localField.setDisabled(false);
                    //                // ecField.hide();
                    //                // localField.show();
                    //                // localCheckbox.hide();
                    //                localCheckbox.setDisabled(true);

                    //            } else {
                    //                // localField.hide();
                    //                localField.setDisabled(true);
                    //                // Ext.getCmp('nameField').setVisible(false);
                    //                // ecField.show();
                    //                // localCheckbox.show();
                    //                localCheckbox.setDisabled(false);
                    //            }
                    //        },
                    //    }
                },
                {
                    xtype: 'datefield',
                    // reference: 'fromDateComplaint',
                    fieldLabel: 'From Date',
                    id: 'FromDate_Search',
                    labelAlign: 'top',
                    // emptyText: 'From Date',
                    // flex: 1,
                    columnWidth: 0.2,
                    format: 'd M Y',
                    // margin: '0 10 0 10',
                    // listeners : {
                    // 	render : function(datefield) {
                    // 		datefield.setValue(new Date());
                    // 	}
                    // }
                    // width: 200,
                },
                {
                    xtype: 'datefield',
                    // reference: 'fromDateComplaint',
                    fieldLabel: 'To Date',
                    id: 'ToDate_Search',
                    labelAlign: 'top',
                    // emptyText: 'From Date',
                    // flex: 1,
                    columnWidth: 0.2,
                    format: 'd M Y',
                    // margin: '0 10 0 10',
                    // listeners : {
                    // 	render : function(datefield) {
                    // 		datefield.setValue(new Date());
                    // 	}
                    // }
                    // width: 200,
                },

                {
                    xtype: 'combobox',
                    fieldLabel: 'Search Condition',
                    // flex: 1,
                    id: 'Condition_Search',
                    mode: 'local',
                    queryMode: 'local',
                    forceSelection: true,
                    triggerAction: 'all',
                    selectOnFocus: true,
                    store: ['All', 'NID and DOB', 'NID(only internal DB)', 'DOB(only internal DB)', 'Name(only internal DB)'],
                    labelAlign: 'top',
                    // width: 200,
                    columnWidth: 0.2,
                },

                {
                    xtype: 'textfield',
                    // reference: 'cardSrc',
                    // itemId: 'cardSrc',
                    fieldLabel: 'NID',
                    id: 'NID_AllSearch',
                    // margin: '0 10 0 10',
                    // emptyText: 'ex: XXXXXXXXXXXXXXXX',
                    // labelWidth: 60,
                    // flex: 1,
                    // columnWidth: 0.30,
                    labelAlign: 'top',
                    // width: 200,
                    columnWidth: 0.2,
                    //readOnly: true,
                    // listeners: {
                    // 	change:  'onComplaintGridFilter'
                    // }
                },

                {
                    xtype: 'datefield',
                    // reference: 'fromDateComplaint',
                    fieldLabel: 'Date of Birth',
                    id: 'DOB_AllSearch',
                    labelAlign: 'top',
                    // emptyText: 'From Date',
                    // labelWidth: 50,
                    // columnWidth: 0.30,
                    // flex: 1,
                    format: 'd M Y',
                    // width: 200,
                    columnWidth: 0.2,
                    // margin: '0 10 0 10',
                    // listeners : {
                    // 	render : function(datefield) {
                    // 		datefield.setValue(new Date());
                    // 	}
                    // }
                },
                {
                    xtype: 'textfield',
                    // reference: 'mobileSrc',
                    // itemId: 'mobileSrc',
                    labelAlign: 'top',
                    id: 'Name_AllSearch',
                    fieldLabel: 'Name',
                    // hidden: true,
                    // hideMode: 'visibility',
                    // margin: '0 10 0 10',
                    // emptyText: 'ex: XXXXXXXXXXXXXXXX',
                    // labelWidth: 60,
                    // disabled:true,
                    // flex: 1,
                    // width: 200,
                    columnWidth: 0.2,
                },
                {
                    xtype: 'textfield',
                    // reference: 'mobileSrc',
                    // itemId: 'mobileSrc',
                    id: 'Search_By',
                    labelAlign: 'top',
                    fieldLabel: 'Search By',
                    // hidden: true,
                    // hideMode: 'visibility',
                    // margin: '0 10 0 10',
                    emptyText: 'user name',
                    // labelWidth: 60,
                    // disabled:true,
                    // flex: 1,
                    // width: 200,
                    columnWidth: 0.2,
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Hit/Miss Status',
                    id: 'HM_Status',
                    // flex: 1,
                    // width: 200,
                    columnWidth: 0.2,
                    mode: 'local',
                    queryMode: 'local',
                    forceSelection: true,
                    triggerAction: 'all',
                    selectOnFocus: true,
                    store: ['EC Portal', 'Internal DB', 'Expired so Update', 'Forcefully Pulled', 'Forcefully Update', 'No Matching Data'],
                    labelAlign: 'top',
                },

                {
                    xtype: 'button',
                    margin: '28 0 0 0',
                    text: '<span style="color: #ffffff;">Search</span>',
                    iconCls: 'searchBtn',
                    // labelWidth: 150,
                    // width: 200,
                    columnWidth: 0.2,
                    // flex: 1,
                    style: {
                        // 'background-image': 'linear-gradient(to top right, #7064E2, #3C196A)',
                        "background-color": "#35baf6",
                        "border": "solid",
                        "border-width": "1px",
                        "border-radius": "4px",
                        "border-color": "#35baf6;"
                    },
                    listeners: {
                        click: 'onAllHistorySearchResult',
                    }
                },


            ],
        },


        //  {
        //     items:{
        //          xtype: 'allSearchResult-grid',
        //        }
        //    }

        {
            // title: '<p style="line-height:0px; color: white; font-weight: bold;"> Tranzware Data</p>',
            title: 'All Search Result',
            width: 0.78 * (window.innerWidth),
            height: 0.90 * (window.innerHeight),
            // columnWidth: 1,
            // layout:'column',
            stateful: true,
            multiSelect: true,
            scrollable:true,
            headerBorders: false,
            viewConfig: {
                enableTextSelection: true
            },
            id: 'All_SearchResult',
            // collapsible: false,
            // loadMask: true,
            // region: 'center',
            xtype: 'gridpanel',
            // reference: 'npsbDataGrid',
            // height: 0.50 * (window.innerHeight),
            store: 'AS_Store',

            listeners: {
                itemdblclick: 'onHistorySearchResultGridItmDblClk',
                // itemclick: 'onNpsbGridItmClk',
            },

            columns: [

                {
                    text: 'Hit/Miss Status',
                    flex: 1,
                    // width: 150,
                    // formatter: 'usMoney',
                    dataIndex: 'nationalId',
                    // value:'EC portal',
                    align: 'left',
                },
                {
                    text: 'Search Condition',
                    flex: 1,
                    // width: 150,
                    // formatter: 'usMoney',
                    dataIndex: 'id',
                    align: 'center',
                    // value:'NID & DOB',
                },
                {
                    text: 'Used Search Values',
                    flex: 1,
                    // width: 150,
                    // formatter: 'usMoney',
                    dataIndex: 'id',
                    align: 'center',
                },

                {
                    text: 'NID',
                    flex: 1,
                    // width: 150,
                    // formatter: 'usMoney',
                    dataIndex: 'nationalId',
                    align: 'left',
                },

                {
                    text: 'DOB',
                    flex: 1,
                    // width: 120,
                    // renderer: 'renderPercent',
                    dataIndex: 'birthDate',
                    align: 'center',
                },

                {
                    text: 'Name',
                    flex: 1,
                    // width: 160,
                    // formatter: 'date("m/d/Y")',
                    dataIndex: 'nameEng',
                    align: 'center',
                },

                {
                    text: 'Father Name',
                    flex: 1,
                    // width: 140,
                    // formatter: 'date("m/d/Y")',
                    dataIndex: 'fatherName',
                    align: 'center',
                },

                {
                    text: 'Mother Name',
                    flex: 1,
                    // width: 130,

                    dataIndex: 'motherName',
                    align: 'center',
                },

                {
                    text: 'Search Date',
                    flex: 1,
                    // width: 100,
                    align: 'center',
                    formatter: 'date("m/d/Y")',
                    dataIndex: 'createdDate'
                },
                {
                    text: 'Search From',
                    flex: 1,
                    // width: 100,
                    formatter: 'date("m/d/Y")',
                    dataIndex: 'modifiedDate',
                    align: 'center',

                },
                {
                    text: 'Search User',
                    flex: 1,
                    // width: 100,
                    // formatter: 'date("m/d/Y")',
                    dataIndex: 'id',
                    align: 'center',

                },
                {
                    text: 'Cache Expire Date',
                    flex: 1,
                    // width: 130,
                    formatter: 'date("m/d/Y")',
                    dataIndex: 'expireDate',
                    align: 'center',

                },

            ],

        },

    ]

});
