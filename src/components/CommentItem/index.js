// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, onDeleteComment} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails
  const postedTime = formatDistanceToNow(date)
  const likeTextClassName = isLiked ? 'activeBtn' : 'button2'

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const initial = name ? name[0].toUpperCase() : ''

  const onClickLikeBtn = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteBtn = () => {
    onDeleteComment(id)
  }

  return (
    <li className="comment-list-item-container">
      <div className="comment-item">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div className="name-time-container">
          <p className="name">{name}</p>
          <p className="posted-time">{postedTime} ago</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <div className="button-container">
        <div className="like-container">
          <img src={likeImageUrl} className="like-image" alt="like" />
          <button
            type="button"
            className={likeTextClassName}
            onClick={onClickLikeBtn}
          >
            Like
          </button>
          <button
            className="button2 deleteBtn"
            type="button"
            onClick={onClickDeleteBtn}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
