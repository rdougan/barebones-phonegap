Ext.define('AddressBook.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            editButton: '#editButton',
            contacts: 'contacts',
            showContact: 'contact-show',
            editContact: 'contact-edit',
            saveButton: '#saveButton'
        },

        control: {
            main: {
                pop: 'onMainPop'
            },
            editButton: {
                tap: 'onContactEdit'
            },
            contacts: {
                itemtap: 'onContactSelect'
            },
            saveButton: {
                tap: 'onContactSave'
            },
            editContact: {
                change: 'onContactChange'
            }
        }
    },

    onMainPop: function(view, item) {
        var editButton = this.getEditButton();

        if (item.xtype == "contact-show") {
            this.getContacts().deselectAll();

            this.hideEditButton();
        } else if (item.xtype == "contact-edit") {
            this.showEditButton();
        }
    },

    onContactSelect: function(list, index, node, record) {
        var showContact = this.getShowContact(),
            editButton = this.getEditButton();

        // Bind the record onto the show contact view
        showContact.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(showContact);

        this.showEditButton();
    },

    onContactEdit: function() {
        var editContact = this.getEditContact();

        // Bind the record onto the edit contact view
        editContact.setRecord(this.getShowContact().getRecord());

        this.getMain().push(editContact);

        this.hideEditButton();
    },

    onContactChange: function() {
        this.showSaveButton();
    },

    onContactSave: function() {
        var record = this.getEditContact().saveRecord();

        this.getShowContact().updateRecord(record);

        this.getMain().pop();
    },

    showEditButton: function() {
        var editButton = this.getEditButton();

        this.hideSaveButton();

        //show the edit button and then fade it in
        editButton.show();
        Ext.Animator.run({
            element: editButton.element,
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        });
    },

    hideEditButton: function() {
        var editButton = this.getEditButton();

        //fade the edit button out then hdie it
        Ext.Animator.run({
            element: editButton.element,
            from: {
                opacity: 1
            },
            to: {
                opacity: 0
            },
            onEnd: function() {
                editButton.hide();
            }
        });
    },

    showSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (!saveButton.isHidden()) {
            return;
        }

        //show the edit button and then fade it in
        saveButton.show();
        Ext.Animator.run({
            element: saveButton.element,
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        });
    },

    hideSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (saveButton.isHidden()) {
            return;
        }

        //fade the edit button out then hdie it
        Ext.Animator.run({
            element: saveButton.element,
            from: {
                opacity: 1
            },
            to: {
                opacity: 0
            },
            onEnd: function() {
                saveButton.hide();
            }
        });
    }
});
