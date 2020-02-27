import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class SearchAuthor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            authorsHandled: this.props.authorsList,
        };
    }

    changeHandler = ({ target: {value} }) => {
        const { authorsList } = this.props;
        const newList = authorsList.filter((item) => {
            const indexOfNonFinded = -1;
            const checkName = item.name.toLowerCase();
            const checkValue = value.toLowerCase();
            const index = checkName.indexOf(checkValue);
            return index !== indexOfNonFinded;
        });
        this.setState({ query: value, authorsHandled: newList });
    }

    render(){
        const { child, title, placeholder } = this.props;
        console.log(this.state.authorsHandled);
        // Get input trhough child
        /*
        <SearchAuthor authorsList={[
          {name: '1123'},
          {name: 'anton'},
          {name: 'jora'},

        ]}/>
        */
        return (
            <div>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" />
                    <FormControl
                        placeholder={placeholder}
                        onChange={this.changeHandler}
                    />
                </InputGroup.Prepend>
                </InputGroup>
            </div>
        )
    }
}

export default SearchAuthor;
