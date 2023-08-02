import './AboutProject.css'

function AboutProject() {

    return(
        <section className="about-project">
            <h2 className='about-project__heading about__heading'>О проекте</h2>
            <div className='about-project__container'>
                <h3 className='about-project__subtitle about-project__subtitle_left'>Дипломный проект включал 5 этапов</h3>
                <h3 className='about-project__subtitle about-project__subtitle_right'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__description about-project__description_left '>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='about-project__description about-project__description_right '>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about-project__time-container'>
                <p className='about-project__time_backend'>1 неделя</p>
                <p className='about-project__time_frontend'>4 недели</p>
                <p className='about-project__type'>Back-end</p>
                <p className='about-project__type'>Front-end</p>
            </div>
        </section>
    )
}
export default AboutProject