import './Footer.css'
import {Route, Routes} from "react-router-dom";

function Footer() {
    const element =
        <footer className='footer'>
            <p className='footer__about'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info'>
                <p className='footer__copyright'>&copy; 2023</p>
                <div className='footer__links'>
                    <a className='footer__link' href='https://practicum.yandex.ru/referrals/?ref_code=gAAAAABkuvChn-UxLC6WMKguELjSN6VQBkZ-wd2ySCkc5TVZej2Bsfn7mkPiF0C2vYdCf05buVhn9HhytEVon-Q4d25NdpbSvw%3D%3D'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/Stukateev'>Github</a>
                </div>
            </div>
        </footer>;

    return(
        <Routes>
            <Route path="/" element={element}/>
            <Route path="/movies" element={element}/>
            <Route path="/saved-movies" element={element}/>
        </Routes>
    )
}

export default Footer