Ext.define('Trail.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone','type'
    ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111",type:'er' },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" ,type:'er'},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333",type:'br' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444",type:'vr' },


    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
