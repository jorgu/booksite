'use strict'

include('data.js');
include('booksite.js');

function include(file) { 

    var script = document.createElement('script'); 
    script.src = file; 
    script.type = 'text/javascript'; 
    //script.defer = true; 
    //https://www.w3schools.com/tags/att_script_defer.asp

    document.getElementsByTagName('html').item(0).appendChild(script); 
    
}
