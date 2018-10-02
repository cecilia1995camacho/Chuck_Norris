const gitHub = new GitHub();
//////
const ui = new UI();

const search = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e=> {
    const userText = e.target.value;

    if(userText !=""){
    //// MAKE HTTP CALL
console.log(userText);

gitHub.getUser(userText).then(data => {
    if(data.profile.message === "not found"){
        ///show alert
    }
    // console.log(data);
    ui.showProfile(data.profile);

});
}else{
    ///////CLEAR USER PROFILE


}
});

class GitHub {
    constructor(){
        this.client_id =""
    }
}