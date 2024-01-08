import { Gallery } from "../gallery/Gallery";
import style from "../Main/Main.module.scss";


const arrPictures = [
   './src/assets/images/inatgram gallery/Rectangle-6.png',
   './src/assets/images/inatgram gallery/Rectangle-7.png',
   './src/assets/images/inatgram gallery/Rectangle-8.png',
   './src/assets/images/inatgram gallery/Rectangle-9.png',
   './src/assets/images/inatgram gallery/Rectangle-10.png',
   './src/assets/images/inatgram gallery/Rectangle-11.png',
   './src/assets/images/inatgram gallery/Rectangle-12.png',
   './src/assets/images/inatgram gallery/Rectangle-13.png',
   './src/assets/images/inatgram gallery/Rectangle-14.png',
   './src/assets/images/inatgram gallery/Rectangle-15.png',
   './src/assets/images/inatgram gallery/Rectangle-16.png',
   './src/assets/images/inatgram gallery/Rectangle-17.png',
   
];

export const Main = () => {
    return(
    <main class={style.instgram}>
      <h5>follow us on instagram</h5>
      <Gallery pictures={arrPictures}></Gallery> 
    </main>
    
    )
}
