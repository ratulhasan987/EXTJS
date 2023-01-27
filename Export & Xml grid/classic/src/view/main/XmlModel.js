// Ext.define('Trail.view.main.XmlModel', {
//     extend : 'Ext.data.reader.Xml',
//     alias : 'reader.myreader',
//     getResponseData: function(response) {
//         // Here is the xmlDocument you are going to change
//         var xmlDoc = response.responseXML;

//         // I change the first foo value to 11.
//         var fooValues=xmlDoc.getElementsByTagName('foo');
//         fooValues[0].innerHTML=11;

//         return this.callParent([response]);
//     }
// });