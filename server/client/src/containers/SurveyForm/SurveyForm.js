import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

import SurveyField from '../../components/SurveyField/SurveyField';
import Spinner from '../../components/UI/Spinner/Spinner';

import fields from './formFields';
import validateForm from '../../utils/validate';

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
      <div style={{marginBottom: '20px'}}>
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
            <div onClick={this.props.onSave} className="waves-light right white-text btn" style={{margin:'0 10px'}}>
              Save
              <i className="material-icons right">save</i>
            </div>
            {this.props.loading ? <Spinner size="3px" position="right"/> : null}
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
    form: 'surveyForm',
    validate: values => validateForm(fields,values),
    destroyOnUnmount: false
  })(SurveyForm);