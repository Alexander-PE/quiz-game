import { useState } from 'react';
import QUESTIONS from './questions.json'

QUESTIONS.sort(() => Math.random() - 0.5) // randomize questions

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
      <article className='flex flex-col gap-6 text-center bg-teal-700 p-4 rounded max-w-md w-full'>
        {
          isFinished ? (<h2>Finished!</h2>) : (
            <>
              <h2 className='text-lg'>{question.question}</h2>
              <ul className='flex flex-col gap-2'>
                {question.answers.map((answer) => (
                  <li key={answer.text}>
                    <label>
                      <button className='bg-teal-400 p-2 w-full' onClick={() => handleAnswer(answer)}>{answer.text}</button>
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
