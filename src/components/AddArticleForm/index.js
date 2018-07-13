import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { Input, Button } from 'rebass';

import { addArticle } from '../../store/actions';
import { CenteredFlex } from './styles';

const mapDispatchToProps = {
  addArticle,
};

class ConnectedAddArticleForm extends Component {
  static propTypes = {
    addArticle: PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title } = this.state;
    const { addArticle } = this.props;
    const id = uuidv1();
    const timestamp = new Date().valueOf();

    addArticle({ title, id, timestamp });
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <CenteredFlex width={[8 / 10, 6 / 10, 1 / 2]}>
          <Input
            placeholder="Name of a new article"
            id="title"
            value={title}
            mr={2}
            onChange={this.handleChange}
          />
          <Button type="submit">Save</Button>
        </CenteredFlex>
      </form>
    );
  }
}

const AddArticleForm = connect(null, mapDispatchToProps)(ConnectedAddArticleForm);

export default AddArticleForm;
