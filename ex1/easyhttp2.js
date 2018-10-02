class EasyHTTP {
    // make get request
    
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
        
    }
}


////request post request

post(url, postData) {
return new Promise((resolve, reject) => {
const requestPackage = {
    
 }
 fetch(url, requestPackage)
}
}
};

