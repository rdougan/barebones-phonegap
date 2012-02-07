Ext.require(['Ext.Panel', 'Ext.Video']);

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        Ext.Viewport.add({
            xtype: 'video',
            id: 'video',
            url: 'space.mp4',
            loop: true,
            posterUrl: 'Screenshot.png'
        });
    }
});