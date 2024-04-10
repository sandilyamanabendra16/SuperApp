import react, {useEffect, useState} from "react";
import styles from "./Homepage.module.css";
import userAvatar from "../../assets/image 14.png";
import axios from "axios";

function Homepage(){
const [user,setuser]=useState();
const [selectedgenre, setselectedgenre]=useState([]);

const genres=[
    {
        title: "Action"
    },
    {
        title: "Drama"  
    },
    {
        title: "Romance"
    },
    {
        title: "Thriller"
    },
    {
        title: "Western"
    },
    {
        title: "Horror"
    },
    {
        title: "Fantasy"
    },
    {
        title: "Music"
    },
    {
        title: "Fiction"
    },
];

useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('currentUser')));

    setselectedgenre(JSON.parse(localStorage.getItem('genres1')));
    console.log(user);
    console.log(selectedgenre);
    getWeather();

},[])

const getWeather= async ()=>{
    // const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=0e74f092588f4c2ea88155322240804&q=Mumbai');
    // console.log(response);
    const { data, status } = await axios.get("http://api.weatherapi.com/v1/current.json?key=0e74f092588f4c2ea88155322240804&q=Mumbai");
    // if (status == 200) {
    //     setWeather(data.current);
    // }
    console.log(status)
}


return <div className={styles.page1}>
    <div className={styles.left}>
        {user &&(
            <div className={styles.userWidget}> 
                <img src={userAvatar} alt="user avatar" />
                <div> 
                    <div className={styles.userdetails}>
                    <h2> {user[0]}</h2>
                    <h2> {user[2]}</h2>
                    <h2> {user[1]}</h2>
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

            </div>
        )}

    </div>
    <div className={styles.right1}>Hello</div>
</div>
}

export default Homepage;