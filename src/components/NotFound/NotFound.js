import './NotFound.css'
import {Link} from "react-router-dom";

function NotFound() {
    return(
        <section className='notfound'>
            <h1 className='notfound__code'>404</h1>
            <p className='notfound__text'>Страница не найдена</p>
            <Link className='notfound__main button' type='button' to="/" >Назад</Link>
        </section>
    )
}
export default NotFound