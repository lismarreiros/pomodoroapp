import { PomodoroTimer } from "./components/pomodoro-timer"

function App() {
  return (
    <div className="container">
      <PomodoroTimer pomodoroTime={1500} longRestTime={600} shortRestTime={300}/>
    </div>
  )
}

export default App
