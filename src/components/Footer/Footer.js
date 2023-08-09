import './Footer.css'
import {Route, Routes} from "react-router-dom";

function Footer() {
    const element =
        <footer className='footer'>
            <p className='footer__about'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info'>
                <p className='footer__copyright'>&copy; 2023</p>
                <ul className='footer__links'>
                    <li className='footer__link'>
                        <a className='footer__link_btn button' target="_blank" rel="noopener noreferrer" href='https://practicum.yandex.ru/referrals/?ref_code=gAAAAABkuvChn-UxLC6WMKguELjSN6VQBkZ-wd2ySCkc5TVZej2Bsfn7mkPiF0C2vYdCf05buVhn9HhytEVon-Q4d25NdpbSvw%3D%3D'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__link'>
                        <a  className='footer__link_btn button' target="_blank" rel="noopener noreferrer" href='https://github.com/Stukateev'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>;

    return(
        <Routes>
            <Route path="/" element={element}/>
            <Route path="/movies" element={element}/>
            <Route path="/saved-movies" element={element}/>
            <Route path='*' element=" "/>
        </Routes>
    )
}

export default Footer