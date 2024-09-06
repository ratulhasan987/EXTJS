Ext.define('Admin.view.history.AllSearchResultGrid', {
extend: 'Ext.grid.Panel',
xtype: 'allSearchResult-grid',

requires: [
    'Ext.grid.column.Action'
],

title: 'Search Result',
// width: 750,
width: 0.78 * (window.innerWidth),
// height: 350,
height: 0.90 * (window.innerHeight),

store:'S_Result',
stateful: true,
bodyPadding:20,
// collapsible: true,
multiSelect: true,
// storeId: 'S_Result',
headerBorders: false,

viewConfig: {
    enableTextSelection: true
},

columns: [
    

{
    text: 'NID',
    flex: 1,
    // formatter: 'usMoney',
    dataIndex: 'nid'
},

{
    text: 'DOB',
    flex: 1,
    // renderer: 'renderPercent',
    dataIndex: 'dob'
}, 

{
    text: 'Name',
    flex: 1,
    // formatter: 'date("m/d/Y")',
    dataIndex: 'name'
},

{
    text: 'Father Name',
    flex: 1,
    // formatter: 'date("m/d/Y")',
    dataIndex: 'fatherName'
}, 

{
    text: 'Mother Name',
    flex: 1,
    dataIndex: 'motherName'
}, 

{
    text: 'Search Date',
    flex: 1,
    formatter: 'date("m/d/Y")',
    dataIndex: 'dob'
}, 
{
    text: 'Search From',
    flex: 1,
    formatter: 'date("m/d/Y")',
    dataIndex: 'dob'
}, 
{
    text: 'Search User',
    flex: 1,
    // formatter: 'date("m/d/Y")',
    dataIndex: 'nid'
},
{
    text: 'Cache Expire Date',
    flex: 1,
    formatter: 'date("m/d/Y")',
    dataIndex: 'dob'
}, 


],

// signTpl: '<span style="' +
//     'color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}"' +
//     '>{text}</span>'
});