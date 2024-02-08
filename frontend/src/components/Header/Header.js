import React, { useRef, useEffect, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

const Nav_link = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        (document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80) &&
        headerRef.current
      ) {
        headerRef.current.classList.add("sticky_header");
      } else if (headerRef.current) {
        headerRef.current.classList.remove("sticky_header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container className="container">
        <Row>
          <div className="nav__wrapper ">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* menu start */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu ">
                {Nav_link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu End */}
            <div className="nav__right ">
              <div className="nav__btns ">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to={"/login"}>Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to={"/register"}>Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
