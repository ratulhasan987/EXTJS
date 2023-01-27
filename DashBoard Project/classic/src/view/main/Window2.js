
Ext.define('DashBoard.view.main.Window2', {
    extend: 'Ext.container.Container',
    xtype: 'window-variations-2',
    controller: 'main',

    defaults: {
        width: 800,
        height: 430,
        bodyPadding: 10,
        closable:false,
        autoShow: true,
        resizeHandles: 'off',
        style: {
            'border-radius':'5px 5px 0px 0px',
            'border': '6px solid #5fa2dd',
    },
    
    },
    items: [
    {
        // xtype: 'window',
        title: '<div style="color:#5fa2dd; font-size:12px; background-color: white;  border-radius:12px 12px 0px 0px; line-height:50px; ><span font-size:10px;"><h1>Request Successfull</h1></span></div>',    
        titleAlign: 'center',
        header: {padding: '0 0 0 0',  },       
        headerPosition: 'top',
        // x: 300, y: 100,
        items:[
            {      
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaultType: 'textfield',
                width: '100%',
                fieldDefaults:
                {
                    labelAlign: 'top',
                    labelStyle: 'font-weight:bold'
                },

                items: [
                {

                    fieldLabel: 'Account No.',
                    width:350,
                    name: 'account no.',
                    emptyText: '01298949698',
                    margin: '0 0 0 5',
                    allowBlank: false
                },
                   
                    {
                        fieldLabel: 'Account Name',
                        width:350,
                        margin: '0 0 0 10',
                        emptyText: 'Ratul Hasan',
                        name: 'accont name',
                        allowBlank: false
                    },

                ]
            },

//......................................
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaultType: 'textfield',
                width: '100%',
                fieldDefaults:
                {
                    labelAlign: 'top',
                    labelStyle: 'font-weight:bold'
                },

                items: [
                {
                    fieldLabel: 'Card No.',
                     width:350,
                    // flex: 1,
                    name: 'card no.',
                    margin: '0 0 0 5',
                    emptyText: '01298949698',
                    allowBlank: false
                },
                   
                    {
                        fieldLabel: 'Transaction Amount',
                        allowBlank: false,
                        width:350,
                        // flex: 1,
                        emptyText: '50,000',
                        margin: '0 0 0 10',
                        name: 'Tr A'
                    },
                ]
            },


            {
                xtype: 'fieldcontainer',
                layout: 'vbox',
                defaultType: 'textfield',
                height:'%',
                width: '100%',
                fieldDefaults:

                {
                    labelAlign: 'top',
                    labelStyle: 'font-weight:bold',
                    levelColor:'red'
                },

                // items: [

                //     {
                //         fieldLabel: 'Comments',
                //         // allowBlank: false,
                //         width:350,
                //         height:80,
                //         emptyText: 'Comments',
                //         margin: '0 0 0 5',
                //         name: 'Comments'
                //     },
                   
                // ]
            },
{
    
    // //button start from here:
    // layout: {
    //     align: 'right',
    //     pack: 'right',
    //     type: 'hbox'
    // },
    // margin: '0 0 0 440',

    // defaults: {
    //     xtype: 'button',
    //     margin: 5
    // },
    // items: [
        
    //     {
    //         xtype: 'button',
    //         text: 'Save',
    //         width:150,
    //         buttonAlign: 'right',
    //         scale: 'small',
    //         handler: 'onSaveClick',
    //         bodyStyle:{"background-color":"red"},
    //         style: {
    //             'border-radius':'4px',
    //             'border':'none',
    //             "background-color":"green",
    //     },
    //     },

    //     {
    //         xtype: 'button',
    //         width:150,
    //         text: 'Close',
    //         scale: 'small',
    //         style: {
    //             'border-radius':'4px',
    //             'border':'none',
    //             "background-color":"red"
    //     },
    //     handler: function () { this.up('window').close();}
    //     },
    // ],
  
}
            
        ],




    },
]

})