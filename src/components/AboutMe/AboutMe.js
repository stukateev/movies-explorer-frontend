import './AboutMe.css'
import photo from '../../images/about-me__21231232.jpg'


function AboutMe() {

    return(
        <section className='about-me'>
            <h2 className='about-me__heading about__heading'>Студент</h2>
            <div className='about-me__information'>
                <div className='about-me__wrapper'>
                    <h3 className='about-me__name'>Дмитрий</h3>
                    <p className='about-me__course-name'>Frontend-developer, 26 лет</p>
                    <p className='about-me__description'>
                        Я родился в Пятигорске, среди гор Северного Кавказа, в 18 лет переехал в город Краснодар.
                        Начал изучать Frontend разработку в 2022 году.
                        На данный момент занимаюсь предпринимательством в сфере ландшафтного дизайна.
                    </p>
                    <a className='about-me__github button'  target="_blank" rel="noopener noreferrer" href='https://github.com/Stukateev'>Github</a>
                </div>
                <img className='about-me__photo' src={photo} alt='Моё фото. Черно-белый портрет улыбающегося парня.'/>
            </div>
        </section>
    )
}
export default AboutMe