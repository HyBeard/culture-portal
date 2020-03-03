import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';

class SearchPanel extends Component {
  state = {
    term: '',
  };

  onTermChange = (e) => {
    const { onSearchChange } = this.props;

    this.setState({
      term: e.target.value,
    });

    onSearchChange(e.target.value);
  };

  render() {
    const {
      onTermChange,
      state: { term },
    } = this;
    const { placeholder } = this.props;

    return <FormControl placeholder={placeholder} onChange={onTermChange} value={term} />;
  }
}

export default SearchPanel;
