Ext.define('School.view.Viewport', {
    extend: 'Ext.container.Viewport',
    id: 'viewport',
    
    items: [
        // {
        //     region: 'north',
        //     html: '<h1>Header Part</h1>'
        // },
        {
            region: 'center',
            xtype: 'tabpanel',
            activeTab: 0,
            height:600,
            itemId: 'viewport-target',
        }

    ],


    

    // requires: [
    //     'Ext.plugin.Viewport',
    //     'Ext.window.MessageBox',
    // ],
});