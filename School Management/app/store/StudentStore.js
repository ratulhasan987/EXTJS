Ext.define('School.store.StudentStore', {
    extend: 'Ext.data.Store',

    alias: 'store.StudentStore',

  
       
    data: { items: [
        {  name: "Manzur", roll: "12445", regi:'444555',birthDate:'2000-10-10',department:'EEE',institute:'dfd',gender:'Male'},
        {  name: "Ratul", roll: "125", regi:'544',birthDate:'2000-10-10',department:'CA',institute:'DPI',gender:'Male'},  
         {  name: "Rafi", roll: "126", regi:'452',birthDate:'2000-10-10',department:'EEE',institute:'dfd',gender:'Male'},
         {  name: "Hasan", roll: "127", regi:'578',birthDate:'2000-10-10',department:'CSE',institute:'CPI',gender:'Male'},
         {  name: "Imo", roll: "129", regi:'787',birthDate:'2000-10-10',department:'ME',institute:'dfd',gender:'Female'},
         {  name: "Al-Amin", roll: "130", regi:'8775',birthDate:'2000-10-10',department:'CA',institute:'MPI',gender:'Male'},  
          {  name: "Fima", roll: "140", regi:'542',birthDate:'2000-10-10',department:'AS',institute:'MPI',gender:'Female'},
          {  name: "Hasina", roll: "140", regi:'2452',birthDate:'2000-10-10',department:'CA',institute:'DPI',gender:'Others'},
     

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
