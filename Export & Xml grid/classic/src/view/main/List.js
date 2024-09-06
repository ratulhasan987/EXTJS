/**
 * This view is an example list of people.
 */
Ext.define('Trail.view.main.List', {
    extend : 'Ext.grid.Panel',
    xtype: 'mainlist',
    // requires: [
    //     // 'Trail.store.Personnel',
    //     'Trail.view.main.Grid',
    // ],
  
    // // scrollable:true,
    title: 'Personnel Grid',

    tools: [

        {
            xtype: 'button',
            text: 'Export to Excel',
            // tooltip: 'Export to .pdf',
            iconCls: 'export-icon',
            style:{
                'background-color':'#32a83e',
            },
            // listeners: {
            //     click: 'generatelmsPPCExcelReport',
            // }
             
            handler: function(b, e) {
                b.up('grid').downloadExcelXml();
            }

        }
    ],

    store: {
        autoLoad:true,
        proxy: {
            type: 'ajax',
            reader: 'xml'
        },
        fields: [
            'name', 'country','state-province'
        ],
        proxy:{
            type:'ajax',
            url:'http://universities.hipolabs.com/search?country=india',
          
        }
    },

   
    columns: [
        { text: 'Name',  dataIndex: 'name',flex: 1 },
        { text: 'Country', dataIndex: 'country', flex: 1 },
        { text: 'State', dataIndex: 'state-province', flex: 1 },
       
            
    ],


    // // extend: 'Ext.grid.Panel',
    // // xtype: 'mainlist',

    // // requires: [
    // //     'Trail.store.Personnel',
    // //     'Trail.view.main.Grid',
    // // ],

    // // title: 'Personnel',


  

    // // store: {
    // //     type: 'personnel'
    // // },

   

    // listeners: {
    //     select: 'onItemSelected'
    // }
});
