
var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var screenHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

Ext.define('Admin.view.dashboard.DetailsWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.detailsWindow',
    requires: [
        'Ext.*',
    ],

    // controller: 'dashboard',

    // viewModel: {
    //     type: 'npsb'
    // },
    // id:'windowId',
    // width : 0.60 * screenWidth,
    // height: 0.90 * screenHeight,
    width: 950,
    height: 650,

    // title: '<span style="color:white;"ATM Details</span>',
    // modal: true,
    // centered: true,
    // hideOnMaskTap: true,
    // fullscreen: true,
    // border: true,
    // maximizable: true,
    // closable: true,
    scrollable: false,
    style: {
        'border-radius': '4px',
        'border': '8px solid #258ACB',
        'background-color': '#258ACB'

    },
    layout: {
        type: 'fit',
        align: 'middle',
        pack: 'center'
    },
    header: {
        style: {
            'border-radius': '2px',
            'background-color': '#258ACB'
        }
    },
    initComponent: function () {

        var me = this;
        Ext.applyIf(me, {


            // layout: {
            //     type: 'column',
            //     align: 'middle',
            //     pack: 'center'
            // },
            // items: [
            //     {
            //         // title: '<span style="color: white; line-height:32px;"><b>Complaint Details</b></span>',
            //         // titleAlign: 'center',
            //         // // id: 'complaint-main-grid2',
            //         // style: { "background-color": "#258ACB", },

            //         // region: 'east',
            //         // // alias: 'widget.form-multicolumn',
            //         // // xtype: 'multicolumn',
            //         // // reference: 'cbsGridNpsb',
            //         // collapsed: true,
            //         // collapsible: true,
            //         // loadMask: true,
            //         // scrollable: true,
            //         // width: 390,
            //         // margin: 0,
            //         padding: 5,

            //         //Store and listeners start:..............
            //         store: 'SRStore',
            //         // layout: {
            //         //     type: 'column',
            //         //     align: 'middle',
            //         //     pack: 'center'
            //         // },
            //         // listeners: {
            //         // 	itemdblclick: 'onCBSGridItmDblClk',
            //         // 	itemclick: 'onCbsGridItmClk'
            //         // },
            //         //Store and listeners End:..............

            //         // All Item start from Here..............
            //         items: [
            //             {

            //                 // style: {
            //                 //     // 'border': '0.5px solid #35baf6',
            //                 //     "background-color": "#fff",
            //                 //     'border-radius': '4px',
            //                 // },
            //                 // All display field for complaints details Start...................
            //                 items: [
            //                     {
            //                         columnWidth:1,
            //                         xtype:'fieldcontainer',
            //                         layout: {
            //                             type: 'column',
            //                             align: 'middle',
            //                             pack: 'center'
            //                         },
            //                         items:[
            //                             {
            //                                 xtype: 'displayfield',
            //                                 reference: 'photo',
            //                                 // format: 'photo',
            //                                 fieldLabel: '<b>Personal Information</b>',
            //                                 labelAlign:'top',
            //                                 // labelWidth: 90,
            //                                 margin: '0 0 0 10',
            //                                 // columnWidth: 0.2
            //                             },
            //                         ]
            //                     },

            //                     {
            //                         columnWidth:1,
            //                         xtype:'fieldcontainer',
            //                         layout: {
            //                             type: 'column',
            //                             align: 'middle',
            //                             pack: 'center'
            //                         },
            //                          margin: '50 0 0 10',
            //                         items:[
            //                             {
            //                                 columnWidth:0.33,
            //                                 items:[
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountHolderName',
            //                                         fieldLabel: '<b>Name(Bagnla)</b>',
            //                                         // labelWidth: 200,
            //                                         // columnWidth:1,
            //                                         margin: '0 0 0 0',
            //                                         labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Name(English)</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     //    columnWidth:1,


            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Father Name</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                         labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     //    columnWidth:1,


            //                                     }

            //                                 ]


            //                             },

            //                             {
            //                                 columnWidth:0.33,
            //                                 margin: '0 0 0 150',
            //                                 items:[
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountHolderName',
            //                                         fieldLabel: '<b>Mother Name</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '0 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Spouse Name</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,

            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Occupation</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,                
            //                                     }
            //                                 ]

            //                             },
            //                             {
            //                                 columnWidth:0.33,
            //                                 margin: '0 0 0 150',
            //                                 items:[
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountHolderName',
            //                                         fieldLabel: '<b>National ID</>',
            //                                         // labelWidth: 200,
            //                                         margin: '0 0 0 0',
            //                                         labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Blood Group</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,

            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>PIN</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,                
            //                                     }
            //                                 ]

            //                             }
            //                         ]
            //                     },

            //                 ],

            //             },

            //             {

            //                 margin: '50 0 0 10',
            //                 items: [
            //                     {
            //                         html:'<b>Address Information</b>'
            //                     },

            //                     {
            //                         columnWidth:1,
            //                         xtype:'fieldcontainer',
            //                         layout: {
            //                             type: 'column',
            //                             align: 'middle',
            //                             pack: 'center'
            //                         },
            //                          margin: '10 0 0 -105',

            //                         items:[
            //                             {

            //                                 columnWidth:0.25,
            //                                 items:[
            //                                     {    html:'<b>Present Address</b>'},
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountHolderName',
            //                                         fieldLabel: '<b>Name(Bagnla)</b>',
            //                                         // labelWidth: 200,
            //                                         // columnWidth:1,
            //                                         margin: '0 0 0 0',
            //                                         labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Name(English)</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     //    columnWidth:1,


            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Father Name</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                         labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     //    columnWidth:1,

            //                                     }

            //                                 ]


            //                             },

            //                             {
            //                                 columnWidth:0.25,
            //                                 margin: '0 0 0 90',
            //                                 items:[
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountHolderName',
            //                                         fieldLabel: '<b>Mother Name</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '0 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Spouse Name</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,

            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Occupation</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,                
            //                                     }
            //                                 ]

            //                             },

            //                             {
            //                                 columnWidth:0.25,
            //                                 margin: '0 0 0 90',
            //                                 items:[
            //                                     {html:'<b>Permanent Address</b>'},
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountHolderName',
            //                                         fieldLabel: '<b>National ID</>',
            //                                         // labelWidth: 200,
            //                                         margin: '0 0 0 0',
            //                                         labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Blood Group</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,

            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>PIN</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,                
            //                                     }
            //                                 ]

            //                             },
            //                             {
            //                                 columnWidth:0.25,
            //                                 margin: '0 0 0 90',
            //                                 items:[
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountHolderName',
            //                                         fieldLabel: '<b>National ID</>',
            //                                         // labelWidth: 200,
            //                                         margin: '0 0 0 0',
            //                                         labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>Blood Group</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,

            //                                     },
            //                                     {
            //                                         xtype: 'displayfield',
            //                                         reference: 'accountNo',
            //                                         fieldLabel: '<b>PIN</b>',
            //                                         // labelWidth: 200,
            //                                         margin: '-10 0 0 0',
            //                                          labelSeparator :'<p style= "text-align: right; margin: -15px 0px 0px 0px">:</p>',
            //                                         // columnWidth:0.2,                
            //                                     }
            //                                 ]

            //                             }
            //                         ]
            //                     },

            //                 ],

            //             },

            //         ],
            //     },

            // ]
            items: [{
                // xtype: 'fieldset',
                // itemId: 'nidInformation',
                // reference: 'nidInformation',
                // collapsible: true,
                // collapsed: true,
                // columnWidth: 1,
                // layout: 'column',
                // title: 'NID INFORMATION',
                // margin: '10 10 10 10',
                items: [
                    {
                        xtype: 'form',
                        // itemId: 'nidSideInformationForm',
                        // reference: 'nidSideInformationForm',
                        // collapsible: false,
                        // title: 'NID Detalis',
                        // collapsed: false,
                        columnWidth: 1,
                        layout: 'column',
                        height: 600,
                        padding: "0 0 0 20",
                        border: false,
                        autoHeight: true,
                        scrollable: true,
                        autoScroll: true,
                        items: [
                            {
                                columnWidth: 1,
                                xtype: 'fieldcontainer',
                                padding: "0 0 0 10",
                                layout: {
                                    type: 'column',
                                    align: 'middle',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        columnWidth: 0.7,
                                        layout:"column",
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                id: 'nidNo',
                                                reference: 'nidNo',
                                                fieldLabel: 'Nid No',
                                                columnWidth: 1,
                                                labelAlign: 'left',
                                                readOnly: true,
                                                labelWidth: 120,
                                                margin: '8 10 5 0',
                                            },
                                            {
                                                xtype: 'textfield',
                                                id: 'nameOfBangla',
                                                reference: 'nameOfBangla',
                                                fieldLabel: 'Name In Bangla',
                                                columnWidth: 1,
                                                labelAlign: 'left',
                                                readOnly: true,
                                                labelWidth: 120,
                                                margin: '5 10 5 0',
                                            },
                                            {
                                                xtype: 'textfield',
                                                id: 'nameOfEnglish',
                                                reference: 'nameOfEnglish',
                                                fieldLabel: 'Name In English',
                                                columnWidth: 1,
                                                labelAlign: 'left',
                                                readOnly: true,
                                                labelWidth: 120,
                                                margin: '5 10 5 0',
                                            },
                                            {
                                                xtype: 'textfield',
                                                id: 'dateOfBirth',
                                                // reference: 'dateOfBirth',
                                                fieldLabel: 'Date Of Birth',
                                                columnWidth: 1,
                                                labelAlign: 'left',
                                                // readOnly : true,
                                                labelWidth: 120,
                                                format: 'd M Y',
                                                margin: '5 10 5 0',
                                            },

                                        ]
                                    },
                                    {
                                        columnWidth: 0.3,
                                        items: [
                                            {
                                                xtype:'image',
                                                id: 'photo',
                                                // src: 'https://tinypng.com/images/social/website.jpg',
                                                // src: 'http://10.33.255.13:8080/nid/api/v1/NID/files/download/199936111880_ABDULLAH_AL_MAMUN.png',
                                                // fieldLabel: 'Photo',
                                                // // columnWidth: 1,
                                                // labelAlign: 'top',
                                                style: {
                                                    border: '1px solid #8D8787'
                                                },
                                                readOnly: true,
                                                // border:true,
                                                // labelWidth: 100,
                                                margin: '15 10 0 70',
                                                // cls: 'header-right-profile-image',
                                                height: 135,
                                                width: 133,
                                                // itemId: 'myImage',
                                                // alt:'current user image',
                                            },
                                            
                                        ]
                                    }

                                ]
                            },

                       
                            {
                                xtype: 'textfield',
                                id: 'fatherName',
                                // reference: 'fatherName',
                                fieldLabel: 'Father Name',
                                columnWidth: 1,
                                labelAlign: 'left',
                                readOnly: true,
                                labelWidth: 120,
                                margin: '5 10 5 10',
                            },
                            {
                                xtype: 'textfield',
                                id: 'motherName',
                                // reference: 'motherName',
                                fieldLabel: 'Mother Name',
                                columnWidth: 1,
                                labelAlign: 'left',
                                readOnly: true,
                                labelWidth: 120,
                                margin: '5 10 5 10',
                            },
                            {
                                xtype: 'textfield',
                                id: 'spouseName',
                                // reference: 'spouseName',
                                fieldLabel: 'Spouse Name',
                                columnWidth: 1,
                                labelAlign: 'left',
                                readOnly: true,
                                labelWidth: 120,
                                margin: '5 10 5 10',
                            },
                            {
                                xtype: 'textfield',
                                id: 'occupation',
                                // reference: 'occupation',
                                fieldLabel: 'Occupation',
                                columnWidth: 1,
                                labelAlign: 'left',
                                readOnly: true,
                                labelWidth: 120,
                                margin: '5 10 5 10',
                            },
                            {
                                xtype: 'textfield',
                                id: 'pin',
                                // reference: 'occupation',
                                fieldLabel: 'PIN',
                                columnWidth: 1,
                                labelAlign: 'left',
                                readOnly: true,
                                labelWidth: 120,
                                margin: '5 10 5 10',
                            },
                            {
                                xtype: 'textfield',
                                id: 'bloodGroup',
                                // reference: 'occupation',
                                fieldLabel: 'Blood Group',
                                columnWidth: 1,
                                labelAlign: 'left',
                                readOnly: true,
                                labelWidth: 120,
                                margin: '5 10 5 10',
                            },

                            {

                                xtype: 'fieldset',
                                // itemId: 'nidInformation',
                                // reference: 'nidInformation',
                                border: false,
                                collapsible: true,
                                // collapsed: true,
                                // padding: "0 0 0 20",
                                columnWidth: 1,
                                layout: 'column',
                                title: 'Present Address',
                                margin: '10 10 10 0',
                                items: [
                                    
                                {
                                    xtype: 'textfield',
                                    id: 'presentDivision',
                                    // reference: 'presentDivision',
                                    fieldLabel: 'Division',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '0 0 0 15',
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentDistrict',
                                    // reference: 'presentDistrict',
                                    fieldLabel: 'District',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    margin: '0 0 0 15',
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentRmo',
                                    // reference: 'presentRmo',
                                    fieldLabel: 'Rmo',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    margin: '0 0 0 15',
                                },

                                {
                                    xtype: 'textfield',
                                    id: 'presentMunicipality',
                                    // reference: 'presentMunicipality',
                                    fieldLabel: 'Municipality',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 85,
                                    // margin: '5 10 5 10',
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentUpozila',
                                    // reference: 'presentUpozila',
                                    fieldLabel: 'Upozila',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentUnion',
                                    // reference: 'presentUnion',
                                    fieldLabel: 'Union',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentMoholla',
                                    // reference: 'presentMoholla',
                                    fieldLabel: 'Moholla',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 10',
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentAddMoholla',
                                    // reference: 'presentAddMoholla',
                                    fieldLabel: 'Addi Moholla',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentWardUnionPorishod',
                                    // reference: 'presentWardUnionPorishod',
                                    fieldLabel: 'W.U Porishod',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentVillage',
                                    // reference: 'presentVillage',
                                    fieldLabel: 'Village',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    // margin: '5 0 5 10',
                                },

                                {
                                    xtype: 'textfield',
                                    id: 'presentAddVillage',
                                    // reference: 'presentAddVillage',
                                    fieldLabel: 'Addi Village',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentHome',
                                    // reference: 'presentHome',
                                    fieldLabel: 'Home',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentPostOffice',
                                    // reference: 'presentPostOffice',
                                    fieldLabel: 'Post Office',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 10',
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentPostalCode',
                                    // reference: 'presentPostalCode',
                                    fieldLabel: 'Postal Code',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'presentRegion',
                                    // reference: 'presentRegion',
                                    fieldLabel: 'Region',
                                    // columnWidth: .50,
                                    flex:1,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    margin: '0 0 0 15',

                                },


                                ]
                            },


                            {
                                xtype: 'fieldset',
                                // itemId: 'nidInformation',
                                // reference: 'nidInformation',
                                collapsible: true,
                                border: false,
                                // collapsed: true,
                                columnWidth: 1,
                                layout: 'column',
                                title: 'Permanent Address',
                                margin: '10 10 10 0',
                                // padding: "0 0 0 20",

                                items: [
                                   
                                {
                                    xtype: 'textfield',
                                    id: 'permanentDivision',
                                    // reference: 'permanentDivision',
                                    fieldLabel: 'Division',
                                    // columnWidth: .45,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 10 5 13',
                                    flex:1,
                                

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentDistrict',
                                    // reference: 'permanentDistrict',
                                    fieldLabel: 'District',
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // columnWidth: .55,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 20',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentRmo',
                                    // reference: 'permanentRmo',
                                    fieldLabel: 'Rmo',
                                    // columnWidth: .55,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentMunicipality',
                                    // reference: 'permanentMunicipality',
                                    fieldLabel: ' Municipality',
                                    // columnWidth: .45,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    // margin: '5 10 5 13',
                                    flex:1,
                                    // margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentUpozila',
                                    // reference: 'permanentUpozila',
                                    fieldLabel: ' Upozila',
                                    // columnWidth: .55,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 20',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentUnion',
                                    // reference: 'permanentUnion',
                                    fieldLabel: ' Union',
                                    // columnWidth: .45,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    // margin: '5 10 5 13',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentMoholla',
                                    // reference: 'permanentMoholla',
                                    fieldLabel: ' Moholla',
                                    // columnWidth: .55,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 20',
                                    flex:1,
                                    // margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentAddMoholla',
                                    // reference: 'permanentAddMoholla',
                                    fieldLabel: ' Addi Moholla',
                                    // columnWidth: .45,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    // margin: '5 10 5 13',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentWardUnionPorishod',
                                    // reference: 'permanentWardUnionPorishod',
                                    // fieldLabel: ' Ward Union Porishod',
                                    fieldLabel: ' W.U Porishod',
                                    // columnWidth: .55,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 20',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentVillage',
                                    // reference: 'permanentVillage',
                                    fieldLabel: ' Village',
                                    // columnWidth: .45,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    // margin: '5 10 5 13',
                                    flex:1,
                                    // margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentAddVillage',
                                    // reference: 'permanentAddVillage',
                                    fieldLabel: ' Addi Village',
                                    // columnWidth: .55,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 20',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentHome',
                                    // reference: 'permanentHome',
                                    fieldLabel: ' Home',
                                    // columnWidth: .45,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    // margin: '5 10 5 13',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentPostOffice',
                                    // reference: 'permanentPostOffice',
                                    fieldLabel: ' PostOffice',
                                    // columnWidth: .55,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 20',
                                    flex:1,
                                    // margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentPostalCode',
                                    // reference: 'permanentPostalCode',
                                    fieldLabel: ' PostalCode',
                                    // columnWidth: .45,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 70,
                                    // margin: '5 10 5 13',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                {
                                    xtype: 'textfield',
                                    id: 'permanentRegion',
                                    // reference: 'permanentRegion',
                                    fieldLabel: ' Region',
                                    // columnWidth: .55,
                                    labelAlign: 'left',
                                    readOnly: true,
                                    // labelWidth: 77,
                                    // margin: '5 0 5 20',
                                    flex:1,
                                    margin: '0 0 0 15',

                                },
                                ]
                            },


                        ]
                    },
                ]
            }],
        });
        me.callParent(arguments);
    }
});