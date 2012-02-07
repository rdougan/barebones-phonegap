Ext.require([
    'Ext.form.Panel',
    'Ext.form.FieldSet',
    'Ext.field.Text',
    'Ext.field.Search',
    'Ext.field.Select',
    'Ext.Button',
    'Ext.List',

    'Ext.data.Store'
]);

Ext.setup({

    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,

    onReady: function() {

        Ext.create('Ext.Container', {

            fullscreen: true,
            padding: 20,
            html: 'Content',

            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'field',
                            xtype: 'textfield',
                            name : 'name',
                            placeHolder: 'Text',
                            autoCapitalize: false
                        },
                        {
                            xtype: 'searchfield',
                            name : 'search',
                            placeHolder: 'Search'
                        },
                        {
                            xtype: 'selectfield',
                            name: 'options',
                            options: [
                                { text: 'Option 1 should be very very very long',  value: '1' },
                                { text: 'Option 2', value: '2' }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});