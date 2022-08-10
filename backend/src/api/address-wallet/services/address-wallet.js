'use strict';

/**
 * address-wallet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::address-wallet.address-wallet');
