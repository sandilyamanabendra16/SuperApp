import react ,{useEffect, useState} from "react";
import styles from "./NotesWidget.module.css";

function NotesWidget(){
    const [note,setnote]=useState('')

    useEffect (()=>{
        setnote(localStorage.getItem('note', note));
    },[])

    useEffect(()=>{
        if (note){
            localStorage.setItem('note', note.trim());
        }
    },[note])

    return <div className={styles.note}>
        <h1> All notes</h1>
        <textarea
        className={styles.input2} 
        type="text" 
        value={note}
        onChange={(e)=>setnote(e.target.value)}
        /> 
    </div> 
}

export default NotesWidget;