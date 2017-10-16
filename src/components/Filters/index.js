import React, {Component}  from 'react';
import Categoryfilter from '../Categoryfilter';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col} from 'react-flexbox-grid';

export default class Filters extends Component {
  
  render() {
    return (
      <div>
            <Paper className='filterbox' children={
              <div>
                <h2>Filtros</h2>
                <Divider/>
                <h3>Edad</h3>
                <Row >
                  <Col sm={12} >
                    <TextField
                      floatingLabelText="Mínima"
                      floatingLabelFixed={true}
                    />
                  </Col>
                  <Col sm={12} >
                    <TextField
                      floatingLabelText="Máxima"
                      floatingLabelFixed={true}
                    />
                  </Col>
                </Row >
                <RaisedButton label="Aplicar" primary={true} fullWidth={true}/>
                <h3>Categorías</h3>
                <Categoryfilter/>
              </div>
            }/>
      </div>
    );
  }
}
