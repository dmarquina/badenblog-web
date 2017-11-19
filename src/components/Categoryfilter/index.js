import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class Categoryfilter extends Component {
  state = {
    categories:[],
    values: [],
  };

  async componentDidMount(){
    const response = await axios.get('https://badenblog-api.herokuapp.com/category/all')
    this.setState({categories : response.data.content});
  }
  
  onClick(){
    this.props.onClick(this.state.values);
  }

  handleChange = (event, index, values) => {
    this.setState({values});
  }

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        let categorySelected = this.state.categories.find((cat)=> values[0]===cat.idCategory);
        return categorySelected.name; 
      default:
        return `${values.length} categorias seleccionadas`;
    }
  }

  menuItems(categories) {
    return categories.map((category) => (
      <MenuItem
        key={category.idCategory}
        insetChildren={true}
        checked={this.state.values.indexOf(category.idCategory) > -1}
        value={category.idCategory}
        primaryText={category.name}
      />
    ));
  }

  render() {
    return (
      <div>
        <SelectField
          multiple={true}
          hintText="Selecciona categorias"
          value={this.state.values}
          onChange={this.handleChange}
          selectionRenderer={this.selectionRenderer}
          maxHeight={250}
        >
          {this.menuItems(this.state.categories)}
        </SelectField>
        <RaisedButton label="Aplicar" onClick={this.onClick.bind(this)}
                      primary={true} fullWidth={true}/>
      </div>
    );
  }
}

export default Categoryfilter;
