/**
 * This view is an example list of people.
 */
 Ext.define('DashBoard.view.main.Panel2', {
    extend: 'Ext.panel.Panel',
   
    // requires: [
    //     'Ext.layout.container.Card',
    //     'Ext.layout.container.Column'
    // ],

    xtype: 'window-variations',
    layout: 'column',

   

 

    // defaults: {
    //     bodyPadding: 5
    // },
    
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
