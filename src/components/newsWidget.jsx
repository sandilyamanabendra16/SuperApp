import react,{useState,  useEffect} from "react";
import axios from "axios";
import styles from "./newsWidget.module.css";

function NewsWdiget(){

    const [news,setnews]=useState();
    const NEWS_API = process.env.REACT_APP_NEWS_API_KEY;

    useEffect(()=>{
        getNews();
    },[])
    

    const formatDate = (date) => {
        if (date) {
            const formattedDate = new Date(news.publishedAt).toLocaleDateString(
                "en-US",
                {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }
            );
            const formattedTime = new Date(news.publishedAt).toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                }
            );
    
            return (`${formattedDate}  ${"  "} ${formattedTime}`);
        }
    };


const getNews= async ()=>{
    const {data, status}= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`);
    if(status==200){
        setnews(data.articles[1]);
    }
}
    return <div> {news &&(
        <div className={styles.newsWidget}>
            <div className={styles.header1}>
                <img src={news.urlToImage} alt="news_img"></img>
                <div className={styles.headerText}>
                    <h2> {news.title.split("-")[0]}</h2>
                    <h3> {formatDate(news.publishedAt)}</h3>
                </div>
            </div>    
            <div className={styles.footer}>{news.description}</div>
        </div>
    )}
    </div>
}

export default NewsWdiget;