import Slider from 'react-slick'

import MovieItem1 from '../MovieItem1'

import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const ActionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <Slider {...settings} className="slider-container">
      {ActionMoviesList.map(eachItem => (
        <MovieItem1 MovieItem1Data={eachItem} key={eachItem.categoryId} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
