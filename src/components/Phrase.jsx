

const Phrase = ({quoteRandom}) => {

    // console.log(quoteRandom)
  return (
   
     <p className="app__phrase">{quoteRandom.phrase}</p>  //solo escoge la frase de la propiedad del objeto
     
  )
}

export default Phrase