// index.js
const path = require('path')
const fs = require('fs')

const configFilePath = path.resolve(__dirname, './.github/workflows/pr-title-checker-config.json');
const testsFilePath = path.resolve(__dirname, './tests.json');

console.log('\x1b[33mCONFIG:\x1b[0m:  ' + configFilePath);
console.log('\x1b[33mTESTS:\x1b[0m:  ' + testsFilePath);

let config = require(configFilePath);
let tests = require(testsFilePath);

// console.log(config);
// console.log(tests);

let { CHECKS, LABEL, MESSAGES } = config;

if (CHECKS.regexp) {
    let re = new RegExp(CHECKS.regexp, CHECKS.regexpFlags || "");
    tests.forEach(test => {
        let outCome = re.test(test.testCase);
        if (outCome) {
            console.log('\x1b[92mPASS:\x1b[0m:  '+ test.testCase + ' ' + MESSAGES.success);
        } else {
            console.log('\x1b[91mFAIL:\x1b[0m:  '+ test.testCase + ' ' + MESSAGES.notice);
        }
    });
}