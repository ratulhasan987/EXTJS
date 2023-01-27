Ext.define('School.model.Student', {
    
    extend: 'Ext.data.Model',
    // idProperty:'Id',
    schema: {
        namespace: 'School.model'
    },

    fields: [
        { name: 'gender', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'roll', type: 'int' },
        { name: 'regi', type: 'int' },
        { name: 'birthDate', type: 'date' },
        { name: 'department', type: 'string' },
        { name: 'institute', type: 'string' }
    ],

    // validations: [{
    //     type: 'presence',
    //     field: 'firstName'
    // }]

});