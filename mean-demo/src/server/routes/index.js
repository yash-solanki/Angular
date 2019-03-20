/**
 * Main application routes
 */

'use strict';


module.exports = function(app) {

  // Insert routes below
  app.use('/users', require('../api/user'));
};
