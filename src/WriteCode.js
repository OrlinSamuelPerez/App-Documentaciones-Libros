import { useState } from 'react';
import { auth, db} from './Firebase/BD';
export default function WriteCode() {
    const valueInitial = {
        titleCode:'',
        noteCode:'',
        idUser:'',
        lenguaje:''
    };
    const [values, setValues] = useState(valueInitial);
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setValues({...values, [name]:value}) 
    }
    const handleSubmit = () =>{
        auth.onAuthStateChanged(async user=>{
            if(user != null){
                await db.collection('Coder').doc().set(values);
                await db.collection('user').doc(user.uid).collection(user.uid).doc().set(values);
                setValues({...valueInitial})
            }
        })
    }
    return(
        <>
            <h1 className="write-text">Agregar un texto o codigo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange}  name="titleCode" placeholder="Ingresa un titulo"/>
                </div>          
                 <div>
                    <input onChange={handleChange}  name="lenguaje" placeholder="Ingresa el lenguaje"/>
                </div>
                <div>
                    <textarea onChange={handleChange}  rows="10" name="noteCode" placeholder="Escribe aqui..."></textarea>
                </div>
                <div>
                    <button className="boton-online reset" type="reset">Cancelar</button>
                    <button className="default" onClick={handleSubmit} >Enviar</button>
                 </div>
            </form>
        </>
    )
}