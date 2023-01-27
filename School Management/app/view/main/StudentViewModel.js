Ext.define('School.view.main.StudentViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.studentviewmodel',
    stores: {
        StudentListStore: {
            model: 'School.model.Student',
            autoLoad: true,
            autoSync: true,
            proxy:
            {
                type: 'rest',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: '/api/student',
                writer: {
                    type: 'json',
                    dateFormat: 'd/m/Y',
                    writeAllFields: true
                }
            }
        }

    }
});