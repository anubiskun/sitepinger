const sitepinger = require('../index')


// without `http://` or `https://` only domain or subdomain
var singlesite = 'www.google.com'
var multisite = 'www.google.com,github.com,herokuapp.com'

sitepinger(singlesite)
// [ 'www.google.com' ]
// SITE: www.google.com
// SENDING REQUEST TO: www.google.com
// REQUEST RESPONSE FROM www.google.com: Status Code 200
// Sleeping For: 1042.148 Seconds

sitepinger(multisite)
// [ 'www.google.com', 'www.github.com' ]
// SITE: www.google.com
// SENDING REQUEST TO: www.google.com
// SITE: www.github.com
// SENDING REQUEST TO: www.github.com
// REQUEST RESPONSE FROM www.github.com: Status Code 301
// Sleeping For: 859.451 Seconds
// REQUEST RESPONSE FROM www.google.com: Status Code 200
// Sleeping For: 1161.149 Seconds