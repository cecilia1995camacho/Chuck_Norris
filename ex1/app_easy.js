const http = EasyHTTP();
//get users
url = "https:///jsonplaceholder.typicode.com/users"

const users = http.get(url)
.then(users => console.log(users))
.catch(err => console.log(err));


