Ext.define('School.view.main.StudentData', {
    extend: 'Ext.form.Panel',
    xtype: 'StudentData',

    controller: 'student-data',
    // controller: 'multi',

    requires: [
        'Ext.grid.*',
        'Ext.form.*',
        'Ext.layout.container.Column',
        'School.store.StudentStore',
        'School.model.Student'
    ],

    title: 'Student data',
    // width: 880,
    frame: true,
    bodyPadding: 5,
    layout: 'column',
    signTpl: '<span style="' +
        'color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}"' +
        '>{text}</span>',

    // viewModel: {
    //     data: {
    //         theCompany: null
    //     }
    // },

    viewModel: { type: 'studentviewmodel' },

    fieldDefaults: {
        labelAlign: "left",
        labelWidth: 90,
        anchor: '100%',
        msgTarget: 'side'
    },

    items: [{
        xtype: 'tabpanel',

        height: 450,
        columnWidth: 0.55,
        bodyPadding: 10,
        tabPosition: 'bottom',
        items: [
            {
                title: 'All Students',
                xtype: 'gridpanel',
                bind: {
                    selection: '{StudentListStore}'
                },
                store: {
                    type: 'StudentStore'
                },

                columns: [{
                    text: 'Student',
                    dataIndex: 'name',
                    align: 'left',
                    flex: 1,
                    sortable: true
                },


                {
                    text: 'Roll',
                    dataIndex: 'roll',
                    align: 'center',
                    flex: 1,
                    sortable: true,

                },

                {
                    text: 'Department',
                    dataIndex: 'department',
                    align: 'center',
                    flex: 1,
                    sortable: true,

                },


                ]
            },
            {
                title: 'Query Results',
                // html : 'Filtered Results will show up here',

                xtype: 'gridpanel',
                bind: {
                    selection: '{StudentListStore}'
                },
                store: Ext.create('School.store.StudentStore', {
                    model: 'Student',

                    // sorters: [{
                    //     property: 'department',
                    //     // direction: 'ASC'
                    // }],

                    filters: [{
                        property: 'department',
                        value: 'CA'
                    }]
                }),


                columns: [{
                    text: 'Student',
                    dataIndex: 'name',
                    align: 'left',
                    flex: 1,
                    sortable: true
                },


                {
                    text: 'Roll',
                    dataIndex: 'roll',
                    align: 'center',
                    flex: 1,
                    sortable: true,

                },

                {
                    text: 'Department',
                    dataIndex: 'department',
                    align: 'center',
                    flex: 1,
                    sortable: true,

                },


                ]
            }
        ],

    },


    //Student Details:
    {
        xtype: 'fieldset',
        title: 'Student details',

        columnWidth: 0.45,
        margin: '0 0 0 10',
        layout: 'anchor',
        defaultType: 'textfield',

        items: [{
            fieldLabel: 'Name',
            bind: '{StudentListStore.name}'
        }, {
            fieldLabel: 'Roll',
            bind: '{StudentListStore.roll}'
        },
        {
            fieldLabel: 'Registration Number',
            bind: '{StudentListStore.regi}'
        },
        {
            fieldLabel: 'Institute',
            bind: '{StudentListStore.institute}'
        },
        {
            fieldLabel: 'Department',
            bind: '{StudentListStore.department}'
        },
        {
            fieldLabel: 'Birth Date',
            bind: '{StudentListStore.birthDate}'

        },
        {
            fieldLabel: 'Gender',
            bind: '{StudentListStore.gender}'
        },

        {
            xtype: 'button',
            text: 'Update Student',
            scale: 'medium',
            align: 'right',
            handler:function(){
                Ext.create('Ext.window.Window', {
                    
                    // items:{
                    //     xtype: 'studentList',
                    // }
                })

                
            }

        },

            // {
                    
            //         xtype:'studentForm',
            //         xtype: 'button',
            //         reference:'studentfrom',
            //         icon: null,
            //         glyph: 43,
            //         tooltip: 'Update Student',
            //         text:'Update Student',
            //         listeners: {
            //             click: 'onAddTabClick'
            //         }
            //     }, 


        {
            labelAlign: 'top',
            xtype: 'datefield',
            fieldLabel: 'Last Updated (Not editable)',
            labelSeparator: '',
            bind: '{theCompany.priceLastChange}',

            // This field is only set when the price changes
            // The Model rejects set changes.
            readOnly: true
        }

        ]
    }]
});