import Student from './Student.jsx';

function App() {
  
  return (
    <>
      <Student name="Dave" age="30" isStudent={true}/>
      <Student name="Bob" age={22} isStudent={false}/>
      <Student name="Simon" age={19} isStudent={true}/>
      <Student age={19} isStudent={true}/>
      <Student />
    </>
  )
}

export default App
