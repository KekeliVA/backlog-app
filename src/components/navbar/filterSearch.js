import React, { Component } from "react";
import data from "../../models/media";

class SearchFilter extends Component{
    state = {
      title: [] ,
      type: [],
      date: [],
      status: []
      };
  
  render(){
    // let filteredStatus = this.props.status.filter(
    //   (status) =>{
    //     return status.type.indexOf(this.state.search) !== -1;
    //   }
    // );
    return (
        <div>
          <ul id="mediaStatus">
            {data.filter(data => data.status === "In Progress").map (filteredMedia =>(
                <li>
                  {filteredMedia.status}
                </li>
              ))};
          </ul> 
          <ul id="mediaStatus">
            {data.filter(data => data.status === "Complete").map (filteredMedia =>(
                <li>
                  {filteredMedia.status}
                </li>
              ))};
          </ul> 
          <ul id="mediaStatus">
            {data.filter(data => data.title === "" ).map (filteredMedia =>(
                <li>
                  {filteredMedia.title}
                </li>
              ))};
          </ul> 
        </div>
    )

  }
}
export default SearchFilter;