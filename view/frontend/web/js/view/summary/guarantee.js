define(['uiComponent'], function(Component) {
    'use strict';

    return Component.extend({
        initialize: function() {
            this._super();
            console.log('guarantee initialized');
        },
        showMessage: function() {
            return this.subtotal > 100;
        }
    });
});
