import "./TourCard.css";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import calclateAvgRating from "../utulis/AvgRating";

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, featured, price, reviews } = tour;
  const { totalRating, avgRating } = calclateAvgRating(reviews);

  const image = () => {
    let image = require(`../assets/images/${photo}`);
    return image;
  };

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={image(photo)} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>
      </Card>
      <CardBody>
        <div className="card__top ">
          <span className="tour__location ">
            <i class="ri-map-pin-line"></i>
            {city}
          </span>
          <span className="tour__rating ">
            <i class="ri-star-fill"></i>
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "not rated" : <span>({reviews.length})</span>}
          </span>
        </div>
        <h5 className="tour__title">
          <Link to={`/tours/${_id}`}>{title}</Link>
        </h5>
        <div
          className="card__bottom d-flex align-items-center 
        justify-content-between mt-3">
          <h5>
            ${price} <span>/per person</span>
          </h5>
          <button className="btn booking__btn">
            <Link to={`/tours/${_id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
};

export default TourCard;
