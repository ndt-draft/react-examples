import React from 'react'
import { Formik, Form, Field } from 'formik'

class Dashbot extends React.Component {
  constructor() {
    super()

    this.state = {
      response: ''
    }
  }

  submit(values) {
    console.log(values)

    let type = values.type === 'user' ? 'incoming' : 'outgoing'

    let data = {
      text: values.text,
      userId: values.userId,
      platformJson: {
        OS: 'Windows 10'
      }
    }

    window.fetch(
      `https://tracker.dashbot.io/track?platform=generic&v=10.1.1-rest&type=${type}&apiKey=${
        values.apiKey
      }`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Dashbot</h1>
        <Formik
          initialValues={{
            api_key: '',
            type: 'user',
            text: '',
            userId: ''
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.submit(values)
            setSubmitting(false)
          }}>
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="apiKey" placeholder="apiKey" />
              <br />
              <Field component="select" name="type">
                <option value="user">User</option>
                <option value="agent">Bot</option>
              </Field>
              <br />
              <Field type="text" name="text" placeholder="message" />
              <br />
              <Field type="text" name="userId" placeholder="user id" />
              <br />
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

export default Dashbot
