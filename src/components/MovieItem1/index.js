import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player/lazy'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem1 = props => {
  const {MovieItem1Data} = props
  const {thumbnailUrl, videoUrl} = MovieItem1Data
  return (
    <div className="movie-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-logo"
            />
          </button>
        }
        className="pop-up-container"
      >
        {close => (
          <div className="main-container1">
            <ReactPlayer url={videoUrl} className="react-video-size" />

            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem1
