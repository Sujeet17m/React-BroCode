import UserGreetings from './UserGreetings.jsx'

function App() {
  
  return (
    <>
      <UserGreetings isLoggedIn={true} username="travis"/>
      <UserGreetings isLoggedIn={false} username="travis"/>
    </>
  )
}

export default App
