define(['uiComponent'], function(Component) {
    'use strict';

    return Component.extend({
        defaults: {
            tracks: {
                countryId: true
            },
            listens: {
                'checkoutProvider:shippingAddress.country_id': 'countryId',
                'checkoutProvider:shippingAddress.region_id': 'handleRegionChange'
            }
        },
        showMessage: function() {
            return this.countryId === 'US';
        },
        handleRegionChange: function(newRegionId) {
            console.log('New Region ID: ' + newRegionId);
        }
    });
});
