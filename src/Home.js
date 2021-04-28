import {useState, useEffect} from 'react'
import {db} from './Firebase/BD';

export default function Home(){
    const [data, setData] = useState([]);
    const [dataCoder, setDataCoder] = useState([]);
    useEffect(()=>{
        //Libros
        db.collection('Library').onSnapshot(query =>{
            const docs = [];
            query.forEach(doc =>{
                docs.push({...doc.data(),id:doc.id})
            })
            setData(docs)
        })
        //Codigo
        db.collection('Coder').onSnapshot(query =>{
            const docus = [];
            query.forEach(doc =>{
                docus.push({...doc.data(), id:doc.id})
            });
            setDataCoder(docus)

        });
    }, []);
    const book = (
        data.map(doc =>
            <div className="Card-library">
                <h2>{doc.title}</h2>
                <p>Author {doc.author}</p>
                <a href="gs://app-documentaciones.appspot.com/Libros/Python" download>Descargar gratis</a>
                <a href={doc.url} target="_blank" >Ver completo</a>
            </div>    
           )
    )
    const code = (
        dataCoder.map(doc =>
            <div className="card-code">

            </div>
           )
    )
    const [body, setBody] = useState(book)
    return(
       <main>
           <div className="main-form">
               <form > 
                   <input placeholder="Buscar un libro"/>
               </form>
               <div className="buttons-grup">
                    <button onClick={()=>setBody(book)}>Ver Libros</button>
                    <button onClick={()=>setBody(code)}>Ver Codigos</button>
                </div>
           </div>       
   

            {/* Change */}
           
            {body}
       </main>
    )
}