import React from 'react'
import PropTypes from 'prop-types'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: 0
    }
    this.likedCallback = ::this.likedCallback
  }
  likedCallback() {
    let { liked } = this.state
    // liked = this.state.liked
    liked += 1
    this.setState({
      liked
    })
  }
  render() {
    return (
      <div className="container">
        <h1>我的名字叫{this.props.name}</h1>
        <h2>我今年{this.props.age}岁</h2>
        <button onClick={this.likedCallback}>给我点赞</button>
        <h2>总点赞数: {this.state.liked}</h2>
      </div>
    )
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}
