import React from 'react'
import { Formik, Form, Field } from 'formik'

class FormikExample extends React.Component {
  constructor() {
    super()

    this.state = {
      response: ''
    }
  }

  submit(values) {
    console.log(values)

    if (!values.not_handled) {
      delete values.not_handled
    }

    if (values.type === 'agent') {
      delete values.intent
    }

    window.fetch('https://chatbase-area120.appspot.com/api/message', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      // headers: {
      //     "Content-Type": "application/json",
      // },
      referrer: 'no-referrer',
      body: JSON.stringify(values)
    })
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            api_key: '',
            type: 'user',
            message: '',
            user_id: '',
            intent: '',
            not_handled: false,
            platform: '',
            version: ''
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.submit(values)
            setSubmitting(false)
          }}>
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="api_key" placeholder="api_key" />
              <br />
              <Field component="select" name="type">
                <option value="user">User</option>
                <option value="agent">Bot</option>
              </Field>
              <br />
              <Field type="text" name="message" placeholder="message" />
              <br />
              <Field type="text" name="user_id" placeholder="user id" />
              <br />
              <Field type="text" name="intent" placeholder="intent" />
              <br />
              <label>
                <Field type="checkbox" name="not_handled" /> Not handled
              </label>
              <br />
              <Field type="text" name="platform" placeholder="platform" />
              <br />
              <Field type="text" name="version" placeholder="version" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default FormikExample
