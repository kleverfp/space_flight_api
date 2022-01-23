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
        while(page <= totalPages){
            
            find_and_update_spacefight_db(page);
            page++;
            await sleep(5000);
        }
         
    } catch (error) {
        console.error(error.message);
    }
}

const find_and_update_spacefight_db = async(page)=>{
    try {
        const articles = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_sort=id%3Adesc&_start=${limit*(page-1)}`);
        sleep(2000);
        articles.data.map(async(article)=>{
            try {
                const local_article = await axios.get(`http://localhost:49160/articles/${article.id}`); 
                
                if(local_article.data){
                    console.log(local_article.data.id);
                    if(local_article.data.updatedAt !== article.updatedAt){
                        const res_update = await axios.put(`http://localhost:49160/articles/${article.id}`,article);
                    }
                    
                }
                else{
                    const res_update_local = await axios.post('http://localhost:49160/articles',article); 
                }
                
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

