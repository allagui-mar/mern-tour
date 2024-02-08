import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import world from ".././assets/world.png";
import HeroImage from "../assets/hero.jpg";
import HeroImage2 from "../assets/hero2.jpg";
import experienceImg from "../assets/images/experienceImg.png";
import videoLink from "../assets/videos/videoLink.mp4";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tour/FeaturedTourList";
import MassoneryImageGallery from "../components/ImageGallery/MassoneryImageGallery";
import Testimonial from "../components/testimonial/Testimonial";
import NewsLettre from "../shared/NewsLettre";

const Home = () => (
  <>
    {/* hero secton start */}
    <section>
      <Container>
        <Row className="d-flex">
          <Col className="hero1" lg="6">
            <div className="hero__content ">
              <div className="hero__subtitle ">
                <Subtitle subtitle={"know Before You Go"} />
                <img src={world} alt="" />
              </div>
              <h1>
                Travelings opens the door to Creating
                <span className="highlight"> memories</span>
              </h1>
              <p>
                lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut vel ducimus reprehenderit iusto distinctio ea
                perferendis, deleniti quis incidunt quisquam rem eveniet unde
                veritatis ipsam id illum ratione nemo quasi.
              </p>
            </div>
          </Col>
          <Col lg="2 ">
            <div className="hero__img-box">
              <img src={HeroImage} alt="" />
            </div>
          </Col>
          <Col lg="2 ">
            <div className="hero__img-box hero__video-box mt-4">
              <video src={videoLink} controls={true} alt="" />
            </div>
          </Col>
          <Col lg="2 ">
            <div className="hero__img-box mt-5  ">
              <img src={HeroImage2} alt="" />
            </div>
          </Col>
          <SearchBar className="search-bar" />
        </Row>
      </Container>
    </section>
    {/* section Hero start */}
    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="services__subtitle"> What we server</h5>
            <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>
    {/* featured section  */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/*Featured section Fin  */}

    {/* Experience section Debut */}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"} />
              <h2>
                With our all experience <br />
                We will serve you
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br />
                Eveniet iusto, vero at vitae, quas magnam <br />
                provident ipsa
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter_box">
                <span>12K+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter_box">
                <span>2K+</span>
                <h6>Regular clents</h6>
              </div>
              <div className="counter_box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Experience section End */}

    {/* Gallery section start */}
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg="12">
            <MassoneryImageGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* Gallery section End  */}
    {/* testimonial start start */}
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Fans Love "} />
            <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg="12">
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>
    {/* testimonial end */}
    <NewsLettre />
  </>
);

export default Home;
