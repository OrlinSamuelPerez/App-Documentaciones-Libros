import {useState, useEffect} from 'react';
import {db} from './Firebase/BD';
import Card from './Components/Card';
import Libro from './Img/libro.svg';
import Code from './Img/code.png'
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
                 <Card title={doc.title} author={doc.author} url={doc.url} description={doc.note} />
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
                   <input placeholder="Buscar aqui..."/>
               </form>
               <div className="buttons-grup">
                    <button onClick={()=>setBody(book)}>Ver Libros <img src={Libro}/></button>
                    <button onClick={()=>setBody(code)}>Ver Codigos <img src={Code}/></button>
                </div>
           </div>       
   
            {/* Change */}
           
           <div className="main-body">
             {body}
           </div>
       </main>
    )
}