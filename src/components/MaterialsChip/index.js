import React from 'react';
import Subheader from 'material-ui/Subheader';
import ChipInput from 'material-ui-chip-input'

const styles = {
  ageInput:{
    margin:'10px 0',
  },
  subheader:{
    paddingLeft:'0',
  },


};

class MaterialsChip extends React.Component {

  render() {
    return (
        <div >
            <Subheader style={styles.subheader}>Materiales</Subheader>
            <ChipInput className="chipInput" defaultValue={['foo', 'bar']}/>
        </div>
    );
  }
}

export default MaterialsChip;