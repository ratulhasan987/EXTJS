Ext.define('Admin.store.S_Result', {
    extend: 'Ext.data.Store',
    alias: 'store.S_Result',

    storeId: 'S_Result',
    fields: [
        'nid', 'dob', "name",'fatherName','motherName',
    ],

    data: { items: [
        {nid: "1855245152455", dob: "05-01-2000", name: 'Ratul', fatherName:'Mukhlesur Rahman', motherName: 'Jean Luc',},
        {nid: "1855245152454", dob: "05-01-2000", name: 'Worf',     fatherName:'faesf', motherName: 'Worf',    },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Data',     fatherName:'faesf', motherName: 'Data',    },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
        {nid: "1855245152454", dob: "05-01-2000", name: 'Deanna',   fatherName:'faesf', motherName: 'Deanna',  },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }


});
