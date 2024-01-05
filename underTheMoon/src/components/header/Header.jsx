import { Navigation } from '../navigation/Navigation';

const arrNavigation = [
    'hjem', 'koncept', 'utm loyalety', 'om', 'kontakt'
]

export const Header = () => {
    return(
    <header>
        <Navigation data={arrNavigation}></Navigation>
    </header>
    
    )
}

