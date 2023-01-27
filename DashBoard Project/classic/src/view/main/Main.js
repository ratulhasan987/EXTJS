
Ext.define('DashBoard.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DashBoard.view.main.MainController',
        'DashBoard.view.main.MainModel',
        'DashBoard.view.main.List',
        'DashBoard.view.complaint.Complaint'

    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
    bodyStyle:{'background-image': 'linear-gradient(to right, #0f1bfa, #090f75);'},
    defaults: {
        

        
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        
    //     {
    //     title: 'Dashboard',
    //     iconCls: 'fa-home',
    //     // The following grid shares a store with the classic version's grid as well!
    //     items: [{
    //         xtype: 'layout-column'
    //     }]
    // }, 
    
    {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            // xtype: 'window-variations',
            xtype: 'column-view-complaint',
        }]
    }, 
    
    // {
    //     title: 'Groups',
    //     iconCls: 'fa-users',
    //     items: [{
    //         xtype: 'dashBoard'
    //     }]

        
        
    // //  },
    
    // {
    //     title: 'Settings',
    //     iconCls: 'fa-cog',
    //     items: [{
    //         xtype: 'message-box'
    //     }]
    
    // }

]
});
