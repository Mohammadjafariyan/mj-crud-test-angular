const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'customers',

  exposes: {
    './Component': './projects/customers/src/app/app.component.ts',
    './CustomerCrudModule': './projects/customers/src/app/customer-crud/customer-crud.module.ts',

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
