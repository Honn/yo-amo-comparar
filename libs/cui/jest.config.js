module.exports = {
  name: 'cui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
