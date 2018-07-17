import React from 'react';
import { fetchData } from '../../lib/utils';

import './app.scss';

const redditApi = 'http://www.reddit.com/r/';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <main className="container">
      </main>
    );
  }
}
