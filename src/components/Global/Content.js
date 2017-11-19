import React, { Component } from 'react';
import { Row, Col} from 'react-flexbox-grid';
import { PropTypes } from 'prop-types';

import './css/Content.css';

const ROOT = 'https://badenblog-api.herokuapp.com/';
const postsByCategoryEnpoint = 'post/byCategory';
const postsActiveEnpoint = 'post/actives';
const searchPostEnpoint = 'post/search/';

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };
  
  render() {
    const { body } = this.props;
    return (
    	<div>
       {body}
      </div>
    );
  }
}

export default Content;
