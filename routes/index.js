var express = require('express');
var router = express.Router();
var db = require( '../db.js' );
var namecheap = require( '../Namecheapjs' ); 
var dg = require( '../domain-generator' );

var ip, key, user, site, domainn, tld;

ip = '192.250.236.94' || '105.112.45.234' || '105.112.29.82' ;
domainn = 'fugu.com';
tld = ['.com', '.co', '.com.uk', '.co.uk']
key = 'd6b25ae2e2fb466d9b27c209f691400d';
user = 'Miracle0403';
site = 'https://api.sandbox.namecheap.com/xml.response?'
var Namecheap = new namecheap(key, user, ip, site)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CHEAP WEB SCRIPTS'});
});


/* Get cart. */
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'MY CART'});
});


/* GET domains. */
router.get('/domains', function(req, res, next) {
  res.render('domains', { title: 'DOMAIN SEARCH RESULTS'});
});

//affiliate link
router.get('/ref=:affiliate', function(req, res, next) {
	var affiliate = req.params.affiliate;
	db.query( 'SELECT affiliate FROM affiliates WHERE code = ?', [affiliate], function( err, results, fields){
		if( err ) throw err;
		var code = results[0].affiliate;
		res.render('index', { title: 'CHEAP WEB SCRIPTS', code:code});
	});
});

//coming soon
router.get('/comingsoon', function(req, res, next) {
  res.render('coming', { title: 'COMING SOON' });
});

//vps
router.get('/vpshosting', function(req, res, next) {
  res.redirect('/comingsoon');
});

//shared
router.get('/sharedhosting', function(req, res, next) {
  res.render('sharedhosting', { title: 'SHARED HOSTING' });
});

//ssl
router.get('/ssl', function(req, res, next) {
  res.render('ssl', { title: 'SSL CERTIFICATES' });
});

//demo
router.get('/demo', function(req, res, next) {
  res.render('demo', { title: 'OUR DEMO' });
});

/* GET documentation */
router.get('/documentation', function(req, res, next) {
	db.query( 'SELECT category FROM documentation', function( err, results, fields ){
		if( err ) throw err;
		var category = results;
	  	res.render('documentation', { title: 'DOCUMENTATION', category: category });
	});
});


//domain search
router.post('/domainsearch', function(req, res, next) {
	var domainn = req.body.domainsearch;
	var tld  = ['.com', '.me', '.co', '.co.uk', '.org', '.net', '.tech', '.online', '.xyz'];
	var domain = dg.dg( domainn, tld, function(err){
		if( err ) throw err;
	});
	Namecheap.Domain.check(Namecheap.ip, Namecheap.link, domain, function( err, result){
		if( err ) throw err;
		console.log(result)
		res.render('domain', { title: 'DOMAIN SEARCH' });
	});
});

/* GET error 404. */
router.get('*', function(req, res, next) {
  res.status(404).render( '404', {title: 'PAGE NOT FOUND', text: 'Oooops, seems you got lost somehow... but i am here to catch you. Feel free to check out our quick links'});
});

module.exports = router;