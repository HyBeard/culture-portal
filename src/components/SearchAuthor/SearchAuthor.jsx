import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

import Link from '../Link';
import SearchBar from '../SearchBar';

class SearchAuthor extends Component {
  static termIsInString(term, string) {
    return string.toLowerCase().includes(term.toLowerCase());
  }

  constructor(props) {
    super(props);
    const { authorsNodes, fieldsToSearchFor } = this.props;
    this.state = {
      query: '',
      fieldsToSearchFor,
      authorsNodes,
    };
  }

  onSearchChange = (query) => {
    this.setState({ query });
  };

  getRelevantAuthors() {
    const { authorsNodes, fieldsToSearchFor, query } = this.state;

    if (!query.length) {
      return authorsNodes;
    }

    return authorsNodes.filter((node) => {
      return fieldsToSearchFor.some((field) => SearchAuthor.termIsInString(query, node[field]));
    });
  }

  render() {
    const {
      onSearchChange,
      state: { query },
    } = this;

    const relevantAuthorsNodes = this.getRelevantAuthors();

    return (
      <div className="search-author">
        <InputGroup className="mb-3">
          <SearchBar placeholder="placeholder" onSearchChange={onSearchChange} value={query} />
        </InputGroup>
        <Table responsive>
          <tbody>
            {relevantAuthorsNodes.map((node, index) => {
              const key = `author: ${index}`;
              const { name, path, birthPlace } = node;
              return (
                <tr key={key}>
                  <td>
                    <Link to={`/${path}` || '#'}>{name}</Link>
                    <p>{birthPlace}</p>
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
