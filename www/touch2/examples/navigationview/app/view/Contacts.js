Ext.define('AddressBook.view.Contacts', {
    extend: 'Ext.List',
    xtype: 'contacts',

    config: {
        title: 'Touch Team',
        cls: 'x-contacts',

        store: 'Contacts',
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
            '{firstName} {lastName}',
            '<span>{title}</span>'
        ].join('')
    }
});
