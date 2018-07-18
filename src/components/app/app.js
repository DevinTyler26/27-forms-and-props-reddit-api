import React from 'react';
import RedditList from '../list/list';
import { fetchData } from '../../lib/utils';

import './app.scss';

const redditApi = 'http://www.reddit.com/r';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      loading: false,
    };
  }

  load = (url) => {
    this.setState({ loading: true });
    return fetchData(url)
      .then((data) => {
        this.setState({ loading: false });
        return data;
      })
      .catch(console.error);
  }

  componentDidMount() {
  }

  redditSearch = (search, limit) => {
    const url = `${redditApi}/${search}.json?limit=${limit}`;
    return this.load(url)
      .then((threads) => {
        this.setState({ threads });
      })
      .catch(console.error);
  }

  render() {
    return (
      <main className="container">
      <RedditList 
        searchMethod={ this.redditSearch }
        threads={ this.state.threads }
      />
    </main>
    );
  }
}
