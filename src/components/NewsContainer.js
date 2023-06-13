import React, {useState, useEffect} from 'react'
import LoadingSpinner from './LoadingSpinner';
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';


const NewsContainer = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0); 

    // api news fetch
const newsFetch = async() => {
        let url = await `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;
        await setLoading(true);
        props.setProgress(10);
        // using fetch to grap api response
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json() //convert to json
        props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

const categoryCapitalize = (catstring) => {
   return catstring.charAt(0).toUpperCase()+catstring.slice(1);
}

    // pagination methods
// const pageChange = async (triggeType) => {
//         if (triggeType === 'next') {
//             await setPage(page+1);
//             console.log(page);
//         } else if (triggeType === 'previous') {
//             await setPage(page-1);
//             console.log(page);
//         }
//         newsFetch();
//     }

    // infinite scroll method which is called at each end of scroll...
    const fetchData = async () => {
        console.log('pno.',page)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;
        setPage(page+1);
        // using fetch to grap api response
        let data = await fetch(url);
        let parsedData = await data.json() //convert to json
        // concat previous plus present result
        setArticles(articles.concat(parsedData.articles));
    }

    //useeffect runs on first load
    useEffect(() => {
        // console.log("useEffect hook engaged");
        document.title = `${categoryCapitalize(props.category)} - Newsmouser`;
        newsFetch();
        // to disable eslint warning we use below comment
        // eslint-disable-next-line
      }, []);

    
        return (

            <div className="container">
                <h2 className="text-center" style={{margin:"85px 0px 30px 0px"}}>Top News Hunts in {categoryCapitalize(props.category)} </h2>
                {loading && <LoadingSpinner />}

                <InfiniteScroll
                    style={{overflow:"hidden"}}
                    dataLength={articles.length}
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={<LoadingSpinner />}
                >
                    <div className="container" style={{ overflowY: 'hidden' }}>
                    <div className="row">
                        {/* inverted conditional check */}
                        {!loading && articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} published={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>

                </InfiniteScroll>

                {/* <div className="d-flex justify-content-between my-4">
                    <button type="button" disabled={page <= 1} onClick={() => pageChange('previous')} className="btn btn-info">Previous</button>
                    <button type="button" disabled={page >= Math.ceil(totalResults / props.pageSize)} onClick={() => pageChange('next')} className="btn btn-info">Next</button>
                </div> */}
            </div>
        )
}


    // default proptypes
    NewsContainer.defaultProps = {
        country:'in',
        pageSize: 8,
        category: 'general',
    }

    // defining prop types
    NewsContainer.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    export default NewsContainer;
