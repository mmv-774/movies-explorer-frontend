import SectionHeader from '../SectionHeader/SectionHeader';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <div className='about-project'>
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
        <ul className='about-project__timeline-list'>
          <li className='about-project__timeline-list-item'>
            <p className='about-project__timeline-title about-project__timeline-title_type_front'>1 неделя</p>
            <p className='about-project__timeline-subtitle'>Back-end</p>
          </li>
          <li className='about-project__timeline-list-item'>
            <p className='about-project__timeline-title about-project__timeline-title_type_back'>4 недели</p>
            <p className='about-project__timeline-subtitle'>Front-end</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProject;
