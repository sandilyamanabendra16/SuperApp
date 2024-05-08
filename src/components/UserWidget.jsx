import react ,{useState, useEffect} from "react";
import styles from "./UserWidget.module.css";
import {genres} from "../data/genres";
import userAvatar from "../assets/image 14.png";
function UserWidget(){
    
    const [user,setuser]=useState(JSON.parse(localStorage.getItem('currentUser')));
    const [selectedgenre, setselectedgenre]=useState([JSON.parse(localStorage.getItem('genres'))]);
    
 return (
    <div className={styles.userWidget}> 
        <img src={userAvatar} alt="user avatar" />
        <div> 
            <div className={styles.userdetails}>
                <h2> {user.name}</h2>
                <h2> {user.email}</h2>
                <h2> {user.username}</h2>
            </div>
     { selectedgenre && (
         <div className={styles.genreGridtemplate}> 
                 
                     <div className={styles.genreGrid}>
                         {selectedgenre?.filter((_genre, index) => index < 4)?.map((genre)=>(
                            genre.map((gen,i)=>
                            <div key={i} className={styles.pill}>{genres[gen].title}</div>
                            )))}
                       </div>
                 
         </div>
     )}
     </div>
 </div>)
}

export default UserWidget;