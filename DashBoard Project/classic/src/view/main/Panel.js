/**
 * This view is an example list of people.
 */
 Ext.define('DashBoard.view.main.Panel', {
    extend: 'Ext.panel.Panel',
   
    requires: [
        'Ext.layout.container.Card',
        'Ext.layout.container.Column'
    ],

   
    width: '100%',
    height: 400,
    xtype: 'layout-column1',
    layout: 'column',

   

    bodyPadding: 150 ,
    // scrollable: true,
    bodyStyle:{'background-image': 'linear-gradient(to right, #0f1bfa, #090f75);'},

    defaults: {
        bodyPadding: 5
    },
    
    items:[
        
        {        
       
                columnWidth: 0.4,
                title: '<div><img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50"></div><div><span style="color:blue; font-size:14px; line-height:10px;"><h1>Dispute Manager</h1></span></div>',
                
                titleAlign: 'center',
                xtype: 'form-login',
                bodyStyle:{'background-image': 'white;'},

                    height: 400,
                    style: {
                        'border-radius':'20px',
                        'border':'none'
                },

            },
    ]
   
});
