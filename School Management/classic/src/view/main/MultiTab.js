
/**
 * Demonstrates a tab panel with framing.
 */
Ext.define('School.view.main.MultiTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'advancedTabs',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        

        'School.view.main.MainController',
        'School.view.main.MainModel',
        'School.view.main.List',
        'School.view.main.Teacher',
        'School.view.main.StudentList',
        'School.view.main.ReOrderTab'
    ],


    controller: 'advanced-tabs',
    viewModel: 'main',

    items: [

        
        {
            title: 'Student List',
            // iconCls: 'fa-user',
            items: [{
                xtype: 'StudentData'
            }]
        },
  
        {
            title: 'Student Form',
            // iconCls: 'fa-home',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'studentForm'
            }]
        },

        {
            title: 'Teacher List',
            // iconCls: 'fa-user',
            items: [{
                xtype: 'techerList'
            }]
    
        },
        {
            title: 'Extra',
            // iconCls: 'fa-user',
            items: [{
                xtype: 'advancedTabs'
            }]
    
        },

       
    
    {
        title: 'Disabled Tab',
        disabled: true
    }


],



    // listeners: {
    //     tabchange: 'onTabChange'
    // }
});