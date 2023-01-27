Ext.define('School.view.main.ReOrderTab', {
  
    extend: 'Ext.panel.Panel',
    xtype: 'advancedTabs',
    controller: 'advanced-tabs',

    width: 700,
    height: 400,
    layout: 'fit',
    viewModel: true,

    title:'School',



    items: [

      
        
        {
        xtype: 'tabpanel',
        reference: 'tabpanel',
        border: false,
        
        defaults: {
            bodyPadding: 10,
            scrollable: true,
            closable: true,
            border: false,

            
        },

        

        bind: {
            tabPosition: '{positionBtn.value}',
            tabRotation: '{rotationBtn.value}'
        },

        
        
        items: [
            
            {
            title: 'Student List',
            // icon: null,
            glyph: 42,
            closable: false,
            // iconCls: 'fa-user',
            items: [{
                xtype: 'StudentData'
            }],
        }, 
        
        {
            title: 'Student Form',
            // icon: null,
            glyph: 70,
            closable: false,
            // iconCls: 'fa-home',
            items: [{
                xtype: 'studentForm'
            }]
            
     
        }, {
            title: 'Teacher List',
            // icon: null,
            glyph: 86,
            closable: false,
            // iconCls: 'fa-user',
            items: [{
                xtype: 'techerList'
          }]
        },
        
        
    ]  
}],

// tbar: [
        
    
//     //     {
//     //     xtype: 'label',
//     //     text: 'Position:',
//     //     padding: '0 0 0 5'
//     // }, 
    
//     // {
//     //     xtype: 'segmentedbutton',
//     //     reference: 'positionBtn',
//     //     value: 'top',
//     //     defaultUI: "default-toolbar",
//     //     items: [
            
//     //         {
//     //         text: 'Top',
//     //         value: 'top'
//     //     },
        
//     //     // {
//     //     //     text: 'Right',
//     //     //     value: 'right'
//     //     // }, 
        
//     //     {
//     //         text: 'Bottom',
//     //         value: 'bottom'
//     //     },
        
//     //     // {
//     //     //     text: 'Left',
//     //     //     value: 'left'
//     //     // }
    
//     // ]
//     // },
    
//     // {
//     //     xtype: 'label',
//     //     text: 'Rotation:',
//     //     padding: '0 0 0 5'
//     // }, 
    
//     // {
//     //     xtype: 'segmentedbutton',
//     //     reference: 'rotationBtn',
//     //     value: 'default',
//     //     defaultUI: "default-toolbar",
//     //     items: [{
//     //         text: 'Default',
//     //         value: 'default'
//     //     }, {
//     //         text: 'None',
//     //         value: 0
//     //     }, {
//     //         text: '90deg',
//     //         value: 1
//     //     }, {
//     //         text: '270deg',
//     //         value: 2
//     //     }]
//     // }, 
    
    
//     {
//         xtype: 'button',
//         icon: null,
//         glyph: 43,
//         tooltip: 'Add Tab',
//         text:'Add Tab',
//         listeners: {
//             click: 'onAddTabClick'
//         }
//     }, 
    
// //     // {
// //     //     xtype: 'button',
// //     //     enableToggle: true,
// //     //     tooltip: 'Auto Cycle!',
// //     //     listeners: {
// //     //         toggle: 'onAutoCycleToggle'
// //     //     },
// //     //     glyph: 109
// //     // }

// ],

});