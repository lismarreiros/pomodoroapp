import { PomodoroTimer } from "./components/pomodoro-timer"

function App() {
  return (
    <div className="container">
      <PomodoroTimer defaultPomodoroTime={1500}/>
    </div>
  )
}

export default App
