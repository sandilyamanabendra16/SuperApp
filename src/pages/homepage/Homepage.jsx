import react, {useState , useEffect} from "react";
import styles from "./Homepage.module.css";
import NewsWdiget from "../../components/newsWidget";
import WeatherWidget from "../../components/weatherWidget";
import UserWidget from "../../components/UserWidget";


function Homepage(){

    const [user,setuser]=useState(JSON.parse(localStorage.getItem('currentUser')));
    const [selectedgenre, setselectedgenre]=useState(JSON.parse(localStorage.getItem('genres')));

    useEffect(()=>{
        console.log(user);
        console.log(selectedgenre);
        console.log(selectedgenre.map((genre)=>genre))
    },[])

return <div className={styles.page1}>
    <div className={styles.left}>
        <div className={styles.userWidget}>
        <UserWidget/>
        </div>
        <div className={styles.weather1}>
        <WeatherWidget/>

        </div>
    </div>
    <div className={styles.right1}>
         <NewsWdiget/>
    </div>
</div>
}

export default Homepage;