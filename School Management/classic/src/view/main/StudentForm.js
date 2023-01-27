Ext.define('School.view.main.StudentForm', {
    extend: 'Ext.form.Panel',

    xtype: 'studentForm',
    title: 'Student Entry Form',

    controller: 'student',
    initComponent: function () {
        Ext.apply(this,
        {
            //set jsonsubmit to true for CUD operation using form.Submit()
            jsonSubmit: true,
            url: '/api/student',
            resizable: false,
            collapsible: false,
            bodyPadding: '5',
            buttonAlign: 'center',
            border: false,
            trackResetOnLoad: true,
            layout:
            {
                type: 'vbox'
            },
            fieldDefaults:
            {
                xtype: 'textfield',
                msgTarget: 'side',
                labelAlign: 'top',
                labelStyle: 'font-weight:bold'
            },
            defaultType: 'textfield',
            items: [{
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    width: '100%',
                    fieldDefaults:
                    {
                        labelAlign: 'top',
                        labelStyle: 'font-weight:bold'
                    },
                    items: [
                        
                    //     {
                    //     fieldLabel: 'Id',
                    //     name: 'Id',
                    //     readOnly: true,
                    //     width: 55
                    // },


                    {
                        fieldLabel: 'First Name',
                        flex: 1,
                        name: 'firstName',
                        margin: '0 0 0 5',
                        allowBlank: false
                    },
                       
                        {
                            fieldLabel: 'Last Name',
                            flex: 1,
                            margin: '0 0 0 10',
                            name: 'lastName'
                        },

                        // {
                        //     name: 'Gender',
                        //     flex:1,
                        //     margin: '0 0 0 5',
                        //     fieldLabel: 'gender'
                        // },
                        {
                            xtype: 'radiogroup',
                            fieldLabel: 'Gender',
                            flex:2,
                            margin:'0 0 0 50',
                            // padding:'0 0 510 0',
                            cls: 'x-check-group-alt',
                            name: 'gender',
                            columns: 3,
                            items: [
                                { boxLabel: 'Male', inputValue: 'Male' },
                                { boxLabel: 'Female', inputValue:'Female'},
                                { boxLabel: 'Others', inputValue: 'Others' },
                            ]
                        },
                    
                    
                    ]
                },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Date of Birth',
                        name: 'birthDate'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Address',
                        width: '40%',
                        name: 'address1'
                    },
                    // {
                    //     xtype: 'textfield',
                    //     hideLabel: true,
                    //     name: 'address2',
                    //     width: '100%',
                    //     fieldLabel: 'address2'

                    // },
                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'City',
                    //     width: '25%',
                    //     name: 'city'
                    // },


                    {
                        xtype: 'combobox',
                        reference: 'CityStore',
                        publishes: 'value',
                        fieldLabel: 'Select city',
                        displayField: 'city',
                        anchor: '-15',
                        store: {
                            type: 'CityStore'
                        },
                        minChars: 0,
                         queryMode: 'local',
                         typeAhead: true
                        },

                    // {
                    //     xtype: 'textfield',
                    //     fieldLabel: 'state',
                    //     width: '25%',
                    //     name: 'state'
                    // }
            ],

            //buttons start from here:
            buttons: [{
                text: 'Create',
                itemId: 'btnCreate',
                formBind: true,
                handler: 'onCreateClick'
            },
            {
                text: 'Read',
                itemId: 'btnLoad',
                handler: 'onReadClick'
            },

            {
                text: 'Update',
                itemId: 'btnUpdate',
                formBind: true,
                handler: 'onUpdateClick'
            },
            {
                text: 'Delete',
                itemId: 'btnDelete',
                formBind: true,
                handler: 'onDeleteClick'
            },
            {
                text: 'Reset',
                itemId: 'btnReset',
                handler: 'onResetClick'
            },


            // {
            //     text: 'Clear',
            //     itemId: 'btnClear',
            //     handler: 'onClearClick'
            // }
        
        ]
        });

        this.callParent(arguments);

    },
    clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    }
});