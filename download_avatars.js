const request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "rizelmine17";
var GITHUB_TOKEN = "4b4f3706087ba2d1f907b57dba3662257548f948";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN +
                   '@api.github.com/repos/' + repoOwner + '/' +
                    repoName + '/contributors';

console.log(requestURL)
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});