import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

import { addArticle } from '../../store/actions';

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

    addArticle({ title, id });
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input id="title" type="text" value={title} onChange={this.handleChange} />
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

const AddArticleForm = connect(null, mapDispatchToProps)(ConnectedAddArticleForm);

export default AddArticleForm;
