import { useState } from 'react'
import './style.css'

// Definindo o tipo de estado para as cartas ('up' ou 'down')
type CardState = 'up' | 'down'

// Interface que define a estrutura de uma carta
interface Card {
  id: number
  state: CardState
}

// Interface das propriedades do componente CardList
interface CardListProps {
  size: number
}

// Componente CardList - Recebe um número de cartas (size) como propriedade
function CardList({ size }: CardListProps) {
  // Utilizando o hook useState para gerenciar o estado das cartas no componente
  const [cards, setCards] = useState<Card[]>(Array.from({ length: size }, (_, index) => ({ id: index, state: 'down' })))

  // Função para lidar com o clique em uma carta
  function handleCardClick(id: number) {
    // Mapeando as cartas e verificando se a carta clicada deve virar para cima ('up')
    const updatedCards: Card[] = cards.map((card) =>
      card.id === id ? { ...card, state: 'up' } : { ...card, state: 'down' }
    )
    // Atualizando o estado das cartas com o novo array de cartas atualizadas
    setCards(updatedCards)
  }

  // Renderização do componente CardList
  return (
    <div className='card-list'>
      {/* Mapeando o array de cartas e renderizando cada uma delas */}
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${card.state}`}
          onClick={() => handleCardClick(card.id)} // Ao clicar em uma carta, chama a função handleCardClick
        >
          {card.state} {/* Mostra o estado da carta ('up' ou 'down') */}
        </div>
      ))}
    </div>
  )
}

export default function ChallengeOne() {
  return (
    <div className='challengeOne'>
      <h1>Desafio 1: Card List</h1>
      <CardList size={10} />
    </div>
  )
}
