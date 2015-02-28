Package.describe({
  name: 'slava:ddp-analyzer',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('slava:ddp-analyzer.js');
  api.export('DDPAnalyzer');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('slava:ddp-analyzer');
  api.addFiles('slava:ddp-analyzer-tests.js');
});
