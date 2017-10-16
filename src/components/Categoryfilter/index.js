import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const persons = [
  {value: 0, name: 'Campamento'},
  {value: 1, name: 'Grupos gandres'},
  {value: 2, name: 'Grupos pequeños'},
  {value: 3, name: 'Duelo'},
  {value: 4, name: 'Otros juegs'},
  {value: 5, name: 'Otros juegs'},
  {value: 6, name: 'Otros juegs'},
  {value: 7, name: 'Otros juegs'},
  {value: 8, name: 'Otros juegs'},
  {value: 9, name: 'Otros juegs'},
];

/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
class Categoryfilter extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return persons[values[0]].name;
      default:
        return `${values.length} categorias seleccionadas`;
    }
  }

  menuItems(persons) {
    return persons.map((person) => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        checked={this.state.values.indexOf(person.value) > -1}
        value={person.value}
        primaryText={person.name}
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
          {this.menuItems(persons)}
        </SelectField>
        <RaisedButton label="Aplicar" primary={true} fullWidth={true}/>
      </div>
    );
  }
}

export default Categoryfilter;
