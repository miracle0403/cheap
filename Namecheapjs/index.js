var querystring, convert, util, request, functions, callback;

querystring = require( 'querystring' );
util = require( 'util' );
request = require( 'request' );
convert = require( 'xml-js');
functions = require( './functions.js' );
callback = function( err, result){
	if( err )throw err;
}
//configurations set now.
var namecheap = function (key, user, ip, site){
	this.key = key;
	this.user = username = user;
	this.ip = ip;
	this.site = site;
	this.link = site + 'ApiUser='+user+'&ApiKey='+ key + '&UserName=' + user + '&';
	this.defaults = {};
}
				

namecheap.prototype = {
	get Domain(){
		var instance = this;
		return {
			check: function(ip, link, DomainList, callback){
				console.log(callback)
				this.ip = ip;
				this.link = link;
				this.DomainList = DomainList;
				var Domain = DomainList.toString();
				var command = 'Command=namecheap.domains.check&ClientIp=' + ip +  '&DomainList=';
				var url = link + command + Domain;
				//get it with request
				request.get( url, function(error, response, body){
					if(error) throw error;
					//now change back to json since its xml format.
					result1 = convert.xml2json(body, {compact: true, spaces: 4});
					result = JSON.parse(result1);
					//console.log(result.ApiResponse) 
					return result;
				});
			}
		}
	}
}


module.exports = namecheap;