import '../Styles/Card.css'
export default function Card(props){
    return(
        <div className="card">
            <div>
            <iframe scrolling="no" frameborder="0" src={props.url}  width="100" height="100">Su navegador no permite iframes</iframe>
                <h3>{props.title}</h3>
                <h4> Author:  {props.author}</h4><br></br>
                <a href={props.url}  target="_blank">Ver completo</a>
            </div>
            <p>
            {props.description}
            </p>
        </div>
    )
}