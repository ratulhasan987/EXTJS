Ext.define('DashBoard.view.main.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',


    frame: true,
    width: 400,
    bodyPadding: 20,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }, 
    
    header:{

        style:{
            background:"rgba(0, 0, 0, 0)",
            border: 'none'
        }
    },
    items: [

        {
            html: '<span style="color:#d10abd; font-size:16px;  bodyStyle: text-align: left; line-height:14px;"><p>Checker Login</p></span>',
            width:300,
        },


        {
        xtype: 'textfield',
        allowBlank: false,
        Label: 'User ID',
        name: 'user',
        width:300,
        emptyText: 'user name',
        msgTarget: 'under'
    },
    
    {
        xtype: 'textfield',
        allowBlank: false,
        width:300,
        name: 'pass',
        emptyText: 'password',
        inputType: 'password',
    }, 

    {
        html: '<span style="color:black; font-size:18px;  bodyStyle: text-align: left; line-height:14px;"><p>P j X X D</p></span>',
        width:300,
       
    },
  
],
    buttons: [
        { text: 'Login' },
        { text: 'Clear' }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 300,
       
    }

});