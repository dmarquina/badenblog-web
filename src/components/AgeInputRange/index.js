import React from 'react';
import InputRange from 'react-input-range';
import Subheader from 'material-ui/Subheader';

const styles = {
  ageInput:{
    margin:'10px 0',
  },
  subheader:{
    paddingLeft:'0',
  },
  ageInputRange:{
    margin:'10px 0',
  },

};

class AgeInputRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 7, max: 12 },
    };
  }

  render() {
    return (
        <div style={styles.ageInput}>
            <Subheader style={styles.subheader}>Edad</Subheader>
            <InputRange style={styles.ageInputRange}
                maxValue={21}
                minValue={7}
                value={this.state.value}
                onChange={value => this.setState({ value })} />
        </div>
    );
  }
}

export default AgeInputRange;