
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=17fdf676502a4a8d9ef34adfe9ebec05&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=17fdf676502a4a8d9ef34adfe9ebec05&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
      return (
            <div className="container my-3">
              <h1 className="text-center" style={{ margin: "40px " }} >Global - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
              {loading && <Spinner />}
              <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
              >
                <div className="container">
                  <div className="row">
                    {articles.map((element, index) => {
                      return <div className="col-md-4" key={`${element.url}-${index}`}>
                        <NewsItem title={element.title.slice(0, 50)} description={element.description ? element.description.slice(0, 80) : "Description not available"} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                      </div>
                    })}
        
                  </div>
                </div>
              </InfiniteScroll>
            </div>
          );
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News


// import React, { useEffect, useState } from "react";
// import NewsItems from "./NewsItems";
// import Spinner from "./Spinner";
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1)
//   const [totalResults, setTotalResults] = useState(0)

//   // document.title = `Kantipur News - ${capitalizeFirstLetter(props.category)}`;

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const updateNews = async () => {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
//     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
//     // const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=17fdf676502a4a8d9ef34adfe9ebec05&page=${page}&pagesize=${props.pageSize}`;
//     setLoading(true)
//     let data = await fetch(url);
//     props.setProgress(40);
//     let parsedData = await data.json()
//     props.setProgress(70);

//     setArticles(parsedData.articles)
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
//     props.setProgress(100);
//   }


//   // useEffect(() => {
//   //   updateNews();
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);

//   useEffect(() => {
//     document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
//     updateNews(); 
//     // eslint-disable-next-line
// }, [])

//   const fetchMoreData = async () => {
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//     setPage(page + 1)

//     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)
//   };



//   return (
//     <div className="container my-3">
//       <h1 className="text-center" style={{ margin: "40px " }} >Kantipur - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//       {loading && <Spinner />}
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//       >
//         <div className="container">
//           <div className="row">
//             {articles.map((element, index) => {
//               return <div className="col-md-4" key={`${element.url}-${index}`}>
//                 <NewsItems title={element.title.slice(0, 50)} description={element.description ? element.description.slice(0, 80) : "Description not available"} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//               </div>
//             })}

//           </div>
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };


// News.defaultProps = {
//   country: 'us',
//   pageSize: 6,
//   category: 'general'

// };


// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
// export default News
