import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNewsById } from "../store/actions/news";
import Loader from "./Loader";

class NewsDetail extends Component {

  componentDidMount() {
    const newsId = this.props.match.params.newsId;
    this.props.fetchNewsById(newsId)
  }

  render() {
    console.log('render', this.props);
    const { newsDetail, error } = this.props

    const detail = newsDetail ? (
      <Fragment>
        <div className="small pt-3 pb-3"><strong>Posted by: </strong> {newsDetail.author}</div>
        <h1>{ newsDetail.title }</h1>
        <div className="pt-3 pb-3">{newsDetail.body}</div>
        <hr />
        <h3>Comments:</h3>
        {
          newsDetail.comments.length ? newsDetail.comments.map(itemComment => {
            return (
              <div className="card bg-light mb-3" key={itemComment.id}>
                <div className="card-header">{itemComment.email}</div>
                <div className="card-body">
                  <h5 className="card-title">{itemComment.name}</h5>
                  <p className="card-text">{itemComment.body}</p>
                </div>
              </div>
            )
          }) : (<p>Comments none!</p>)
        }
        <hr />
        <Link to={`/`} className="btn btn-primary">Back to home</Link>
      </Fragment>
    ): !!error ? (<div className="col-12 text-center text-danger">{error}</div>)
      : (<Loader />)

    return (
      <div className="container pt-3 pb-3">
        { detail }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    newsDetail: state.news.newsDetail,
    error: state.news.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNewsById: id => dispatch(fetchNewsById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)