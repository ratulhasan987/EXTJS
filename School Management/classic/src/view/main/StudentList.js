Ext.define('School.view.main.StudentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentList',

    title: 'Student List',


    requires: [
        'School.store.StudentStore'
    ],

    store: {
        type: 'StudentStore'
    },
    

    
    controller: 'student-list',
    viewModel: { type: 'studentviewmodel' },
    reference:'studentlistgrid',
    selType: 'rowmodel',

  
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },


    listeners: {
        selectionchange: 'onSelectionChange'
    },

    // bind: {
    //     store: '{StudentListStore}'
    // },



    initComponent: function () {
        Ext.apply(this,
        {
            plugins: [Ext.create('Ext.grid.plugin.RowEditing',
            {
                clicksToEdit: 2
            })],
    

         

            columns: [
                
            //     {
            //     text: "Id",
            //     dataIndex: 'Id',
            //     hidden: false,
            //     width: 35
            // },

            {
                text: "Name",
                // flex: 1,
                align:'center',
                dataIndex: 'name',
                editor:
                {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            },
            {
                text: "Gender",
                flex: 0.5,
                align:'center',
                dataIndex: 'gender',
                editor:
                {
                    allowBlank: true
                }
            },

            {
                text: "Roll Number",
                flex: 0.5,
                align:'left',
                dataIndex: 'roll',
                editor:
                {
                    allowBlank: true
                }
            },

       

            // {
            //     text: "Registration Number.",
            //     flex: 0.5,
            //     align:'right',
            //     dataIndex: 'regi',
            //     editor:
            //     {
            //         allowBlank: true
            //     }
            // },
            {
                xtype: 'datecolumn',
                header: "Birth Date",
                width: 135,
                align:'center',
                dataIndex: 'birthDate',
                editor:
                {
                    xtype: 'datefield',
                    allowBlank: true
                },
                renderer: Ext.util.Format.dateRenderer('d/m/Y')
            },
            {
                text: "Department",
                flex: 1,
                align:'center',
                dataIndex: 'department',
                editor:
                {
                    allowBlank: true
                }
            },
            {
                text: "Institute",
                flex: 1,
                align:'center',
                dataIndex: 'institute',
                editor:
                {
                    allowBlank: true
                }
            }],

            //button start from here:
            tbar: [
                
            //     {
            //     text: 'Add Student',
            //     iconCls: 'fa-plus',
            //     handler: 'onAddClick'
            // },
            //  {
            //     itemId: 'removeStudent',
            //     text: 'Remove Student',
            //     iconCls: 'fa-times',
            //     reference: 'btnRemoveStudent',
            //     handler: 'onRemoveClick',
            //     disabled: true
            // },
           
            {
                xtype: 'textfield',
                text: 'Search',
                emptyText: 'Search',
                store: {
                    type: 'StudentStore'
                },
                listeners: {
                     'change' : function(field, value, oldvalue, eOpts) {
                          this.store.load({params:{id: 1,search: value}});
                     },
                     scope:this,
                }}
        
        
        ]
        });

        this.callParent(arguments);
    },

    
});