import React, { Component } from "react"
import Moment from "react-moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faFilm, faGamepad, faMusic, faTv } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"



export default class MediaCard extends Component {
  constructor(props) {
    super()
    // works as expected, returns an object from the db
    console.log(props);
  }

  render() {

    const icons = {
      "book": faBook,
      "movie": faFilm,
      "album": faMusic,
      "show": faTv,
      "game": faGamepad
    }

    // works as expected, returning types of media 
    console.log(this.props.type);

    let media_type = null;
    console.log(media_type);

    // checks type on prop against icons object, media_type set equal to key with matching value
    // *ignore now see subsequent comment* media_type currently coming back as undefined !!!!!!!!!! work here !!!!!!!!!
    // okay for some reason now it does indeed return an object from fontawesome, icon doesn't show up though
    // i don't think it's expecting what is being passed in
    // for 9/28/20 test: hard code fontawesome icon names to see if they're valid
    media_type = icons[this.props.type]
    console.log(media_type);

    return (
      <div className="media-cards" style={{ width: "50%" }}>
        <div className="title-div">
          <a>{this.props.title}</a>
        </div>

        <div className="status-div">
          <p>Status: {this.props.status}</p>
        </div>

        <div className="type-div">
          <p>Type: {this.props.type}</p>
          <i className="fa-5x"><FontAwesomeIcon icon={media_type} /></i>
        </div>

        <div className="date-div">
          <p>Date: {<Moment format="YYYY/MM/DD"></Moment>}</p>
        </div>
        <input className="comment" placeholder="comment"></input>
      </div>
    )
  }
}