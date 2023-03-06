// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {FeedBack: true}

  onChangeResponse = () => {
    this.setState({FeedBack: false})
  }

  MainPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="cont-to-MainPage">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="ul-style">
          {emojis.map(emoj => (
            <li className="list-style" key={emoj.id}>
              <button
                className="button-style"
                type="button"
                onClick={this.onChangeResponse}
              >
                <img src={emoj.imageUrl} alt={emoj.name} className="img" />
                <p className="para">{emoj.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  FeedBackPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="cont-to-MainPage">
        <img src={loveEmojiUrl} alt="love emoji" className="img" />
        <h1 className="">Thank You</h1>
        <p className="para2">
          We will use your feedback to improve our customer support service{' '}
        </p>
      </div>
    )
  }

  render() {
    const {FeedBack} = this.state
    return (
      <div className="container1">
        <div className="container2">
          {FeedBack ? this.MainPage() : this.FeedBackPage()}
        </div>
      </div>
    )
  }
}
export default Feedback
