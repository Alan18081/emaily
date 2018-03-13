import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

import validateEmails from '../../utils/validateEmails';

import SurveyField from '../../components/SurveyField/SurveyField';

import fields from './formFields';

const validate = values => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients);
  fields.forEach(({name,noValueError}) => {
    if(!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

class SurveyForm extends Component {
  renderFields() {
    return fields.map(field => (
      <Field
        key={field.name}
        {...field}
        type="text"
        component={SurveyField}/>
    ))
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
          {this.renderFields()}
          <div>
            <Link to="/surveys">
              <button className="red white-text btn">Cancel</button>
            </Link>
            <button className="deep-purple right white-text btn">
              Next
              <i className="material-icons right">done</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);