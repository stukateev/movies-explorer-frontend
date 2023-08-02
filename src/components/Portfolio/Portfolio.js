import './Portfolio.css'
import arrow from '../../images/portfolio__arrow.svg'

function Portfolio() {

    return(
        <section className="portfolio">
            <h2 className='portfolio__portfolio-subheading'>Портфолио</h2>
            <ul className='portfolio__portfolio_list'>
                <li className='portfolio__portfolio-item portfolio-item'>
                    <a className='portfolio-item__arrow button' target="_blank" rel="noopener noreferrer" href='https://github.com/Stukateev/how-to-learn/'>
                        Статичный сайт
                       <img className='portfolio-item__arrow-image' src={arrow} alt='Стрелка. Векторная стрелка выбора.' />
                    </a>
                </li>
                <li className='portfolio__portfolio-item portfolio-item'>
                    <a className='portfolio-item__arrow button' target="_blank" rel="noopener noreferrer" href='https://Stukateev.github.io/russian-travel/'>
                        Адаптивный сайт
                        <img className='portfolio-item__arrow-image' src={arrow} alt='Стрелка. Векторная стрелка выбора.' />
                    </a>
                </li>
                <li className='portfolio__portfolio-item portfolio-item'>
                    <a className='portfolio-item__arrow button' target="_blank" rel="noopener noreferrer" href='https://stukateev.github.io/mesto/'>
                        Одностраничное приложение
                        <img className='portfolio-item__arrow-image' src={arrow} alt='Стрелка. Векторная стрелка выбора.' />
                    </a>
                </li>
            </ul>
        </section>
    )
}
export default Portfolio