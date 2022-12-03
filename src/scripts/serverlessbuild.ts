const yaml = require('js-yaml');
const fs = require('fs')
const serverlessFileData = yaml.load(fs.readFileSync('serverless.yml', 'utf8'));
const serverlessFunctions = serverlessFileData.functions

console.log(JSON.stringify(serverlessFunctions));
