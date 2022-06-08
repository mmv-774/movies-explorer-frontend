import SectionHeader from '../SectionHeader/SectionHeader';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section id='about-project' className='about-project'>
      <div className='about-project__wrapper'>
        <SectionHeader title={'О проекте'} />
        <ul className='about-project__description-list'>
          <li className='about-project__description-list-item'>
            <h3 className='about__description-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about__description-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className='about-project__description-list-item'>
            <h3 className='about__description-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about__description-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className='about-project__timeline'>
          <span className='about-project__timeline-title about-project__timeline-title_color_blue'>1 неделя</span>
          <span className='about-project__timeline-title about-project__timeline-title_color_grey'>4 недели</span>
          <span className='about-project__timeline-subtitle'>Back-end</span>
          <span className='about-project__timeline-subtitle'>Front-end</span>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
