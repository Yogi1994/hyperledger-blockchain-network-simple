'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Track the trade of commodity from one trader to another
 * @param {com.wicklers.network.Trade} trade - the trade to be processed
 * @transaction
 */
function tradeCommodity(trade) {
    trade.commodity.owner = trade.newOwner;
    return getAssetRegistry('com.wicklers.network.Commodity')
        .then(function(assetRegistry) {
            return assetRegistry.update(trade.commodity);
        });
}