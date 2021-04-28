import {auth, providerGitHub,  providerGoogle} from './Firebase/BD' 
import './Styles/Login.css'
import {useState} from 'react';
import Github from './Img/github-icon.svg';
import Google from './Img/google-icon.svg';
export default function Login(){
    const singInGitHub = ()=>{
        auth.signInWithPopup(providerGitHub)
        .then((result) => {
            console.log(result)
        // ...
        }).catch((error) => {
            console.log(error)
        });
    }
    const singInGoogle = () => {
        auth.signInWithPopup(providerGoogle)
        .then((result) => {
          console.log(result)
        }).catch((error) => {
          console.log(error)
        });
        
    }
    const singInGmailPass = (e)=>{
        e.preventDefault();
        const email = document.getElementById('gmail').value
        const password = document.getElementById('password').value
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        })
        .catch((error) => {
            // var errorCode = error.code;
            // var errorMessage = error.message;
        });
    }
    const singRegis = (e)=>{
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const confPassword = document.getElementById('confpass').value;
        if(password === confPassword){
            auth.createUserWithEmailAndPassword(email, password).then(userCredential=>{
                console.log('A')
            })
        } 
        else{
            alert('No coincide')
        }
    }
    const bodyLogin = (
        <>
        <h1>Iniciar Seccion</h1>
        <form>
            <div>
                {/* <label for="gmail">Correo</label><br></br> */}
                <input type="email" placeholder="Ingresa el correo" id="gmail"/>
            </div>     
            <div>
                {/* <label for="password">Contraseña</label><br></br> */}
                <input type="password" placeholder="Ingresa la contraseña" id="password"/>
            </div>
            <div>
                <button className="boton-online" onClick={singInGmailPass}>Iniciar Seccion</button>
            </div>
            <div>
                <button className="button-senco"  onClick={singInGitHub}><img src={Github}/></button>
                <button className="button-senco"  onClick={singInGoogle} ><img src={Google}/>  </button>
            </div>

            <div>
                <a onClick={()=> setBody(regisBody)}>Registrarse &#10140;</a>
            </div>
        </form>
        </>
    )
    const regisBody = (
        <>
        <h1>Registrate</h1>
        <form>
            <div>
                {/* <label for="email">Correo</label><br></br> */}
                <input type="email" placeholder="Correo Electronico" name="email" id="email"/>
            </div>
            <div>
                {/* <label for="pass">Contraseña</label><br></br> */}
                <input type="password" placeholder="Nueva Contraseña" name="pass" id="pass"/>
            </div>
            <div>
                {/* <label for="pass">Confirmar Contraseña</label><br></br> */}
                <input type="password" name="confpass" placeholder="Confirma la Contraseña"  id="confpass"/>
            </div>

            <div>
                <button className="boton-online res" onClick={singRegis} >Registrarse</button>
            </div>

            <div className="text-res">
                <a onClick={()=> setBody(bodyLogin)}>¿Ya tienes una cuenta? Iniciar Seccion aqui!</a>
            </div>
        </form>
        </>
    )
    const [body, setBody] = useState(bodyLogin);
    return(
        <main>
            {body}
        </main>
    )
}