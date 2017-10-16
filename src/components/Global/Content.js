import React, { Component } from 'react';
import { Row, Col} from 'react-flexbox-grid';
import Posts from './../Posts';
import Filters from './../Filters';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
    	<div className="Content">
      <Row>
        <Col xs={12} md={3} lg={3}>
          <Filters/>
        </Col>
        <Col xs={12} md={9} lg={9}>
          <Posts />
        </Col>
      </Row>
      </div>
    );
  }
}

export default Content;
