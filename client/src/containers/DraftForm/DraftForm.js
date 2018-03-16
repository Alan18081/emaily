import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SurveyField from '../../components/SurveyField/SurveyField';
import Spinner from '../../components/UI/Spinner/Spinner';

import fields from '../SurveyForm/formFields';
import validateForm from '../../utils/validate';
import draftSelector from '../../selectors/draftInfo';

class DraftForm extends Component {
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
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
          {this.renderFields()}
          <div>
            <Link to="/drafts">
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

const mapStateToProps = state => {
  return {
    initialValues: draftSelector(state),
    loading: state.drafts.loading
  }
};

export default connect(mapStateToProps)(
  reduxForm({
    form: 'draftForm',
    validate: values => validateForm(fields,values),
    destroyOnUnmount: false
  })(DraftForm)
);