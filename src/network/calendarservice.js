

var endPoint = 'http://127.0.0.1:3000/';
var serviceName = 'all';

var getDate = function(query) {
    
    if(query != null){
             
    } else {
         fetch(endPoint+serviceName)
        .then((response) => response.json())
        .then((responseJson) => {
         console.log('data from server is ' + responseJson); 
        });
    }
  
}

export {getDate};