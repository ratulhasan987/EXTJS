Ext.define('Admin.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree'
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    //html: '<div class="main-logo"><img src="resources/images/company-logo.png">NID SERVICE</div>',
                    html: '<div class="main-logo"><img src="resources/images/CBBL-icon.png" height="40px" width="40px"><b>NID SERVICE</b></div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls:'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                '->',
                // {
                //     xtype: 'segmentedbutton',
                //     margin: '0 16 0 0',

                //     platformConfig: {
                //         ie9m: {
                //             hidden: true
                //         }
                //     },

                //     items: [{
                //         iconCls: 'x-fa fa-desktop',
                //         pressed: true
                //     }, {
                //         iconCls: 'x-fa fa-tablet',
                //         handler: 'onSwitchToModern',
                //         tooltip: 'Switch to modern toolkit'
                //     }]
                // },
                // {
                //     iconCls:'x-fa fa-search',
                //     ui: 'header',
                //     href: '#searchresults',
                //     hrefTarget: '_self',
                //     tooltip: 'See latest search'
                // },


                // {
                //     iconCls:'x-fa fa-history',
                //     ui: 'header',
                //     href: '#email',
                //     hrefTarget: '_self',
                //     tooltip: 'Check your history'
                // },



                // {
                //     iconCls:'x-fa fa-question',
                //     ui: 'header',
                //     href: '#faq',
                //     hrefTarget: '_self',
                //     tooltip: 'Help / FAQ\'s'
                // },


                // {
                //     iconCls:'x-fa fa-th-large',
                //     ui: 'header',
                //     href: '#profile',
                //     hrefTarget: '_self',
                //     tooltip: 'See your profile'
                // },


                // {
                //     xtype: 'tbtext',
                //     text: 'Goff Smith',
                //     cls: 'top-user-name'
                // },
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt:'current user image',
                    // src: 'resources/images/user-profile/Ratul.jpg'
                    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0oTfFuLOQ2hsayprCY6nDFHVrNumFRfUr3ELEvIf_g&s',
                },
                
                {
                    xtype: 'tbtext',
                    text: 'Test User',
                    cls: 'top-user-name',
                    tooltip: 'See your profile',
                    listeners: {
                        afterrender: 'onTbTextRender'
                    }
                },

                {
                    xtype: 'hiddenfield',
                    id: 'idLoginUser',
                    reference: 'refLoginUser',
                    listeners: {
                        afterrender: 'setLoginUserId'
                    }
                },

                {   
                    xtype: 'button',
                    margin: '0 0 0 8',
                    // text:'Logout',
                    text: '<div style="color:white;">Logout</div>',
                    ui: 'header',
                    iconCls:'x-fa fa-sign-out',
                   // handler: 'onRouteChange',
                   style: {
                    'border-radius': '7px',
                    'border': 'none',
                    'background': '#207EEB !important'
                    // 'background-image': 'linear-gradient(to right,  #DA1515, #15CF1E);',
                },
                    listeners: {
                        click: 'logoutSession'
                    }
                },

            ]

        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});
