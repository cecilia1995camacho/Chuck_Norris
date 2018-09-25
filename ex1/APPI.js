
url = "https://api.icndb.com/jokes/random"+"/"+numberFromInput
xhr.open("GET", `${url}`, true)
    xhr.onload = function()
    {
    if (this.status === 200) 
    {
        let listCustomer
        const customer = JSON.parse(this.responseText);
        console.log(customer);
    }
    };