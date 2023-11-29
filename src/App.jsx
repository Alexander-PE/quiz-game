import { useState } from 'react';
import QUESTIONS from './questions.json'

QUESTIONS.sort(() => Math.random() - 0.5) // randomize questions
QUESTIONS.forEach(question => question.answers.sort(() => Math.random() - 0.5)) // randomize answers

function App() {
  const [index, setIndex] = useState(0) // current question index
  const [score, setScore] = useState(0) // current score
  const question = QUESTIONS[index] // get current question
  const isFinished = index >= QUESTIONS.length // check if quiz is finished

  const handleAnswer = (answer) => {
    if (answer.isCorrect) {
      setScore(score + 1)
    }
    setIndex(index + 1)
  }

  return (
    <main className='grid place-items-center min-h-screen'>
      <article className='flex flex-col gap-6 nes-container with-title is-centered max-w-md w-full'>
        {
          isFinished ? (
            <div>
              <h2>Finished!</h2>
              <p>Score: {score} / {QUESTIONS.length}</p>
              <button className='nes-btn mt-5' onClick={() => window.location.reload()}>Play again</button>
            </div>
          ) : (
            <>
              <h2 className='text-lg title'>{question.question}</h2>
              <ul className='flex flex-col gap-2'>
                {question.answers.map((answer) => (
                  <li key={answer.text}>
                    <label>
                      <button className='nes-btn w-full' onClick={() => handleAnswer(answer)}>{answer.text}</button>
                    </label>
                  </li>
                ))}
              </ul>
            </>
          )
        }
      </article>
    </main>
  );
}

export default App
