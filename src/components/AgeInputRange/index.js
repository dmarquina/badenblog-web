import React from 'react';
import InputRange from 'react-input-range';
import Subheader from 'material-ui/Subheader';
import ChipInput from 'material-ui-chip-input'

const styles = {
  ageInput:{
    margin:'10px 0',
  },
  subheader:{
    paddingLeft:'0',
    color:'#BA68C8',
  },
  ageInputRange:{
    margin:'10px 0',
  },

};

class AgeInputRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 1, max: 12 },
    };
  }

  render() {
    return (
        <div style={styles.ageInput}>
            <Subheader style={styles.subheader}>Edad</Subheader>
            <InputRange style={styles.ageInputRange}
                maxValue={21}
                minValue={0}
                value={this.state.value}
                onChange={value => this.setState({ value })} />
                <ChipInput defaultValue={['foo', 'bar']}
/>
        </div>
    );
  }
}

export default AgeInputRange;