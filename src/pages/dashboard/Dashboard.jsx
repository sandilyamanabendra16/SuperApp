import react, {useState , useEffect}from "react";
import styles from "./Dashboard.module.css";
import WeatherWidget from "../../components/weatherWidget";
import UserWidget from "../../components/UserWidget";
import NewsWidget from "../../components/newsWidget";
import NotesWidget from "../../components/NotesWidget";
import TimerWidget from "../../components/TimerWidget";

function Dashboard(){
    return <div className={styles.dashboard}>
        
        <div class={styles.div1}> <UserWidget/> </div>
        <div class={styles.div2}> <WeatherWidget/> </div>
        <div class={styles.div3}> <NotesWidget/> </div>
        <div class={styles.div4}> <TimerWidget/> </div>
        <div class={styles.div5}> 
        <NewsWidget/>
        </div>

    </div>
}

export default Dashboard;