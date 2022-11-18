define([], function() {
    'use strict';

    return function (Component) {
        return Component.extend({
            isItemsBlockExpanded: function() {
                // If you wish to execute parent method, be sure to call
                // this._super();
                return true;
            }
        });
    };
});
