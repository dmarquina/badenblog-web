import React,{ Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Checkboxlike extends Component{

  state = {
   checked: false,
  }

  updateCheck() {
   this.setState((oldState) => {
     return {
       checked: !oldState.checked,
     };
   });
  }

  render(){
    return (
      <Checkbox
        checkedIcon={<ActionFavorite />}
        uncheckedIcon={<ActionFavoriteBorder />}
        label="100"
        style={styles.checkbox}
      />
    )
  }

}

export default Checkboxlike;
