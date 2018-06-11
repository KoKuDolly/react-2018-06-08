import React from 'react'
import PropTypes from 'prop-types'
import Hobby from '../Hobby/index'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: 0,
      hobbies: ['skateboarding', 'rock music']
    }
    // this.likedCallback = ::this.likedCallback
    this.likedCallback = this.likedCallback.bind(this)
    this.addHobbyCallback = this.addHobbyCallback.bind(this)
  }
  getDefaultProps() {}
  getInitialState() {}
  componentWillMount() {}
  componentDidMount() {
    setTimeout(() => {
      this.likedCallback()
    },1000)
  }
  componentWillReceiveProps() {}
  shouldComponentUpdate() { return true }
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  likedCallback() {
    let { liked } = this.state
    // liked = this.state.liked
    liked += 1
    this.setState({
      liked
    })
  }
  addHobbyCallback() {
    const val = this.inputValue.value
    if (val){
      let { hobbies } = this.state
      hobbies = [...hobbies, val]
      this.setState({
        hobbies
      },() => {
        this.inputValue.value = ''
      })
    }
  }
  render() {
    return (
      <div className="container">
        <h1>我的名字叫{this.props.name}</h1>
        <h2>我今年{this.props.age}岁</h2>
        <button onClick={this.likedCallback}>给我点赞</button>
        <h2>总点赞数: {this.state.liked}</h2>
        <h2>我的爱好:</h2>
        <ul>
          {this.state.hobbies.map((v,i) => {
            return <Hobby key={i} hobby={v} />
          })}
        </ul>
        <input type="text" ref={(input) => { this.inputValue = input }} />
        <button onClick={this.addHobbyCallback}>添加爱好</button>
      </div>
    )
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
