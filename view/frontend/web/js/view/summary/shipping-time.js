define(['uiComponent'], function(Component) {
    'use strict';

    return Component.extend({
        defaults: {
            tracks: {
                countryId: true
            },
            imports: {
                countryId: 'checkoutProvider:shippingAddress.country_id'
            }
        },
        showMessage: function() {
            return this.countryId === 'US';
        }
    });
});
