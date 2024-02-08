import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utulis/Config.js";
const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  console.log(featuredTours);
  return (
    <>
      {loading && <h4>Loading.............</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col key={tour._id} lg="3" md="6" sm="6" className="mb-4">
            {<TourCard tour={tour} />}
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
