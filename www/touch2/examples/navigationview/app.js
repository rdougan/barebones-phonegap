Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'AddressBook',

    models: ['Contact'],
    stores: ['Contacts'],
    views: ['Main'],
    controllers: ['Application'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'AddressBook.view.Main'
        });
    }
});
