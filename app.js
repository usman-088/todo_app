
var db = firebase.database().ref('/user/')

const getData = () =>{

    let email = document.getElementById('email')
    let pass = document.getElementById('password')

    db.on('value', function (data) {
            for (var key in data.val()) {
                var user = data.val()[key];
                user.key = key;
        // console.log(user)
                // console.log(user.email)
                    if(user.email==email.value && user.password == pass.value ){
                            window.location = 'todo.html'

                }else if(email.value == ''){
                    alert('Plz enter email')
                }
                else if(pass.value == ''){
                    alert('Plz enter password')
                }else if (user.email!=email.value || user.password != pass.value)
                alert('Plz enter coreect email & password')
            }

        })

}

const clicked = () =>{
    if(event.keyCode == 13){
        document.getElementById('loginBtn').click()
    }
}


