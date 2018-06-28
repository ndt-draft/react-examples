import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AboutForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

AboutForm = reduxForm({
  form: 'about'
})(AboutForm);

const About = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  // https://github.com/erikras/redux-form/issues/1270#issuecomment-239636759
  return (
    <div>
      <h1>About Page</h1>
      <AboutForm onSubmit={handleSubmit} />
    </div>
  );
};

export default About;
