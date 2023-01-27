Ext.define('School.store.TeacherStore', {
    extend: 'Ext.data.Store',

    alias: 'store.TeacherStore',

    fields: [
         'name', 'email','startdate','salary','active'
    ],

       
    data: { items: [
        {  name: "Tarek", email: "dasda@gmail.com", startdate:'2020-10-10',salary:'100000',active:'a'},
        {  name: "Manzur", email: "dfasaa@gmail.com", startdate:'2022-10-10',salary:'20000',active:''},
        {  name: "Ratul", email: "rakfdk@gmail.com", startdate:'2019-10-10',salary:'300000',active:'a'},
        {  name: "Tarek", email: "far@gmail.com", startdate:'2020-10-10',salary:'40000',active:'a'},
        {  name: "Maksud", email: "dda@gmail.com", startdate:'2020-10-10',salary:'40000',active:'a'},
        {  name: "Tarek", email: "dfa@gmail.com", startdate:'2021-10-10',salary:'50000',active:'a'},
        {  name: "Hasan", email: "daaf@gmail.com", startdate:'2020-10-10',salary:'15000',active:'g'},
    ]},

    // autoLoad:true,


    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
