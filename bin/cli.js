var jsmin = require('../lib/jsmin').jsmin,
    path = require('path'),
    fs = require('fs'),
    file,
    inputFile,
    output;

file = process.argv[2];

if (path.existsSync(path.join(process.cwd(), file))) {
    inputFile = fs.readFileSync(path.join(process.cwd(), file));
} else if (path.existsSync(file)) {
    inputFile = fs.readFileSync(file);
} else {
    console.log("JSmin could not find the file.");
}

output = jsmin(inputFile.toString());

console.log(output);

