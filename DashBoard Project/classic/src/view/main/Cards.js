Ext.define('DashBoard.view.main.Cards', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.Card'
    ],
    xtype: 'layout-card',
    layout: 'column',
    // width: 500,
    // height: 400,

    bodyPadding: 5,

    defaults: {
        border:false
    },

    defaultListenerScope: true,

 

    // items: [
    //     {
            
    //         html: '<h1>Congratulations!</h1>'
    //         },
    //     {
              
                
    //             // style: {background: rgb(197, 15, 15)},
    //             bodyStyle:{"background-color":"green"}, 
    //         },

      
    // ],

 

});