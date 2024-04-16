import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
  //   fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
  // }, [])
  // return (
  //   <div>
  //     <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
  //     {articles.map((news, index) => {
  //       return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
  //     })}    
  //   </div>
  // )

  // useEffect(() => {
  //   let url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=abed55f1b8794fe8804599d5e7763365';
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setArticles(data.articles))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  useEffect(() => {
    //  let url = 'https://newsapi.org/v2/top-headlines?country=us&category=' + category + '&apiKey=abed55f1b8794fe8804599d5e7763365';

     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=abed55f1b8794fe8804599d5e7763365`;
    // let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=abed55f1b8794fe8804599d5e7763365';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setArticles(data.articles);
        // console.log(articles);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);
  
  return (
//     <div>
//       <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
//       {articles.map((article, index) => (

//         <div key={index}>
//           <h3>{article.title}</h3>
//           <p>{article.description}</p>
//           <a href={article.url}>Read More...</a>
//         </div>
// ))}
//     </div>
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      <div className="card-container">
        {articles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            src={article.urlToImage}
            url={article.url}
          />
        ))}
    </div>
    </div>
  );
  
}

export default NewsBoard;

//