Ext.define('School.view.main.StudentListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.student-list',

    // onAddClick: function (sender, record) {
    //     var studentGrid = this.getView();
    //     var studentStore = studentGrid.getStore();

    // //     //adding dummy student:
    // //     var studentModel = Ext.create('School.model.Student');
    // //     // studentModel.set("Id", );
    // //     studentModel.set("name", "new student");
    // //     studentModel.set("roll", "");
    // //     studentModel.set("regi", "");
    // //     studentModel.set("birthDate","");
    // //     studentModel.set("department", "");
    // //     studentModel.set("institute", "");

    // //     studentStore.insert(0, studentModel);
    // // },

    onLoadClick: function (sender, record) {
        var studentStore = this.getView().getStore();
        studentStore.load();
    },

    onRemoveClick: function (sender, record) {
        var studentGrid = this.getView();
        var studentStore = studentGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = studentGrid.getSelectionModel().getSelection();

        studentStore.remove(selectedRows);
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveStudent');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});