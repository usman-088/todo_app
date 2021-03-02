
var db = firebase.database().ref('/user/')

const getData = () =>{

    let email = document.getElementById('email')
    let pass = document.getElementById('password')

    var found=false
    db.on('value', function (data) {
            
            for (var key in data.val()) {
                var user = data.val()[key];
                user.key = key;
                    if(user.email==email.value && user.password == pass.value ){
                        
                            found=true
                            window.location = 'todo.html'
                            
                            break;

                }else if(email.value == ''){
                    alert('Plz enter email')
                    break
                }
                else if(pass.value == ''){
                    alert('Plz enter password')
                    break
                }
            }
            if(!found){

                alert('Plz enter email and password')
            }

        })

}

const clicked = () =>{
    if(event.keyCode == 13){
        document.getElementById('loginBtn').click()
    }
}


