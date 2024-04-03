import react ,{useState, useEffect} from "react";
import styles from "./UserWidget.module.css";
import {genres} from "../data/genres";
import userAvatar from "../assets/image 14.png";
function UserWidget(){
    
    const [user,setuser]=useState();
    const [selectedgenre, setselectedgenre]=useState([]);


    useEffect(()=>{
        const user1=JSON.parse(localStorage.getItem('currentUser'));
        setuser(user1);
        setselectedgenre(JSON.parse(localStorage.getItem('genres1')));
        console.log(user);
    
    },[])
    
 return (
    <div className={styles.userWidget}> 
        <img src={userAvatar} alt="user avatar" />
        <div> 
            <div className={styles.userdetails}>
                <h2> {user.name}</h2>
                <h2> {user.email}</h2>
                <h2> {user.username}</h2>
            </div>
     { selectedgenre.length >0 && (
         <div > 
                 {selectedgenre.map((genre,index)=> (
                     <div className={styles.genreGrid} key={index}>
                     {genre.map((n) => (
                         <div className={styles.pill} key={n}>{genres[n].title}</div>
                       ))}
                       </div>
                 ))}
         </div>
     )}
     </div>
 </div>)
}

export default UserWidget;