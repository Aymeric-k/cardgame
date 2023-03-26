
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
const card = [
 {"src":"./img/alonso.jpg", matched : false},
 {"src":"./img/antoine.jpg", matched : false},
 {"src":"/img/benjamin.jpg", matched : false},
 {"src":"./img/fouad.jpg", matched : false},
 {"src":"./img/aymeric.jpg", matched : false},
 {"src":"./img/franck.jpg", matched : false},
 {"src":"./img/helena.jpg", matched : false},
 {"src":"./img/jimmy.jpg", matched : false},
 {"src":"./img/kostandin.jpg", matched : false},
 {"src":"./img/maxime.jpg", matched : false},
 {"src":"./img/pierre.jpg", matched : false},
 {"src":"./img/remyam.jpg", matched : false},
 {"src":"./img/remyp.jpg", matched : false},
 {"src":"./img/theo-gamory.jpg", matched : false},
 {"src":"./img/tristan.jpg", matched : false},
 {"src":"./img/yoann.jpg", matched : false},
 {"src":"./img/damienjpg.jpg", matched : false},
 {"src":"./img/daniel.jpg", matched : false}
  ]
function App() {
  const [cards,setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] =useState(null)
  const [choiceTwo, setChoiceTwo] =useState(null)

  const shuffleCards = () => {
    const shuffledCards = [...card, ...card]
    .sort(()=>Math.random() -0.5)
    .map((card)=> ({...card, id:Math.random}))
    setCards(shuffledCards)
    setTurns(0)
  }
  useEffect (() => {
    if (choiceOne && choiceTwo){
     if( choiceOne.src === choiceTwo.src){
       
       setCards(prevCard  =>{
        return prevCard.map(card => {
          if(card.src === choiceOne.src){
            return {...card, matched: true}
            
          }else {
            return card
          }
        })
       })
       resetTurn()
     }else{
      
      resetTurn()
     
    }
  }
  }, [choiceOne, choiceTwo])


  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  const resetTurn= () =>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns+1)
  }
  return (
    <div className="App">
      <h1>Jeu de carte Dev-Web 2</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card=>(
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
      ))}
      </div>
    </div>
  );
}

export default App;
