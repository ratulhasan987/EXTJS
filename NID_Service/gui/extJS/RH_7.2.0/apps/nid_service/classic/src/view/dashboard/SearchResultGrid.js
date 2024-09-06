
// Ext.define('Admin.view.dashboard.SearchResultGrid', {
//     extend: 'Ext.grid.Panel',
//     xtype: 'SearchResult-grid',
//     controller: 'dashboard',

//     requires: [
//         'Ext.grid.column.Action'
//     ],

//     title: 'Search Result',
//     width: 0.78 * (window.innerWidth),
//     height: 0.90 * (window.innerHeight),
//     stateful: true,
//     multiSelect: true,
//     headerBorders: false,
//     viewConfig: {
//         enableTextSelection: true
//     },

// store:'SRStore',
//     columns: [
//         {
//             text: 'NID',
//             flex: 1,
//             dataIndex: 'nationalId'
//         },
//         {
//             text: 'DOB',
//             flex: 1,
//             dataIndex: 'birthDate'
//         },
//         {
//             text: 'Name',
//             flex: 1,
//             dataIndex: 'nameEng'
//         },
//         {
//             text: 'Father Name',
//             flex: 1,
//             dataIndex: 'fatherName'
//         },
//         {
//             text: 'Mother Name',
//             flex: 1,
//             dataIndex: 'motherName'
//         }
//     ],


//     // listeners: {
//     //     render: function () {
//     //         var myHeaders = new Headers();
//     //         myHeaders.append("Content-Type", "application/json");

//     //         var raw = JSON.stringify({
//     //             "nidNo": "42108757248",
//     //             "dob": "08/12/2000",
//     //             "forceUpdate": false,
//     //             "userId": 10001,
//     //             "source": "POSTMAN"
//     //         });

//     //         var requestOptions = {
//     //             method: 'GET',
//     //             // headers: myHeaders,
//     //             // body: raw,
//     //             // redirect: 'follow'
//     //         };

//     //         fetch("http://10.33.255.13:8080/nid/api/v1/NID/all-nid", requestOptions)
//     //             .then(response => response.json())
//     //             .then(result => {
//     //                 console.log(result);
//     //                 var store = this.getStore();
//     //                 // store.removeAll();
//     //                 store.add(result);
//     //                 console.table(result);
//     //             })
//     //             .catch(error => console.log('error', error));
//     //     }
//     // },
    
// });





