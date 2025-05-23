import React, { Component } from 'react';
import Navbar from './component/NavBar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 6;
  // apiKey = process.env.REACT_APP_NEWS_API
  state ={
    progress: 0
  }
setProgress = (progress)=>{
  this.setState({progress})}

  render() {
    return (
      <BrowserRouter>
        <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />
          <Routes>
            {/* Default path for the root route */}
            <Route path="/" element={ <News setProgress={this.setProgress} apiKey="17fdf676502a4a8d9ef34adfe9ebec05"  key="general" pageSize={this.pageSize} country="us" category="general" />} />

            <Route path="/science" element={ <News setProgress={this.setProgress} apiKey="17fdf676502a4a8d9ef34adfe9ebec05"  key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/business" element={ <News setProgress={this.setProgress} apiKey="17fdf676502a4a8d9ef34adfe9ebec05" key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={ <News setProgress={this.setProgress} apiKey="17fdf676502a4a8d9ef34adfe9ebec05" key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/general" element={ <News setProgress={this.setProgress} apiKey="17fdf676502a4a8d9ef34adfe9ebec05" key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route path="/health" element={ <News setProgress={this.setProgress} apiKey="17fdf676502a4a8d9ef34adfe9ebec05" key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/sports" element={ <News setProgress={this.setProgress} apiKey="17fdf676502a4a8d9ef34adfe9ebec05" key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={ <News setProgress={this.setProgress} apiKey="17fdf676502a4a8d9ef34adfe9ebec05" key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
