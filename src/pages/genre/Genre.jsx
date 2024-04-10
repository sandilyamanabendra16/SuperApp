import react, {useEffect, useState} from "react";
import styles from "./Genre.module.css";
import actionBG from "../../assets/Action.png";
import dramaBG from "../../assets/Drama.png";
import romanceBG from "../../assets/Romance.png";
import thrillerBG from "../../assets/Thriller.png";
import westernBG from "../../assets/Western.png";
import horrorBG from "../../assets/Horror.png";
import fantasyBG from "../../assets/Fantasy.png";
import musicBG from "../../assets/Music.png";
import fictionBG from "../../assets/Fiction.png";

function Genre(){
    const [genres, setgenres]=useState([
        {
            title: "Action",
            bgImg: actionBG
        },
        {
            title: "Drama",
            bgImg: dramaBG
        },
        {
            title: "Romance",
            bgImg: romanceBG
        },
        {
            title: "Thriller",
            bgImg: thrillerBG
        },
        {
            title: "Western",
            bgImg: westernBG
        },
        {
            title: "Horror",
            bgImg: horrorBG
        },
        {
            title: "Fantasy",
            bgImg: fantasyBG
        },
        {
            title: "Music",
            bgImg: musicBG
        },
        {
            title: "Fiction",
            bgImg: fictionBG
        },
    ])

    const bgcolor=[
        "#FF5209",
        "#D7A4FF",
        "#148A08",
        "#84C2FF",
        "#902500",
        "#7358FF",
        "#FF4ADE",
        "#E61E32",
        "#6CD061"];

    // const color=[
    //     "color1",
    //     "color2",
    //     "color3",
    //     "color4",
    //     "color5",
    //     "color6",
    //     "color7",
    //     "color8",
    //     "color9"
    // ];

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [warning, setwarning]=useState('');
    const selectGenre = (index)=>{
        
        if(selectedGenres.length==2){
            setwarning(false);
        }
        if(selectedGenres.includes(index)) return;
        setSelectedGenres([...selectedGenres,index]);
        
    }

    useEffect(()=>{
        const genres1=[selectedGenres];
        localStorage.setItem("genres1",JSON.stringify(genres1));
        console.log(JSON.parse(localStorage.getItem("genres1")));
    },[selectedGenres])

    const removeGenre=(index)=>{
        console.log(index)
        const newGenres=selectedGenres.filter((item)=>item !==index);
        setSelectedGenres(newGenres);
    }

    const handlenext=()=>{
        if(selectedGenres.length<3){
            setwarning('🔺 Minimum 3 category required');
        }
        else{
            setwarning('');
        }
    }
    return <div className={styles.page}> 
    <div className={styles.left}>
    <h2>Super app</h2>
    <h1> Choose  your entertainment category</h1>

    <div className={styles.slgenres}>
        {selectedGenres.map((item,index)=>(
            <div key={item} className={styles.selectedgenre} >
                {genres[item].title} 
                <button onClick={() => removeGenre(item)}>X</button>
            </div>
        ))}
    </div>
    <div className={styles.warning}>
        {warning}
    </div>
    </div>
    

    <div className={styles.right}>
        <div className={styles.genreGrid}>
                {genres.map((genre, index)=> (
                        <div key={index} className={styles.Genrecard} onClick={() => selectGenre(index)} style={{backgroundColor:bgcolor[index]}}>
                        {/* <div key={index} className={styles.Genrecard styles.color1} onClick={() => selectGenre(index)}>     */}
                        {genre.title}
                            <br/>
                            <img src={genre.bgImg} alt="BGIMG"/>
                            </div>
                ))}
            </div>
            <button className={styles.nxtpage} onClick={handlenext}> Next Page</button>
        </div>
    </div>
    
}

export default Genre;