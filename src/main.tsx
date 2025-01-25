import React from 'react'
import ReactDOM from 'react-dom/client'
import ChallengeOne from './challengeOne/challengeOne.tsx'
import ChallengeTwo from './challengeTwo/challengeTwo.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChallengeOne />
    <ChallengeTwo />
  </React.StrictMode>,
)
