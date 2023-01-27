/**
 * This example shows how to enable row editing in grids.
 */
 Ext.define('School.view.main.Teacher', {
    extend: 'Ext.grid.Panel',
    xtype: 'techerList',
    // controller: 'teacher',

    title: 'Techer Details',
    // width: 700,
    // height: 400,

    profiles: {
        classic: {
            width: 700,
            activeColumnWidth: 60
        },
        neptune: {
            width: 700,
            activeColumnWidth: 60
        },
        graphite: {
            width: 950,
            activeColumnWidth: 100
        },
        'classic-material': {
            width: 950,
            activeColumnWidth: 150
        }
    },

    requires: [
        'School.store.TeacherStore'
    ],

    store: {
        type: 'TeacherStore'
    },

    // plugins: {
    //     rowediting: {
    //         clicksToMoveEditor: 1,
    //         autoCancel: false
    //     }
    // },

    columns: [{

        header: 'Name',
        dataIndex: 'name',
        align:'center',
        // width: 100,
        // flex: 1,
        // dirtyText: 'Name has been edited',
        editor: {
            // defaults to textfield if no xtype is supplied
            // allowBlank: false
        }
    }, 


    {
        header: 'Email',
        dataIndex: 'email',
        align:'center',
        dirtyText: 'E-mail was changed',
        flex: 1,
        // editor: {
        //     allowBlank: false,
        //     vtype: 'email'
        // }
    }, {
        xtype: 'datecolumn',
        header: 'Start Date',
        dataIndex: 'startdate',
        align:'center',
        // width: 135,
        flex:1,
        editor: {
            xtype: 'datefield',
            allowBlank: false,
            format: 'm/d/Y',
            minValue: '01/01/2006',
            minText: 'Cannot have a start date before the company existed!',
            maxValue: Ext.Date.format(new Date(), 'm/d/Y')
        }
    }, {
        xtype: 'numbercolumn',
        header: 'Salary',
        dataIndex: 'salary',
        align:'center',
        flex:1,
        // format: '$0,0',
        width: 130,
        dirtyText: null,
        editor: {
            xtype: 'numberfield',
            allowBlank: false,
            minValue: 1,
            maxValue: 150000
        }
    }, 
    
    {
        xtype: 'checkcolumn',
        header: 'Active?',
        dataIndex: 'active',
        width: 60,
        flex:1,
        editor: {
            xtype: 'checkbox',
            cls: 'x-grid-checkheader-editor'
        }
    }
],

    tbar: [{
        text: 'Add Teacher',
        handler: 'onAddClick'
    }, {
        text: 'Remove Teacher',
        reference: 'removeEmployee',
        handler: 'onRemoveClick',
        disabled: true
    }],

    listeners: {
        selectionchange: 'onSelectionChange'
    }
});