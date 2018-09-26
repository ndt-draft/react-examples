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

    let type = values.type === 'user' ? false : true

    let data = {
      is_sender_bot: type,
      user: {
        id: values.userId,
        name: values.userName
      },
      message: {
        timestamp: Date.now(),
        text: values.text
      }
    }

    console.log(data)

    window.fetch(`https://api.botanalytics.co/v1/messages/generic/`, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      referrer: 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${values.api_key}`
      },
      body: JSON.stringify(data)
    })
  }

  render() {
    return (
      <div>
        <h1>Botanalytics</h1>
        <Formik
          initialValues={{
            api_key: '',
            type: 'user',
            text: '',
            userId: '',
            userName: ''
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
              <Field type="text" name="userName" placeholder="user name" />
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
