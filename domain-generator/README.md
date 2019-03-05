This is a very simple module that will enable you generate as many domains as you want without having to type all of the different domains.

USAGE

    var dg = require('domain-genetator');
    
    var tld, domainlist, domain;
    tld = [ '.com','...write other tld here...'];
    domain = 'example.com';

    //now generate the domains

    domainlist = dg.dg(domain, tld, function(err){
        if (err) throw err;
    }

    console.log(domainlist);

Enjoy...!!!