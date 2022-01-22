const axios = require('axios');
const limit =10;


// or re-usable `sleep` function:

  
  const sleep = (ms)=> {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

const getArticle = async()=>{
    
    try {
        const articles_count = await axios.get('https://api.spaceflightnewsapi.net/v3/articles/count');
        const totalPages =  Math.ceil(articles_count.data / limit);
        let page =1;
        console.log(totalPages);
        while(page <= totalPages){
            send_article_to_spaceflight_database(page);
            page++;
            await sleep(500);
        }
         
    } catch (error) {
        console.error(error.message);
    }
}

const send_article_to_spaceflight_database = async(page)=>{
    try {
        const articles = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_sort=id%3Adesc&_start=${limit*(page-1)}`);
        
        articles.data.map(async(article)=>{
            try {
                const res = await axios.post('http://localhost:49160/articles',article); 
                console.log(article.id);
            } catch (error) {
                console.error(error.message);
            }
            
        });
    }
    catch (error) {
        console.error(error.message);
    }
}

getArticle();

