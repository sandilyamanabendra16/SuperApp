import react, {useEffect, useState} from "react";
import styles from "./Genre.module.css";

import {genres} from "../../data/genres";
import {bgcolor} from "../../data/bgcolor";

function Genre(){

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [warning, setwarning]=useState('');
    const selectGenre = (index)=>{
        
        if(selectedGenres.length==2){
            setwarning(false);
        }
        if(selectedGenres.includes(index)) return;
        setSelectedGenres([...selectedGenres,index]);
        
    }

    // useEffect(()=>{
        
    //     console.log(JSON.parse(localStorage.getItem('currentUser')));
    // },[selectedGenres])
    
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
            const genres2=selectedGenres;
        localStorage.setItem("genres",JSON.stringify(genres2));
        console.log(JSON.parse(localStorage.getItem("genres")));
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