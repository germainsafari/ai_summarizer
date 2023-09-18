import { useState, useEffect } from "react";
import { copy, loader, linkIcon, tick } from "../assets";
import {useLazyGetSummaryQuery} from '../services/article';

function Demo() {

  const [article, setArticle] = useState({url:'', summary:'',})

  const [AllArticles, setAllArticles] = useState([]);

  const[getsummary, {error, isFetching}] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))

    if(articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }

  },[]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {data} = await getsummary({articleUrl: article.url})
  };

  if (data?.summary) {
    const newArticle = {...article, summary: data.summary};

    const updatedAllArticles = [newArticle, ... allArticles];  

    setArticle(newArticle);
    console.log(newArticle);

    localStorage.setItem('articles', JSON.stringify(updatedAllArticles))

  }

  return (
    <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col w-full gap-2">
            <form className="relative flex justify-center items-center"
             onSubmit={(handleSubmit) => {}}
             
             >
                
              <img src={linkIcon} alt="" 
                className="absolute left-0 my-2 ml - 3 w-5"/>

              <input type="url"
                placeholder="Enter a URL"
                value={article.url}
                onChange={(e) => setArticle({... article, url:e.target.value})}
                required
                className="url_input peer" />
                <button 
            type="submit"
            className="submit_btn peer-focus:border-gray-700 
                                  peer-focus:text-gray-700">
                ✔️
            </button>
            </form>   
            
            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
            {allArticles.map((item, index) => (
              div
            ))}
            </div>

        </div>
    </section>
  )
}

export default Demo