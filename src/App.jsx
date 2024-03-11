import Questions from './Questions';
import data from './data'
import { useState } from 'react'
const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null) ;

  const toggleQuestion = (id) => {
    console.log(id);
  }
  return <main>
    <Questions 
    questions={questions} 
    activeId={activeId} 
    toggleQuestion={toggleQuestion}/>
  </main>;
};
export default App;
