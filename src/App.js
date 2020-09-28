import React, { useState } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import Grid from "react-mdl"
import Cell from "react-mdl"
import { Link } from "react-router-dom"
import MediaCard from "./components/card"
import API from "./utils/API";
import SortButton from './components/sortButton';
import CreateNewMedia from "./components/createnewmedia";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faBook, faFilm, faGamepad, faMusic, faTv } from "@fortawesome/free-solid-svg-icons"

class App extends React.Component {
  state = {
    mediaList: [],
    initialList: []
  };

  componentDidMount() {
    API.getFullMediaList()
      .then(res => this.setState({mediaList: res.data, initialList: res.data}))
      .catch(err => console.log(err));
  };

  getFullMediaList = () => {
    API.getFullMediaList()
      .then(res => this.setState({ mediaList: res.data }))
      .catch(err => console.log(err));
  }

  filterType = (array, filter) => {
    let filtered = []
    
    for (let x=0; x < array.length; x++) {
      if (filter === "none") {
        filtered = this.state.initialList;
      }
      
      else if (array[x].type.includes(filter)) {
        filtered.push(array[x]);
      }
    }
    
    this.setState({
      mediaList: filtered
    })
  }

  render() {
    return (
      <div className="demo-big-content">
            <Layout>
              <Header title="Sample Title" className= "header" scroll>
                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/movies">Movies</Link>
                  <Link to="/books">Books</Link>
                </Navigation>
              </Header>
              <Drawer title="Title">
                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/movies">Movies</Link>
                  <Link to="/books">Books</Link>
                </Navigation>
              </Drawer>
              <Content>
                <SortButton text={"Filter by type: Books"} onClick={() => this.filterType(this.state.mediaList, "book")} />
                <SortButton text={"Clear filters"} onClick={() => this.filterType(this.state.mediaList, "none")} />
                <CreateNewMedia mainApp={this} />
                {this.state.mediaList.map(media => (
                  <MediaCard title={media.title} status={media.status} type={media.type} date={media.date} />
                ))}
              </Content>
            </Layout>
      </div>
    )
  }
}

export default App; 
