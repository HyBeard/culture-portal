import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import { Link } from 'gatsby';

class SearchAuthor extends Component {
  constructor(props) {
    super(props);
    const { authors } = this.props;
    this.state = {
      query: '',
      authorsHandled: authors,
    };
  }

  changeHandler = ({ target: { value } }) => {
    const { authors } = this.props;
    const newList = authors.filter((item) => {
      const indexOfNonFinded = -1;
      const checkName = item.name.toLowerCase();
      const checkValue = value.toLowerCase();
      const index = checkName.indexOf(checkValue);
      return index !== indexOfNonFinded;
    });
    this.setState({ query: value, authorsHandled: newList });
  };

  render() {
    const { placeholder, children } = this.props;
    const { authorsHandled, query } = this.state;
    return (
      <div className="search-author">
        {children}
        <InputGroup className="mb-3">
          <FormControl placeholder={placeholder} onChange={this.changeHandler} value={query} />
        </InputGroup>
        <Table responsive>
          <tbody>
            {authorsHandled.map((author, index) => {
              const key = `author: ${index}`;
              const { name, to } = author;
              return (
                <tr key={key}>
                  <td>
                    <Link to={to || '#'}>{name}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SearchAuthor;
