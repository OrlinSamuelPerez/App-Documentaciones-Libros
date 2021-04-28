import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import AddCRUD from './Components/AddCRUD';
import WriteCode from './WriteCode';
import {auth} from './Firebase/BD';
import Hogar from './Img/hogar.svg';
import Mas from './Img/mas.svg';
import Codificacion from './Img/codificacion.svg';
import Boton from './Img/boton-salir.svg'
export default function RouterApp(){
    const exit = ()=>{
        auth.signOut()
    }
    return(
        <>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/"><img className="img-icon" src={Hogar}/></Link></li>
                        <li><Link to="/Add"><img className="img-icon" src={Mas}/></Link></li>
                        <li><Link to="/WriteCode"><img className="img-icon"  src={Codificacion}/></Link></li>
                        {/* <li><Link to="/">Perfil</Link></li> */}
                        <li><button onClick={exit}><img className="img-icon"  src={Boton} /></button></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/Add"><AddCRUD/></Route>
                    <Route path="/WriteCode" ><WriteCode/></Route>
                    <Route path="/"><Home/></Route>
                </Switch>
            </Router>
        </>
    )
}