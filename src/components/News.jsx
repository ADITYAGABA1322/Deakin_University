import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Proptypes from'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
     
     const[articles,setArticles]=useState([]);
     const[loading,setLoading]=useState(true);
     const[page,setPage]=useState(1);
     const[totalResults,setTotalResults]=useState(0);
  document.title=`${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`

  const updateNews=async()=>{
    props.setProgress(10);
    console.log('page number->',page)
    const  url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${
      page 
    }&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles( parseData.articles)
    setTotalResults(parseData.totalResults)
    console.log(`Total ${props.category} articles`,parseData.totalResults)
    setLoading(false);
     props.setProgress(100);
  }
  useEffect(()=>{
      updateNews()

  },[])
const  fetchMoreData = async() => {
  const  url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${
    page +1}&pageSize=${props.pagesize}`;
  setPage(page+1);
  console.log('page number->',page)
   let data = await fetch(url);
   let parseData = await data.json();
   setArticles( articles.concat(parseData.articles))
  };
 
    return (
      <div className="container my-3">
  <div className="row" style={{ marginTop: '50px' }}>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner />}
    >
      <div className='container'>
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  url={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  </div>
</div>
    );
  
}
News.defaultProps={
  title:'Title',
  country:'in',
  pageSize:5
   }
   News.propTypes={
   country:Proptypes.string,
   pageSize:Proptypes.number
   }
export default News;
