var db = require( './db.js' );
/*
function tables( db ){
db.query( 'CREATE TABLE documentation ( 
	id INT( 11 ) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	category VARCHAR( 255 ) NOT NULL,
	talk text NOT NULL,
	lft INT ( 11 ) NOT NULL,
	rgt INT( 11 ) NOT NULL,
	vote INT ( 11 ) NULL,
	DATE_ASKED DATETIME DEFAULT CURRENT_TIMESTAMP
 )', function ( err, results, fields ){
 	if ( err ) throw err;
 	console.log( "documentation created" );
 });
 }*/