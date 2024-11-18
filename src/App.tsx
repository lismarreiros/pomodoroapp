import { PomodoroTimer } from "./components/pomodoro-timer"

function App() {
  return (
    <div className="container">
      <PomodoroTimer 
        pomodoroTime={1500} 
        longRestTime={900} 
        shortRestTime={300}
        cycles={4}
      />
    </div>
  )
}

export default App
