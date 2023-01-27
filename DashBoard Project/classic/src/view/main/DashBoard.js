/**
 * This view is an example list of people.
 */
 Ext.define('DashBoard.view.main.DashBoard', {
    extend: 'Ext.panel.Panel',
   
    requires: [
        'Ext.layout.container.Card',
        'Ext.layout.container.Column'
    ],

    title: 'DashBoard',

    width: '100%',
    height: 400,
    xtype: 'layout-column',
    layout: 'column',

    bodyPadding: 5,

    defaults: {
        bodyPadding: 5
    },
   
    items: [
        {

            columnWidth: 0.2,
            items: [{
                
                xtype: 'layout-card',
                bodyStyle:{'background-image': 'linear-gradient(to right, #f55151, #b01313, black);'},
                height: 100,
                style: {
                    'border-radius':'4px'
                },
                items: [
                    {
                       
                        bodyPadding: 15,
                        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                    
                        },
                        {
                        
                        html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                        
                        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                        },
                    ]
                
            }]
        },

//Second card:
        {
          
            columnWidth: 0.2,
            
            items: [{
                
                xtype: 'layout-card',
                bodyStyle:{'background-image': 'linear-gradient(to right, #2bcf3f, #096614);'},
                height: 100,
                style: {
                    'border-radius':'7px',
                    'box-shadow': '0px 0px 6px 2px #9fa0a1'
                },
                items: [
                    {
                        html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                        bodyPadding: 15,
                        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                    
                        },
                        {
                        
                        html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                        
                        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                        },
                    ]
            }]
        },

//Thierd Dashboard:
{
    
    columnWidth: 0.2,
    
    items: [{
        
        xtype: 'layout-card',
        bodyStyle:{'background-image': 'linear-gradient(to right, #0f1bfa, #090f75);'},
        height: 100,
        style: {
            'border-radius':'7px'
        },
        items: [
            {
                html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                bodyPadding: 15,
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
            
                },
                {
                
                html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                },
            ]
        
    }]
},

//4th dashboard:
{
  
    columnWidth: 0.2,
    
    items: [{
        
        xtype: 'layout-card',
        bodyStyle:{'background-image': 'linear-gradient(to right,#e04e10, #912f06);'},
        height: 100,
        style: {
            'border-radius':'7px'
        },
        items: [
            {
                html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                bodyPadding: 15,
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
            
                },
                {
                
                html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                },
            ]
        
    }]
},

//5th card:
{
    
    columnWidth: 0.2,
    
    items: [{
        
        xtype: 'layout-card',
        bodyStyle:{'background-image': 'linear-gradient(to right, #0f1bfa, #090f75);'},
        height: 100,
        style: {
            'border-radius':'7px'
        },
        items: [
            {
                html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                bodyPadding: 15,
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
            
                },
                {
                
                html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                },
            ]
        
    }]
},

//Finished column card here:


//Start new column:
     {
        
            columnWidth: 0.2,
            
            items: [{
                
                xtype: 'layout-card',
                bodyStyle:{'background-image': 'linear-gradient(to right, #f55151, #b01313, black);'},
                height: 100,
                style: {
                    'border-radius':'7px'
                },
                items: [
                    {
                        html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                        bodyPadding: 15,
                        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                    
                        },
                        {
                        
                        html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                        
                        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                        },
                    ]
                
            }]
        },

//Second dashboard:
        {
    
            columnWidth: 0.2,
            
            items: [{
                
                xtype: 'layout-card',
                bodyStyle:{'background-image': 'linear-gradient(to right, #2bcf3f, #096614);'},
                height: 100,
                style: {
                    'border-radius':'7px'
                },
                items: [
                    {
                        html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                        bodyPadding: 15,
                        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                    
                        },
                        {
                        
                        html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                        
                        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                        },
                    ]
            }]
        },

//Thierd Dashboard:
{

    columnWidth: 0.2,
    
    items: [{
        
        xtype: 'layout-card',
        bodyStyle:{'background-image': 'linear-gradient(to right, #0f1bfa, #090f75);'},
        height: 100,
        style: {
            'border-radius':'7px'
        },
        items: [
            {
                html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                bodyPadding: 15,
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
            
                },
                {
                
                html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                },
            ]
        
    }]
},

//4th dashboard:
{

    columnWidth: 0.2,
    
    items: [{
        
        xtype: 'layout-card',
        bodyStyle:{'background-image': 'linear-gradient(to right,#e04e10, #912f06);'},
        height: 100,
        style: {
            'border-radius':'7px'
        },
        items: [
            {
                html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                bodyPadding: 15,
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
            
                },
                {
                
                html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                },
            ]
        
    }]
},

//5th card:
{
    // title: 'Width = 150px',
    columnWidth: 0.2,
    
    items: [{
        
        xtype: 'layout-card',
        bodyStyle:{'background-image': 'linear-gradient(to right, #0f1bfa, #090f75);'},
        height: 100,
        style: {
            'border-radius':'7px'
        },
        items: [
            {
                html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                bodyPadding: 15,
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
            
                },
                {
                
                html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                },
            ]
        
    }]
},


//Start new column:
{
        
    columnWidth: 0.2,
    
    items: [{
        
        xtype: 'layout-card',
        bodyStyle:{'background-image': 'linear-gradient(to right, #f55151, #b01313, black);'},
        height: 100,
        style: {
            'border-radius':'7px'
        },
        items: [
            {
                html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                bodyPadding: 15,
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
            
                },
                {
                
                html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                },
            ]
        
    }]
},

//Second dashboard:
{

    columnWidth: 0.2,
    
    items: [{
        
        xtype: 'layout-card',
        bodyStyle:{'background-image': 'linear-gradient(to right, #2bcf3f, #096614);'},
        height: 100,
        style: {
            'border-radius':'7px'
        },
        items: [
            {
                html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
                bodyPadding: 15,
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
            
                },
                {
                
                html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
                
                bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
                },
            ]
    }]
},

//Thierd Dashboard:
{

columnWidth: 0.2,

items: [{

xtype: 'layout-card',
bodyStyle:{'background-image': 'linear-gradient(to right, #0f1bfa, #090f75);'},
height: 100,
style: {
    'border-radius':'7px'
},
items: [
    {
        html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
        bodyPadding: 15,
        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
    
        },
        {
        
        html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
        
        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
        },
    ]

}]
},

//4th dashboard:
{

columnWidth: 0.2,

items: [{

xtype: 'layout-card',
bodyStyle:{'background-image': 'linear-gradient(to right,#e04e10, #912f06);'},
height: 100,
style: {
    'border-radius':'7px'
},
items: [
    {
        html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
        bodyPadding: 15,
        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
    
        },
        {
        
        html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
        
        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
        },
    ]

}]
},

//5th card:
{
// title: 'Width = 150px',
columnWidth: 0.2,

items: [{

xtype: 'layout-card',
bodyStyle:{'background-image': 'linear-gradient(to right, #0f1bfa, #090f75);'},
height: 100,
style: {
    'border-radius':'7px'
},
items: [
    {
        html: '<img src="https://www.w3schools.com/images/lamp.jpg" width="50" height="50">',
        bodyPadding: 15,
        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
    
        },
        {
        
        html: '<span style="color:white; font-size:20px; line-height:10px;"><h1>220</h1></span><span style="color:white; font-size:14px; line-height:10px;"><p>Total</p></span>',
        
        bodyStyle:{"background-color":"rgba(0, 0, 0, 0)"},
        },
    ]

}]
},



    ],



});
