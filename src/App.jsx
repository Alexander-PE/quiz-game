import QUESTIONS from './questions.json'

function App() {
  return <main>
    <h1>Quiz</h1>
    <ul>
      {QUESTIONS.map((question) => (
        <li key={question.id}>
          <h2>{question.question}</h2>
          <ul>
            {question.answers.map((answer) => (
              <li key={answer.id}>
                <label>
                  <input type="radio" name={question.id} value={answer.id} />
                  {answer.text}
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </main>;
}

export default App
