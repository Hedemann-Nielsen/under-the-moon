import style from './Navigation.module.scss';

export const Navigation = props => {
    return (
      <ul className={style.navigation}>
        {props.data && props.data.map((item, itemIndex) => {
            return <li key={itemIndex}>{item}</li>
        }
        
        )}
      </ul>
    )
  }