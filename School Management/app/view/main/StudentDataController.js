Ext.define('School.view.main.StudentDataController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.student-data',


 
    onAddTabClick: function() {
        // var tabPanel = this.lookupReference('tabpanel'),
        //     counter = ++this.counter,
            
        //     tab = tabPanel.add({
        //         title: 'Tab ' + counter,
        //     });

        // tabPanel.setActiveTab(tab);

        controller: 'advanced-tabs.onAddTabClick()'
    },


    

    onSelectionChange: function(selModel, records) {
        var rec = records[0];

        if (rec) {
            this.getView().getForm().loadRecord(rec);
        }
    },

    updateButton: function(){
        
    },

  


    onClick: function () {
        
        xtype: 'studentForm'
        
        // var studentGrid = this.getView();
        // var studentStore = studentGrid.getStore();

        // //adding dummy student
        // var studentModel = Ext.create('School.model.Student');
        // // studentModel.set("Id", );
        // studentModel.set("name", "new student");
        // studentModel.set("roll", "");
        // studentModel.set("regi", "");
        // studentModel.set("birthDate","");
        // studentModel.set("department", "");
        // studentModel.set("institute", "");

        // studentStore.insert(0, studentModel);
    },

    // renderChange: function(value) {
    //     return this.renderSign(value, '0.00');
    // },

    // renderPercent: function(value) {
    //     return this.renderSign(value, '0.00%');
    // },

    // renderSign: function(value, format) {
    //     var text = Ext.util.Format.number(value, format),
    //         tpl = this.signTpl,
    //         data = this.data;

    //     if (Math.abs(value) > 0.1) {
    //         if (!tpl) {
    //             this.signTpl = tpl = this.getView().lookupTpl('signTpl');
    //             this.data = data = {};
    //         }

    //         data.value = value;
    //         data.text = text;

    //         text = tpl.apply(data);
    //     }

    //     return text;
    // }
});