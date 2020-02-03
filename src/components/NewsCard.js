import React from 'react'
import { Link } from "react-router-dom"

const NewsCard = props => (
  <div className="col-md-4">
    <div className="news-card card">
      <div className="card-body">
        <h5 className="card-title">{props.title.slice(0, 27)} {props.title.length >= 27 ? '...' : null}</h5>
        <p className="card-text">{props.body.slice(0, 75)} {props.body.length >= 75  ? '...' : null}</p>
        <Link to={`/${props.id}`} className="btn btn-primary">Read more</Link>
      </div>
    </div>
  </div>
)

export default NewsCard