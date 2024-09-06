Ext.define('Admin.view.dashboard.AllHistoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.all-history',
    requires: [
        'Ext.util.TaskRunner',
    ],

//custom control start...................................................

onHistorySearchResultGridItmDblClk:function (view, rec, item, index, e) {
    // this.reversalApi(view, rec, item, index, e);

    Ext.create('Admin.view.dashboard.HistoryDetailsWindow', {
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

onAllHistorySearchResult: function() {

    var myHeaders = new Headers();
    
    var Search_To = Ext.getCmp('Search_To').value;
    var DOB_AllSearch = Ext.getCmp('DOB_AllSearch').value;
    // dob = Ext.Date.format(new Date(dob), 'd/m/Y');
    DOB_AllSearch = Ext.Date.format(DOB_AllSearch, 'd/m/Y');
    var FromDate_Search = Ext.getCmp('FromDate_Search').value;
    var ToDate_Search = Ext.getCmp('ToDate_Search').value;
    var Condition_Search = Ext.getCmp('Condition_Search').value;
    var NID_AllSearch = Ext.getCmp('NID_AllSearch').value;
    var Name_AllSearch = Ext.getCmp('Name_AllSearch').value;
    var Search_By = Ext.getCmp('Search_By').value;
    var HM_Status = Ext.getCmp('HM_Status').value;




    myHeaders.append("Content-Type", "application/json");
 
    var raw = JSON.stringify({
      "nidNo": NID_AllSearch == "" ? null : NID_AllSearch,
    //   "dob": Ext.Date.format(new Date(dob), 'd/m/Y') ? Ext.Date.format(new Date(dob), 'd/m/Y'): null,
      "dob": DOB_AllSearch == "" ? null: DOB_AllSearch,
      "userId": 10001,
      "source": "POSTMAN",
      "name": Name_AllSearch == "" ? null : Name_AllSearch,
    //   "forceUpdate":forceUpdate == "" ? null : forceUpdate,

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
        var store = Ext.getStore('AS_Store');
        store.removeAll();
        store.add(result["personList"]);
        // console.table(result["personList"]);
        // console.log(result)
    })
      
      .catch(error => console.log('error', error));
  },


onAllSearchData:function () {
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
            // var storeData = Ext.getCmp('SearchResult');
            // // console.table(result);
            // var store = storeData.getStore();
            var store = Ext.getStore('AS_Store');
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