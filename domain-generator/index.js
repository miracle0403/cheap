var callback = function (err){
	if(err) throw err;
}
exports.dg = function(domain, tld, callback){
	this.domain = domain;
	this.tld = tld;
	var dor = domain.split( '.' );
	var name = dor[0];
	var str = tld.toString( );
	var tsr = str.split( ',' ).join( ','+name );
	var spi = tsr.split( ',' );
	var fi = name + spi[0];
	var po = spi.shift( );
	var doma = spi.unshift( fi );
	return spi
}