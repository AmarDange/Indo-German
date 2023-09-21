import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing_page_img.jpg";
import styles from "../styles/LandingPage.module.css";

/** 
 * Landing page with information about the App
 * Prompts user to sign up/sign in
 * Gives instructions on how to he started
**/
const LandingPage = () => {
    return (
        <>
            <Container className="fluid">
                <Row className="text-center mt-5" lg={2} md={1}>
                    <Col lg={6} sm={12}>
                        <img
                            src={landingImage}
                            className={styles.LandingImage}
                            alt="Person holding lantern at dawn"
                        />
                        <p>
                            {' '}
                            <strong> “Coming together is a beginning, staying together is progress, and working together is success.” </strong><br />
                            --Henry Ford{' '}
                        </p>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="text-center mt-3" >
                            <h4 className="mb-3">Welcome to "Indo German" <br /> Share your experience </h4>

                            <h6> Are you looking for an share your experience or frinedly, useful post for India's or Germany's Culture or anything which comes in mind?
                                Then this is the right place for you!!
                            </h6>
                            <br />
                            <h6>Our easy to use features allow you to access all the posts (Homepage),
                                follow the post and see their posts in your feed, and save liked posts in liked page.</h6>
                            <p>You can share a post and also recommend people </p>
                            <p><strong>Feeling excited to know / Share about India & Germany? Come join our community!!</strong></p>
                            <Link to="/signup">
                                <Button
                                    className={`${styles.Button} mx-3 mb-2`}
                                >
                                    New here? Join us!
                                </Button>
                            </Link>
                            <Link to="/Signin">
                                <Button className={`${styles.Button} mb-2`}>
                                    Member? Sign In and Start!
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <footer className={`${styles.footer}`}>
                        <div className="text-center">
                            <p>For Education Purposes only! || Creator: Amar Dange </p>
                            <a
                                href="https://github.com/AmarDange"
                                aria-label="Check the website GitHub page"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/amar-dange-a68393238/"
                                aria-label="Visit me on LinkedIn (opens in new tab)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin" />
                            </a>
                        </div>
                    </footer>
                </Container>
            </Container>
        </>
    );
};

export default LandingPage