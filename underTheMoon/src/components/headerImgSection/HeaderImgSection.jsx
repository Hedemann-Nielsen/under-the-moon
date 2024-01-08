import style from './HeaderImgSection.module.scss';

export const HeaderImgSection = props => {
    return (
     <>
    <h1 className={style.title}>{props.title}</h1>
    <div className={style.frame}>
        <h3>{props.undertitle}</h3>
        <p>{props.aboutUTM}</p>
    </div>
     </>
        
  )}