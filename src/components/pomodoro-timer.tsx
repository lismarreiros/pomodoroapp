import { useEffect, useState } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
  pomodoroTime: number;
  longRestTime: number;
  shortRestTime: number;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
import bellStart from '../sounds/bell-start.mp3';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import bellFinish from '../sounds/bell-finish.mp3';

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false); 

  useEffect(() => {
    if(working) document.body.classList.add('working');
  }, [working])
  
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null)

  const configureWork = () => {
    setTimeCounting(true);
    setResting(false);
    setWorking(true);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play()
  }

  const configureResting = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(props.longRestTime)
    } else {
      setMainTime(props.shortRestTime)
    }

    audioStopWorking.play()
  }
  
  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime}/>

      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="Rest" onClick={() => configureResting(false)}></Button>
        <Button 
          className={!working && !resting ? 'hidden' : ''}
          text={timeCounting ? "Pause" : "Play"} 
          onClick={() => setTimeCounting(!timeCounting)}></Button>
      </div>


      <div className="details">
       dajdpaod
      </div>
    </div>
  )
}