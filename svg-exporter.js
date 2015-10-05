#! /usr/bin/env node

var fs = require('fs');
var path = require('path');
var util = require('util');
var child_process = require('child_process');

var svgDir = process.argv[2] || './';
var dpi = process.argv[3] || '90';

process.stdin.setEncoding('utf8');

fs.readdir(svgDir, function (err, files) {
  var files = files;
  if (err) {
    console.log('svg-exporter: cannot accesss', svgDir);
  }
  else {
    files = files.filter(function (file) {
      return fs.statSync(path.join(svgDir, file)).isFile();
    }).filter(function (file) {
      return path.extname(file) == '.svg';
    });
    console.log('SVG files to export:\n', files, '\n\nProceed? [y/n]');

    process.stdin.on('data', function (text) {
      if (text === 'y\n') {
        process.stdin.pause();
        files.forEach(function (file) {
          var exportFile = path.basename(file, '.svg')+'.png';
          child_process.exec('inkscape -z -f '+file+' -e '+exportFile+
            ' -d '+dpi, {cwd: svgDir});
        });
      }
      else if (text === 'n\n') {
        process.exit();
      }
    });
  }
});
