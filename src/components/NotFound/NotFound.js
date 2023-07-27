import './NotFound.css'
import {Link} from "react-router-dom";

function NotFound() {
    return(
        <section className='notfound'>
            <h2 className='notfound__code'>404</h2>
            <p className='notfound__text'>Страница не найдена</p>
            <Link className='notfound__main' type='button' to="/" >Назад</Link>
        </section>
    )
}
export default NotFound