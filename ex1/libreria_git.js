class GitHub {
    constructor (){
        this.client_id = "c007fa53";
        this.client_secret = "jqkbefqwkfbf";

        this.repos_count = 5
        this.repos_sort = "created: asc"
    }
   
    async getUser (user){
        let url=' https://api.github.com/users/$(user)?client_id=${this.client_id}
   
        const profileResponse = await fetch(url);
        const profile = await 
    }
}