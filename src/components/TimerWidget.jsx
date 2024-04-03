import react, {useState, useEffect} from "react";
import styles from "./TimerWidget.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


function TimerWidget(){
    const [hour, sethour]=useState(0);
    const [minute, setminute]=useState(0);
    const [seconds, setseconds]=useState(0);
    const [isactive, setisactive]=useState(false);
    const [duration, setduration]=useState(0);

    useEffect(() => {
		let intervalId;
		if (isactive) {
			intervalId = setInterval(() => {
				if (seconds === 0) {
					if (minute === 0) {
						if (hour === 0) {
							clearInterval(intervalId);
							setisactive(false);
							return;
						}
						sethour((prevHours) => prevHours - 1);
						setminute(59);
						setseconds(59);
					} else {
						setminute((prevMinutes) => prevMinutes - 1);
						setseconds(59);
					}
				} else {
					setseconds((prevSeconds) => prevSeconds - 1);
				}
			}, 1000);
		}
		return () => clearInterval(intervalId);
	}, [isactive, hour, minute, seconds]);

    const startTimer=()=>{
        setisactive(true);
        setduration(hour * 3600 + minute * 60 + seconds);
    }

    const stopTimer=()=>{
        setisactive(false);
    }

    const resetTimer=()=>{
        setduration(0);
        setminute(0);
        sethour(0);
        setseconds(0);
        setisactive(false);
    }

    const increment=(setter)=>{
        setter((prevalue)=> prevalue + 1);
    }

    const decrement=(setter)=>{
        setter((prevalue)=> prevalue > 0 ? prevalue - 1 :0);
    }

    const [fixedHours, setFixedHours] = useState(0);
	const [fixedMinutes, setFixedMinutes] = useState(0);
	const [fixedSeconds, setFixedSeconds] = useState(0);

    useEffect(()=>{
        if(!isactive){
            setFixedHours(hour);
            setFixedMinutes(minute);
            setFixedSeconds(seconds);
        }
    },[seconds, minute, hour])

    const duration1=()=>{
        const curr=seconds + minute*60 + hour*3600;
        const total=fixedSeconds + fixedMinutes * 60 + fixedHours * 3600;
        const res=curr/total;
        return res*100;

    }

    return <div className={styles.widget}>
        <div className={styles.left2}> 
        <div className={styles.ring}>
        <CircularProgressbar className={styles.circular} backgroundPadding={10} value={duration1()} text={<tspan dx={-25} dy={5}>{`${hour.toString().padStart(2,"0")}:${minute.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`} </tspan>} strokeWidth={3}
        styles={buildStyles({
            rotation: 0,
            // Text size
            textSize: "16px",
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none'
            // Colors
            pathColor: "#FF6A6A",
            textColor: "#FFFFFF",
            trailColor: "#191E39",
            text: {
                // Text color
                fill: '#f88',
                // Text size
                fontSize: '16px',
                display:'flex',
            
              },
        })} 
        />
        </div>
        </div>
        <div className={styles.right2}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h3 className={styles.label}> Hours</h3>
                    <button className={styles.arrowup}  onClick={()=>increment(sethour)}> </button>
                    <div className={styles.count}>
                        {hour.toString().padStart(2, "0")}
                    </div>
                    <button className={styles.arrowdown} onClick={()=>decrement(sethour)}></button>

                </div>
                <div className={styles.colon}> : </div>
                <div className={styles.column}>
                    <h3 className={styles.label}> Minutes</h3>
                    <button className={styles.arrowup} onClick={()=>increment(setminute)}></button>
                    <div className={styles.count}>
                        {minute.toString().padStart(2, "0")}
                    </div>
                    <button className={styles.arrowdown} onClick={()=>decrement(setminute)}></button>

                </div>
                <div className={styles.colon}> : </div>
                <div className={styles.column}>
                    <h3 className={styles.label}> Seconds</h3>
                    <button className={styles.arrowup} onClick={()=>increment(setseconds)}></button>
                    <div className={styles.count}>
                        {seconds.toString().padStart(2, "0")}
                    </div>
                    <button className={styles.arrowdown} onClick={()=>decrement(setseconds)}></button>

                </div>

            </div>
            <div className={styles.action}>
                {isactive && (
                    <>
                    <button className={styles.button} onClick={stopTimer}> Stop</button>
                    <button className={styles.button} onClick={resetTimer}> Reset</button>
                    </>
                )}
                {!isactive && (
                    <>
                    <button className={styles.button} onClick={startTimer}> Start</button>
                    </>
                )}

            </div>
        </div>
    </div>
}

export default TimerWidget;