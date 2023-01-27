Ext.define('DashBoard.view.complaint.Complaint', {
	extend: 'Ext.panel.Panel',
	// xtype: 'complaint',


    alias: 'widget.column-view-complaint',
	controller: 'complaint',

	requires: [
		'Ext.grid.*',
		'Ext.toolbar.Paging',
		'Ext.layout.container.Border',
		'Ext.layout.container.Column'
	],

	// layout: 'border',
    // width: 0.80 * (window.innerWidth),
    // height: 0.90 * (window.innerHeight),
    cls: Ext.baseCSSPrefix + 'shadow',

    // bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },


	width: '100%',
    height: 'auto',
    xtype: 'column-view-complaint',
    layout: {
        type:'column',
        align:'center',
        pack:'center'
    },   
    bodyPadding: '0px 5px 5px 5px',

    defaults: {
        padding: '0px 5px 0px 5px',
    },
    
    items: [
  
	{
        columnWidth: 0.15,
        title: 'A/C | Card | Mobile No.',
        
        items:[
			{
				xtype: 'textfield',
				emptyText: 'ex: 1020102032',
				width: '100%',
				minChars: 0,
				typeAhead: true,
				// height:25,
				cls: 'rounded'
				
				},
		]
    },
  
    {
        columnWidth: 0.15,
        title: 'From Date',
        cls: 'rounded',
		// height:25,
        items:[{
            xtype: 'datefield',
            width: '100%',
            emptyText: '04 Sep 2022',
        }]
        
    },
    {
        columnWidth: 0.15,
        title: 'To date',
        cls: 'rounded',
		// height:25,
        items:[{
            xtype: 'datefield',
            width: '100%',
            emptyText: '10 Sep 2022',
            style: {
                'border-radius':'4px',
            },
        }]
    },
    {
        columnWidth: 0.1,
        title: '<br>',
        items:[{
        xtype: 'button',
        text: '🔎︎ Search',
        scale: 'medium',
        // height: 25,
        width:'100%',
        style: {
            'border':'none',
            'border-radius':'4px',
            'padding':'0px 0px 0px 0px'
        },
        }]
    },
    {
        columnWidth: 0.1,
        title: '<br>',
        items:[{
        xtype: 'button',
        text: '⌫ Clear ',
        scale: 'medium',
        // height: 25,
        width:'100%',
        style: {
            "background-color":"red",
            'border':'none',
            'border-radius':'4px',
            'padding':'0px 0px 0px 0px' 
        },
        
        
        }]
    },
	{
        columnWidth: 0.35,
        title: '<br>',
        items:[{
        xtype: 'button',
        text: '🗨 Create a new complaint ',
        scale: 'medium',
        // height: 25,
        width:'100%',
        style: {
            "background-color":"red",
            'border':'none',
            'border-radius':'4px',
            'padding':'0px 0px 0px 0px' 
        },
        
        
        }]
    },



  
    {
        columnWidth: 1,
        items: [
            {
                
                layout: {
                   type: 'hbox',
                     pack: 'start',
                     align: 'stretch'
                  },
  
             bodyPadding: 0,
            frame: true,
            style: {
                'border-radius':'4px',
				'border':'none',
            },
             items: [
            {
              xtype: 'button',
              text: 'Complaints',
              scale: 'medium',
              // disabled:true,
              height: 35,
              flex:1,
              style: {
                  'padding':'0px 0px 0px 0px'
              },
          },
          {
              xtype: 'textfield',
              emptyText: 'Filter Data',
              flex: 3,
              minChars: 0,
              typeAhead: true,
              cls: 'rounded'
          },
          {
            xtype: 'button',
            text: 'Export To Excel',
            scale: 'medium',
            // disabled:true,
            height: 35,
            flex:2,
            style: {
                "background-color":"blue",
                'padding':'0px 0px 0px 0px'
            },
        },
      ]
              },
            {
                // xtype: 'form-grid-cbs',
            }
        ]
    },

	{
		columnWidth:1,
			items:[

				{
					xtype: 'npsb-grid-complaint',
				}
			]


		
		
	}

   

    ]

});
