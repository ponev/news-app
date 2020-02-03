import axios from 'axios';
import {
  FETCH_NEWS,
  FETCH_ERROR, FETCH_NEWS_DETAIL
} from "./actionTypes";

export const fetchNews = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {

        const list = response.data.slice(0, 12)
        dispatch(fetchNewsList(list));

      })
      .catch(error => {
        dispatch(fetchError(error.message))
      })
  }
}

export const fetchNewsById = newsId => {
  return dispatch => {

    const newsItem = {};

    axios.get(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
      .then(response => {
        newsItem.title = response.data.title
        newsItem.body = response.data.body

        return axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
      })
      .then(response => {
        newsItem.author = response.data.name

        return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${newsId}`)
      })
      .then(comments => {
        newsItem.comments = comments.data

        dispatch(fetchNewsDetail(newsItem))
      })
      .catch(error => {
        dispatch(fetchError(error.message))
      })

  }
}

export const fetchNewsList = list => {
  return {
    type: FETCH_NEWS,
    news: list
  }
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error
  }
}

export const fetchNewsDetail = newsItem => {
  return {
    type: FETCH_NEWS_DETAIL,
    newsItem
  }
}