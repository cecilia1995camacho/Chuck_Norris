class EasyHTTP{
////////// MAKE GET HTTP REQUEST
async get(url){
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

async post(url, postData){

requestPackage = {
    method: "POST",
    headers:{'Content-type', 'application/json'};
    body: JSON.stringify(postData)
}
const resp = await fetch(url,requestPackage)
const data = await resp.json()
return data

}




    ///////////// CLASS EASYHTTP
}

