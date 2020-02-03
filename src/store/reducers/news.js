import {FETCH_ERROR, FETCH_NEWS, FETCH_NEWS_DETAIL} from "../actions/actionTypes"

const initialState = {
  news: [],
  newsDetail: null,
  error: null
}

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsDetail: null,
        news: action.news
      }
    case FETCH_ERROR:
      return {
        ...state,
        error: action.error
      }
    case FETCH_NEWS_DETAIL:
      return {
        ...state,
        newsDetail: action.newsItem
      }
    default:
      return state;
  }
}