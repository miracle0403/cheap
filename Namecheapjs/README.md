This package is for namecheap API. It was developed because of irregularities in the namecheap npm packages.

This package is still under development. do not install now.

If you want to contribute, send me a mail lawrencemiracle72@gmail.com

USAGE
    var namecheap = require('Namecheapjs');
    
    //get your variables here.
    
    var ip, key, user, site;
    
    ip = //your ip;
    key = //your Namecheap Api key;
    user = //your Namecheap username;
    
    site = //the website. if its sandbox, use https://api.sandbox.namecheap.com/xml.response?;
    
    //remember to '' quote your ip.
    
    var Namecheap = new namecheap(key, user, ip, site);
    

To check domain availability, use this;

    var domain = [an array of domains];
    
    Namecheap.Domain.check(Namecheap.ip, Namecheap.link, domain, function(err){
    		if(err) throw err;
    });
    
    //end result
    //Checks if the domaim is Available
    //convert from xml to js object
    //delivers the result to you.
    
    
To buy a domain, do this