import React from 'react'
import axios from 'axios'
/*  eslint-disable */
export default class TestApi extends React.Component {
  componentDidMount() {
    // do something
  }
  getTopics() {
    axios.get('/api/topics')
      .then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
  }
  login () {
    axios.post('api/user/login', {
      accessToken: '130e394a-e5e4-4c1c-af66-e6cf4cc99a2e'
    }).then(resp => {
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  }

  markAll() {
    axios.post('api/message/mark_all?needAccessToken=true')
      .then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    )
  }
}
/*  eslint-enable */
