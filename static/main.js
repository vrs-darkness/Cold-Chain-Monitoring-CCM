var user = {
    "name" : "test",
    "passwd" : "test"
};
function login()
{
    let un = document.getElementById('username').value;
    let psd = document.getElementById('password').value;
    if(un==user['name'] && psd==user['passwd'] )
    {
        console.log('Welcome')
    }
    else
    {
        console.log('issue')
    }
}