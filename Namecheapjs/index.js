var querystring, convert, util, request, functions, callback;

querystring = require( 'querystring' );
util = require( 'util' );
request = require( 'request' );
convert = require( 'xml-js');
functions = require( './functions.js' );
callback = function( err){
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
			check: function(ip, link, DomainList, callback ){
				//get the domain variable.
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
					var result1 = convert.xml2json(body, {compact: true, spaces: 4});
					//convert to js object
					var result = JSON.parse(result1)
					return result;
				});
			}
		}
	}
}


module.exports = namecheap;