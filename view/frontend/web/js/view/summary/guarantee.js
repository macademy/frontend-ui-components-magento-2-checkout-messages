define(['uiComponent'], function(Component) {
    'use strict';

    return Component.extend({
        showMessage: function() {
            return this.subtotal > 100;
        }
    });
});
