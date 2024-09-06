Ext.define('Admin.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',
    requires: [
        'Ext.util.TaskRunner',
    ],

//custom control start...................................................
onSearchResultGridItmDblClk: function (view, rec, item, index, e) {

    // this.reversalApi(view, rec, item, index, e);
    
    Ext.create('Admin.view.dashboard.DetailsWindow', {
        title: '<span style="color:white; background-color:#258ACB:">NID Details</span>',
        titleAlign: 'center',
        closable: false,
        scrollable: false,
        closable:true,
        focusTab: 0,
    }).show();


    console.table(rec);
    Ext.getCmp('fatherName').setValue(rec.data.fatherName);
    Ext.getCmp('motherName').setValue(rec.data.motherName);
    Ext.getCmp('spouseName').setValue(rec.data.spouseName);
    Ext.getCmp('dateOfBirth').setValue(rec.data.birthDate);
    Ext.getCmp('occupation').setValue(rec.data.occupation);
    Ext.getCmp('presentDivision').setValue(rec.data.addressList.division);
    Ext.getCmp('nidNo').setValue(rec.data.nationalId);
    Ext.getCmp('nameOfBangla').setValue(rec.data.nameBang);
    Ext.getCmp('nameOfEnglish').setValue(rec.data.nameEng);
    Ext.getCmp('bloodGroup').setValue(rec.data.bloodGroup);
    Ext.getCmp('pin').setValue(rec.data.pin);

    Ext.getCmp('presentDistrict').setValue(rec.data.addressList[0].district);
    Ext.getCmp('presentDivision').setValue(rec.data.addressList[0].division);
    Ext.getCmp('presentRmo').setValue(rec.data.addressList[0].rmo);
    Ext.getCmp('presentMunicipality').setValue(rec.data.addressList[0].cityCorporationMunicipality);
    Ext.getCmp('presentUpozila').setValue(rec.data.addressList[0].upozila);
    Ext.getCmp('presentUnion').setValue(rec.data.addressList[0].unionWard);
    Ext.getCmp('presentMoholla').setValue(rec.data.addressList[0].mouzaMoholla);
    Ext.getCmp('presentAddMoholla').setValue(rec.data.addressList[0].additionalMouzaMoholla);
    Ext.getCmp('presentWardUnionPorishod').setValue(rec.data.addressList[0].wardForUnionPorishod);
    Ext.getCmp('presentVillage').setValue(rec.data.addressList[0].villageRoad);
    Ext.getCmp('presentAddVillage').setValue(rec.data.addressList[0].additionalVillageRoad);
    Ext.getCmp('presentHome').setValue(rec.data.addressList[0].homeHoldingNo);
    Ext.getCmp('presentPostOffice').setValue(rec.data.addressList[0].postOffice);
    Ext.getCmp('presentPostalCode').setValue(rec.data.addressList[0].postalCode);
    Ext.getCmp('presentRegion').setValue(rec.data.addressList[0].region);

    Ext.getCmp('permanentDivision').setValue(rec.data.addressList[1].division);
    Ext.getCmp('permanentDistrict').setValue(rec.data.addressList[1].district);
    Ext.getCmp('permanentRmo').setValue(rec.data.addressList[1].rmo);
    Ext.getCmp('permanentMunicipality').setValue(rec.data.addressList[1].cityCorporationMunicipality);
    Ext.getCmp('permanentUpozila').setValue(rec.data.addressList[1].upozila);
    Ext.getCmp('permanentUnion').setValue(rec.data.addressList[1].unionWard);
    Ext.getCmp('permanentMoholla').setValue(rec.data.addressList[1].mouzaMoholla);
    Ext.getCmp('permanentAddMoholla').setValue(rec.data.addressList[1].additionalMouzaMoholla);
    Ext.getCmp('permanentWardUnionPorishod').setValue(rec.data.addressList[1].wardForUnionPorishod);
    Ext.getCmp('permanentVillage').setValue(rec.data.addressList[1].villageRoad);
    Ext.getCmp('permanentAddVillage').setValue(rec.data.addressList[1].additionalVillageRoad);
    Ext.getCmp('permanentHome').setValue(rec.data.addressList[1].homeHoldingNo);
    Ext.getCmp('permanentPostOffice').setValue(rec.data.addressList[1].postOffice);
    Ext.getCmp('permanentPostalCode').setValue(rec.data.addressList[1].postalCode);
    Ext.getCmp('permanentRegion').setValue(rec.data.addressList[1].region);

    Ext.getCmp('photo').setSrc(rec.data.photo);
    // console.log("---------");
    // console.log(rec.data.photo);
    // console.log("---------");

    // Ext.getCmp('photo').update('<img src="' + rec.data.photo + '">');

},

onClickSearchReset: function () {
    var me = this;
    Ext.getCmp('NID_Search').reset();
    Ext.getCmp('DOB_Search').reset();
    Ext.getCmp('Name_Search').reset();
    Ext.getCmp('Forcefully_Search').reset();
    // this.lookupReference('NID_Search').reset();
    // this.lookupReference('DOB_Search').reset();
    // this.lookupReference('Name_Search').reset();
    // this.lookupReference('Forcefully_Search').reset();

    me.onSearchData();	
    // Clear grid store data
    var store = Ext.getStore('SRStore');
    store.removeAll();
},


onSearchResult: function() {
    var myHeaders = new Headers();
    
    var nidNo = Ext.getCmp('NID_Search').value;
    var dob = Ext.getCmp('DOB_Search').value;
    // dob = Ext.Date.format(new Date(dob), 'd/m/Y');
    dob = Ext.Date.format(dob, 'd/m/Y');
    var name = Ext.getCmp('Name_Search').value;
    var forceUpdate=Ext.getCmp('Forcefully_Search').value;

    // console.log(nidNo);
    // console.log(dob);
    // console.log(name);
    // console.log(forceUpdate);

    myHeaders.append("Content-Type", "application/json");
 
    var raw = JSON.stringify({
      "nidNo": nidNo == "" ? null : nidNo,
    //   "dob": Ext.Date.format(new Date(dob), 'd/m/Y') ? Ext.Date.format(new Date(dob), 'd/m/Y'): null,
      "dob": dob == "" ? null: dob,
      "userId": 10001,
      "source": "POSTMAN",
      "name": name == "" ? null : name,
      "forceUpdate":forceUpdate == "" ? null : forceUpdate,

    });
    
    console.table(raw);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://10.33.255.13:8080/nid/api/v1/NID/details", requestOptions)
      .then(response => response.json())
      .then(result => {
        // var storeData = Ext.getCmp('SearchResult');
        // console.table(result);
        // var store = storeData.getStore();
        var store = Ext.getStore('SRStore');
        store.removeAll();
        store.add(result["personList"]);
        // console.table(result["personList"]);
        // console.log(result)
    })
      
      .catch(error => console.log('error', error));
  },


onSearchData:function () {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nidNo": "42108757248",
        "dob": "08/12/2000",
        "forceUpdate": false,
        "userId": 10001,
        "source": "POSTMAN"
    });

    var requestOptions = {
        method: 'GET',
        // headers: myHeaders,
        // body: raw,
        // redirect: 'follow'
    };

    fetch("http://10.33.255.13:8080/nid/api/v1/NID/all-nid", requestOptions)
        .then(response => response.json())
        .then(result => {
            var storeData = Ext.getCmp('SearchResult');
            // console.table(result);
            var store = storeData.getStore();
            // store.removeAll();
            store.add(result);
            // console.table(result);
        })
        .catch(error => console.log('error', error));
},


// --------------------------------------------------------------------------------------

   
    
   

// --------------------------------------------------------------------------------------


//Custom control end......................................................

    onRefreshToggle: function(tool, e, owner) {
        var store, runner;

        if (tool.toggleValue){
            this.clearChartUpdates();
        } else {
            store = this.getStore('networkData');
            if (store.getCount()) {
                runner = this.chartTaskRunner;
                if (!runner) {
                    this.chartTaskRunner = runner = new Ext.util.TaskRunner();
                }
                runner.start({
                    run : function () {
                        // Move the first record to the end
                        var rec = store.first();
                        store.remove(rec);
                        store.add(rec);
                    },
                    interval : 200
                });
            }
        }

        // change the toggle value
        tool.toggleValue = !tool.toggleValue;
    },

    clearChartUpdates : function() {
        this.chartTaskRunner = Ext.destroy(this.chartTaskRunner);
    },
    
    destroy: function () {
        this.clearChartUpdates();
        this.callParent();
    },
    
    onHideView: function () {
        this.clearChartUpdates();
    },
});
