import './AboutMe.css'
import photo from '../../images/about-me__21231232.jpg'


function AboutMe() {

    return(
        <section className='about-me'>
            <h2 className='about-me__heading about__heading'>Студент</h2>
            <div className='about-me__information'>
                <div className='about-me__wrapper'>
                    <p className='about-me__name'>Дмитрий</p>
                    <p className='about-me__course-name'>Frontend-developer, 26 лет</p>
                    <article className='about-me__description'>
                        Я родился в Пятигорске, среди гор Северного Кавказа, в 18 лет переехал в город Краснодар.
                        Начал изучать Frontend разработку в 2022 году.
                        На данный момент занимаюсь предпринимательством в сфере ландшафтного дизайна.
                    </article>
                    <a className='about-me__github' href='https://github.com/Stukateev'>Github</a>
                </div>
                <img className='about-me__photo' src={photo} alt='Моё фото'/>
            </div>
        </section>
    )
}
export default AboutMe