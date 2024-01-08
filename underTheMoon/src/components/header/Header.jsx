import style from './Header.module.scss';

import { Navigation } from '../navigation/Navigation';
import { HeaderImgSection } from '../headerImgSection/headerImgSection';


const arrNavigation = [
    'hjem', 'koncept', 'utm loyalety', 'om', 'kontakt'
]

export const Header = () => {
    return(
    <header className={style.headerImg}>
        <Navigation data={arrNavigation}></Navigation>
        <HeaderImgSection title="under the moon" undertitle="hairstylist og frisør" aboutUTM="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid optio ex tenetur ad. Dolorum distinctio ratione, minus ipsam perferendis, eveniet cupiditate praesentium quam quasi deserunt, corrupti eaque doloremque inventore dolor."></HeaderImgSection>
    
    </header>
    
    )
}

