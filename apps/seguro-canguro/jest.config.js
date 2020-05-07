module.exports = {
  name: 'seguro-canguro',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/seguro-canguro',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
