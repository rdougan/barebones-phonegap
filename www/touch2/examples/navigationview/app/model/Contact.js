Ext.define('AddressBook.model.Contact', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'firstName',
            'lastName',
            'headshot',
            'title',
            'telephone',
            'email',
            'city',
            'state',
            'country',
            'latitude',
            'longitude',
            'employer'
        ]
    }
});
