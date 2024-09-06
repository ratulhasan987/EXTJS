Ext.define('Trail.view.main.XmlModel', {
    extend : 'Ext.data.reader.Xml',
    alias : 'reader.myreader',
    getResponseData: function(response) {
        // Here is the xmlDocument you are going to change
        var xmlDoc = response.responseXML;

        // I change the first foo value to 11.
        // var fooValues=xmlDoc.getElementsByTagName('SERIAL');
        // var fooValu=xmlDoc.getElementsByTagName('foo');

        // fooValues[0].innerHTML=11;

        return this.callParent([response]);
    }
});

/**
 * This view is an example list of people.
 */
Ext.define('Trail.view.main.List', {
    extend : 'Ext.grid.Panel',
    xtype: 'gridpanel',
    
    // requires: [
    //     // 'Trail.store.Personnel',
    //     'Trail.view.main.Grid',
    // ],


    store: {
        autoLoad: true,
        fields: ['SERIAL','TRAN_ID','TRAN_DATE','VALUE_DATE','TYPE','AMOUNT','CURRENCY','PARTICULAR','BALANCE'],
        proxy: {
            type: 'ajax',
            url: 'data1.xml',
            reader: {
                type  : 'myreader', // instead of xml
                rootProperty  : 'CBBLGW',
                record: 'TRANDetails',
            }
        }    
    },

    columns : [
        {text: 'SERIAL', dataIndex : 'SERIAL', flex: 1,align:'center'},
        {text : 'TRAN_ID',dataIndex : 'TRAN_ID', flex: 1,align:'center'},
        {text: 'TRAN_DATE',dataIndex : 'TRAN_DATE',flex: 1,align:'center'},
        {text: 'VALUE_DATE',dataIndex : 'VALUE_DATE',flex: 1,align:'center'},
        {text: 'TYPE',dataIndex : 'TYPE',flex: 1,align:'center'},
        {text: 'AMOUNT',dataIndex : 'AMOUNT',flex: 1,align:'center'},
        {text: 'CURRENCY',dataIndex : 'CURRENCY',flex: 1,align:'center'},
        {text: 'PARTICULAR',dataIndex : 'PARTICULAR',flex: 1,align:'center'},
        {text: 'BALANCE',dataIndex : 'BALANCE',flex: 1,align:'center'},
    ],
    renderTo : document.body,

    // scrollable:true,
    title: 'Xml Grid',

    // tools: [

    //     {
    //         xtype: 'button',
    //         text: 'Export to Excel',
    //         // tooltip: 'Export to .pdf',
    //         iconCls: 'export-icon',
    //         // reference: 'name',
    //         // itemId: 'lmsPPCExcelReport',
    //         // disabled: true,
    //         style:{
    //             'background-color':'#32a83e',
    //         },
    //         // listeners: {
    //         //     click: 'generatelmsPPCExcelReport',
    //         // }
             
    //         handler: function(b, e) {
    //             b.up('grid').downloadExcelXml();
    //         }

    //     }
    // ],

});
