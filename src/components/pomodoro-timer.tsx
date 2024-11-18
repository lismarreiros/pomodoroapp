import { useState } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);
  
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000)
  
  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime}/>

      <div className="controls">
        <Button text="teste" onClick={() => console.log('teste')}></Button>
        <Button text="teste" onClick={() => console.log('teste')}></Button>
        <Button text="teste" onClick={() => console.log('teste')}></Button>
      </div>


      <div className="details">
       dajdpaod
      </div>
    </div>
  )
}