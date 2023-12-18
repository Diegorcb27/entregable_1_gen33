
import './App.css'
import phrases from "./utils/phrases.json"
import arrPhotos from "./utils/photos.json"
import getRandomFromArr from './utils/getRandomFromArr';
import { useState } from 'react';
import Phrase from './components/Phrase';
import Button from './components/Button';


 //preguntar, por que esta por fuera

function App() {

const initialPhrase=getRandomFromArr(phrases);
const initialPhoto=getRandomFromArr(arrPhotos)

const [quoteRandom, setQuoteRandom] = useState(initialPhrase);
const [photoRandom, setPhotoRandom] = useState(initialPhoto)

// console.log(quoteRandom);

const objStyle={
  backgroundImage: `url(/fondo${photoRandom}.jpg)` //preguntar, cuando entro con la carpeta entregables no funciona
}

  return (
   <div className="app" style={objStyle}>
    <h1 className='app__title'>Versiculos Bíblicos</h1>
      <div className='app__card'>
        <Phrase quoteRandom={quoteRandom}/>
        <Button setQuoteRandom={setQuoteRandom} 
                setPhotoRandom={setPhotoRandom}/>
      </div>
      
   </div>
  )
}

export default App
