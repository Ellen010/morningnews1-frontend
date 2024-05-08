import Head from 'next/head';
import Article from './Article';
import TopArticle from './TopArticle';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

  // const topArticle = {
  //   author: 'Monica Chin',
  //   title: 'Asus entry level rog Zephyrus G14 is the one to buy',
  //   description: 'DevotedDevoted Verge readers will remember that I was not the biggest fan of the most recent ROG Zephyrus G14. The model we received had a lot of great things about it — Asus had improved the aspect ratio, added a webcam, enlarged the touchpad, and fixed basically every other complaint I’d had about G14s of the past.',
  //   urlToImage: 'https://cdn.vox-cdn.com/thumbor/iToxh_m-uhdHUGyUzuD_s_L0ANE=/0x0:2040x1360/820x461/filters:focal(807x650:1133x976)/cdn.vox-cdn.com/uploads/chorus_image/image/70982408/akrales_220510_5144_0008.0.jpg',
  // };

  // const articlesData = [
  //   {
  //     author: 'Mitchell Clark, Alex Heath',
  //     title: 'Snapchat Plus subscription in testing with access to experimental features',
  //     description: 'Snap is currently testing a subscription service called Snapchat Plus, which will give users access to “exclusive, experimental, and pre-release features” in the app.',
  //     urlToImage: 'https://cdn.vox-cdn.com/thumbor/xs4HuQvReou8Jq4wvSvaDDk6WRk=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9030239/snapChatPattern_BW.jpg',
  //   },
  //   {
  //     author: 'Jay Peters',
  //     title: 'Capcom reveals Dragon’s Dogma 2 is in development',
  //     description: 'Capcom is developing a sequel to its 2012 high fantasy action RPG Dragon’s Dogma, which it’s calling Dragon’s Dogma 2. It will take advantage of the RE Engine, which has been used for many of Capcom’s recent games.',
  //     urlToImage: 'https://cdn.vox-cdn.com/thumbor/4SFFmPdiK3j6LgHg3P4hB6OyUeA=/0x25:1280x695/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23634276/10_Years_of_Dragon_s_Dogma_12_14_screenshot.png',
  //   },
  //   {
  //     author: 'Jay Peters',
  //     title: 'Final Fantasy VII Remake’s sequel is called Rebirth, and it’s out next year',
  //     description: 'Final Fantasy VII Rebirth is the next game in the Final Fantasy VII remake saga. It’s the second of a trilogy and will launch as a PS5 exclusive next winter.',
  //     urlToImage: 'https://cdn.vox-cdn.com/thumbor/5YL6nimCAIyU8Ch2QsLzHc31ErU=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23634255/02_ff7rebirth_ss02__1_.jpg',
  //   },
  //   {
  //     author: 'Charles Pulliam-Moore',
  //     title: 'Dead End: Paranormal Park review — Hamish Steele’s new series is scary good',
  //     description: 'Netflix’s adaptation of Hamish Steele’s Dead End webcomics is a fresh animated adventure that centers and celebrates queerness.',
  //     urlToImage: 'https://cdn.vox-cdn.com/thumbor/9NFC3Uzrrk3wEcjjw9_JkyaWkfc=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23632823/Season_1_Trailer__Dead_End__Paranormal_Park_00_01_04_13.jpeg',
  //   },
  //   {
  //     author: 'Charles Pulliam-Moore',
  //     title: 'The Umbrella Academy excellent third season is an apocalyptic transition of power',
  //     description: 'By the end of the second season of Netflix’s The Umbrella Academy, the series had tackled two apocalypses and begun teasing out details on the small screen that hadn’t yet become canon in Dark Horse’s The Umbrella Academy comics from writer Gerard Way and artist Gabriel Bá.',
  //     urlToImage: 'https://cdn.vox-cdn.com/thumbor/94rmM-9BI4jBlevteZgojeXZ0Eo=/0x0:3600x1800/920x518/filters:focal(1682x1053:2258x1629)/cdn.vox-cdn.com/uploads/chorus_image/image/70979487/TheUmbrellaAcademy_Season3_Episode2_00_21_47_02R.0.jpeg',
  //   },
  //   {
  //     author: 'Justine Calma',
  //     title: 'A hidden polar bear population in Greenland might have found some refuge from climate change',
  //     description: 'A newly identified group of polar bears surprised researchers with how they’ve found a way to live with less sea ice. The group shows how some bears are coping with climate change.',
  //     urlToImage: 'https://cdn.vox-cdn.com/thumbor/bIHmmkvaavLK-6Lo-Xt7dzPPqQ8=/0x138:1920x1143/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23633101/Thomas_W_Johansen_NASA_Polar_Bear_Glacier_Ice.jpg',
  //   },
  // ];

  function Home() {
    const [articlesData, setArticlesData] = useState([]);
    const [topArticle, setTopArticle] = useState({});
    useEffect(() => {
      fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setArticlesData(data.articles);
            setTopArticle(data.articles[0]);
            setArticlesData(data.articles.filter((data, i) => i > 0));
          
        });
    }, []);
  

    const articles = articlesData.map((data, i) => {
      return <Article key={i} {...data} />;
    });
  


  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
      </Head>

      <TopArticle {...topArticle} />

      <div className={styles.articlesContainer}>
        {articles}
      </div>
    </div>
  );
}

export default Home;
