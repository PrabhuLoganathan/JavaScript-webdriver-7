const tests = require('./lib/tests');
// Load dotenv config.
require('dotenv').config();

const opts = { baseUrl: process.env.BASE_URL };
tests(opts);
