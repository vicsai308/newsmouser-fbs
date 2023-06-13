// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import NewsContainer from './components/NewsContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSizeno = 10;
  const countryselected = "in";

  // process.env is used to fetch enviroment variables

  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progressPercentage, setProgressPercentage] = useState(0);

const setProgress = (status) => {
  setProgressPercentage(status);
}
    return (
      <div className="App">
        <Router>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={progressPercentage}
        // onLoaderFinished={() => setProgressPercentage(0)}
      />
        <Routes>
          {/* since componentdidmount wont re-render since the render component is exactly same, we provide unique "key" prop to make each 
          component re-render is unique in this way the componentdidmount will understand the developer is trying to render same component uniquely 
          along with updated props. This method is called component force remount */}
          <Route exact path="/" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSizeno} country={countryselected} category="general" />} />
          <Route exact path="/business" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSizeno} country={countryselected} category="business" />} />
          <Route exact path="/entertainment" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSizeno} country={countryselected} category="entertainment" />} />
          <Route exact path="/health" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSizeno} country={countryselected} category="health" />} />
          <Route exact path="/science" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSizeno} country={countryselected} category="science" />} />
          <Route exact path="/sports" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSizeno} country={countryselected} category="sports" />} />
          <Route exact path="/technology" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSizeno} country={countryselected} category="technology" />} />
        </Routes>

      </Router>
      </div>
    )
}


export default App;
