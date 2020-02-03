import React, { Component } from 'react'
import NewsCard from "./NewsCard"
import { connect } from 'react-redux'
import { fetchNews } from "../store/actions/news";
import Loader from "./Loader";

class NewsList extends Component {

  componentDidMount() {
    this.props.fetchNews()
  }

  render() {

    const { news, error } = this.props;

    const newsList = news.length ? (
      news.map(item => {
        return <NewsCard {...item} key={item.id} />
      })
    ) :
      !!error ? (<div className="col-12 text-center text-danger">{error}</div>)
        : (<Loader />)

    return (
      <div className="container pt-3 pb-3">
        <h1>News</h1>
        <div className="row">
          { newsList }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news,
    error: state.news.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)