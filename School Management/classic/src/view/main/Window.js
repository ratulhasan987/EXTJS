
Ext.define('School.view.main.Window', {
    extend: 'Ext.container.Container',
    xtype: 'window-variations',
    controller: 'main',
  
    defaults: {
        width: 800,
        // scrollToEnd:true,
      
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
    scrollable: true,
    items: [
    { 
        xtype: 'window',
        title: '<div style="color:#5fa2dd; font-size:12px; background-color: white;  border-radius:12px 12px 0px 0px; line-height:50px; ><span font-size:10px;"><h1>Confirm Decision</h1></span></div>',    
        titleAlign: 'center',
        header: {padding: '20 0 0 0',  },       
        headerPosition: 'top',
        x: 150, y: 40,
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

                items: [

                    {
                        fieldLabel: 'Comments',
                        // allowBlank: false,
                        width:350,
                        height:80,
                        emptyText: 'Comments',
                        margin: '0 0 0 5',
                        name: 'Comments'
                    },
                   
                ]
            },
{
    
    //button start from here:
    layout: {
        align: 'right',
        pack: 'right',
        type: 'hbox'
    },
    margin: '0 0 0 440',

    defaults: {
        xtype: 'button',
        margin: 5
    },
    items: [
        
        {
            xtype: 'button',
            text: 'Save',
            width:150,
            buttonAlign: 'right',
            scale: 'small',
            bodyStyle:{"background-color":"red"},
            style: {
                'border-radius':'4px',
                'border':'none',
                "background-color":"green",
        },

        handler: function(){
            Ext.create('Ext.window.Window', {
                title: 'Are You Sure?',
                closable: false,
                titleAlign: 'center',
                height: 150,
                width: 320,
                fullscreen: true,
                padding: 4,
                defaults: {
                    xtype: 'button',
                    margin: 10
                },
            
                // layout: 'fit',
                layout: {
                    align: 'middle',
                    pack: 'center',
                    type: 'hbox'
                },
    
                items: [
                    {
                        xtype: 'button',
                        text: 'Yes',
                        width:120,
                        scale: 'medium',
                        style: {
                            'border-radius':'4px',
                            'border':'none',
                            "background-color":"green",
                    },
    
                    handler: function () { 
                        Ext.create('Ext.window.Window', {
                            // window: "background-color: yellow;",
                        // items:{
                        //     xtype: 'window-variations-2',
                        // }
                
                        style: {
                            'border-radius':'8px 10px 0px 0px',
                            // 'border': '6px solid #5fa2dd',
                           
                    },
                        // closable:false,
                        // title: '<div style="color:#5fa2dd; font-size:12px; background-color: white;  border-radius:12px 12px 0px 0px; line-height:48px; ><span font-size:10px;"><h1>Request Successfull</h1></span></div>',    
                        //         titleAlign: 'center',
                        //         header: {padding: '0px 0px 0px 0px',}, 
                        //         // header: {margin: '-20px 0px 0px 0px', },     
                        //         headerPosition: 'top',
        
                        defaults: {
                            width: 700,
                            height: 300,
                            bodyPadding: 10,
                            // closable:false,
                            autoShow: true,
                            resizeHandles: 'off',
                            style: {
                                // 'border-radius':'5px 5px 0px 0px',
                                'border': '6px solid #5fa2dd',
                        },
                        
                        },

                            items: [
                            {
                                title: '<div style="color:#5fa2dd; font-size:12px; background-color: white;  border-radius:12px 12px 0px 0px; line-height:50px; ><span font-size:10px;"><h1>Request Successfull</h1></span></div>',    
                                titleAlign: 'center',
                                header: {padding: '0px 0px 0px 0px',}, 
                                // header: {margin: '-20px 0px 0px 0px', },     
                                headerPosition: 'top',
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
                                    // {
                                    //     margin: '50 0 0 580',
                                    //     xtype: 'button',
                                    //     text: '✕',
                                    //     width:80,
                                    //     scale: 'small',
                                    //     style: {
                                    //         'border-radius':'8px',
                                    //         'border':'none',
                                    //         "background-color":"#d10d27",
                                    // },
                                    // handler: function () { this.up('window').close(); }
                                    // },
                     
                                ],
                        
                        
                            },
                        ]


                            
                        }).show();
                        { this.up('window').close(); }
                }
    
                    },
    


    //No Button:
                    {
                        xtype: 'button',
                        text: 'No',
                        width:120,
                        scale: 'medium',
                        style: {
                            'border-radius':'4px',
                            'border':'none',
                            "background-color":"red",
                    },
                    handler: function () { this.up('window').close(); }
                    },
                ],
            }
         
            ).show();
            { this.up('window').close(); }
    
        },
        },

        {
            xtype: 'button',
            width:150,
            text: 'Close',
            scale: 'small',
            style: {
                'border-radius':'4px',
                'border':'none',
                "background-color":"red"
        },
        handler: function () { this.up('window').close();}
        },
    ],
  
}
            
        ],




    },
]

})