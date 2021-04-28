import {db, storage, auth} from '../Firebase/BD';
import {useState} from 'react'
export default function AddCRUD() {
    const valueInitial = {
        title:'',
        author:'',
        reference:'',
        file:null,
        note:'',
        idUser:'',
        url:'',
    };
    const [library, setLibrary] = useState(valueInitial);
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setLibrary({...library, [name]:value}) 
        if(name ==='file'){
          setLibrary ({...library,file:e.target.files[0]})
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(library.author === ''){
            setLibrary({...library, author:'Anonimo'}) 
        }
        auth.onAuthStateChanged(async user=>{
            if(user != null){
                library.idUser = user.uid;
                const reference = storage.ref(`Libros/${library.title}`);
                reference.put(library.file).then(data =>{
                    data.ref.getDownloadURL().then(async (img)=>{
                        library.url = img;
                        library.file = null;
                        await db.collection('Library').doc().set(library);
                        await db.collection('user').doc(user.uid).collection(user.uid).doc().set(library);
                        setLibrary({...valueInitial})
                    })
                })
              
            }
        })
    };

    return(
        <div>
            <div className="main-modal">
                <h1>Agregar pdf</h1>

                <form>
                    <div>
                        <input value={library.title} onChange={handleChange} placeholder="Ingresa el nombre del pdf"  name="title" type="text" id="title" name="title"/>
                    </div>

                    <div>
                        <input value={library.author}  onChange={handleChange} name="author" placeholder="Nombre del author"  type="text" id="author" name="author"/>
                    </div>


                    <div>
                        <input value={library.reference}  onChange={handleChange} placeholder="Escribe las referencia o url"  name="reference" type="text" id="reference" name="reference"/>
                    </div>

                    <div>
                        <input  onChange={handleChange} name="file" accept="application/pdf"  type="file" />
                    </div>

                    <div>
                        <textarea value={library.note} placeholder="Agrega una breve descripcion"  onChange={handleChange} name="note">
                             
                        </textarea>
                    </div>

                    <div>
                        <button className="boton-online reset" type="reset">Cancelar</button>
                        <button className="default" onClick={handleSubmit} >Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}