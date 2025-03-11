import { useReducer } from 'react'
import './style.css'

// Definindo a interface para o estado do componente
interface State {
  count: number
}

// Definindo os tipos de ações que podem ser realizadas no estado
type Action = {
  type: 'ADD'
  payload: number
} | {
  type: 'SUBTRACT'
  payload: number
}

// Função do reducer que irá atualizar o estado com base nas ações recebidas
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Caso a ação seja "ADD", adiciona o payload ao count do estado atual
    case 'ADD':
      return { count: state.count + action.payload }
    // Caso a ação seja "SUBTRACT", subtrai o payload do count do estado atual
    case 'SUBTRACT':
      return { count: state.count - action.payload }
    // Caso não haja uma ação correspondente, retorna o estado atual
    default:
      return state
  }
}

// Componente ChallengeApp - Gerencia o estado usando useReducer
export default function ChallengeApp() {
  // Utilizando o hook useReducer para gerenciar o estado com o reducer definido
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  // Função para lidar com o clique no botão "Add" ou "Subtract"
  const handleButtonClick = (actionType: 'ADD' | 'SUBTRACT', value: number) => {
    // Verifica se o valor do input é um número válido, caso não seja, usa o valor padrão de 1
    const validValue = isNaN(value) ? 1 : value

    // Executa a ação correspondente com o valor do input
    dispatch({ type: actionType, payload: validValue })
  }

  return (
    <div className='challengeTwo'>
      <h1>Desafio 2: Gerenciamento de Estado</h1>
      <div>
        <input type='number' id='input-value' />
        <button onClick={() => handleButtonClick('ADD', parseInt((document.getElementById('input-value') as HTMLInputElement).value))}>Adicionar</button>
        <button onClick={() => handleButtonClick('SUBTRACT', parseInt((document.getElementById('input-value') as HTMLInputElement).value))}>Subtrair</button>
      </div>
      <div data-testid='results'>Result: {state.count}</div>
    </div>
  )
}
