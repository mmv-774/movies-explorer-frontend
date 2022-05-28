import './SectionHeader.css';

const SectionHeader = ({ title }) => {
  return (
    <div className='section-header'>
      <h2 className='section-header__title'>{title}</h2>
    </div>
  );
};

export default SectionHeader;
