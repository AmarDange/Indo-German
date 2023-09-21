import React from "react";
import logoImage from "../../assets/logo.png";
import shadowStyles from "../../App.module.css";
import styles from "../../styles/About.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <Container className={`bg-white col-md-8 ${shadowStyles.Shadow}`}>
      <Row className="p-4 mt-5 justify-content-md-center">
        <Col className="text-center">
          <Container>
            <i className="fa-solid fa"></i>
            <Image src={logoImage} className={styles.LogoImage} />
            <h1 className="mb-3">Welcome to Indo German</h1>
            <p className="text-left">
              Indo german is a social media platform where you can post about
              anything you wish! This website is open network where you can put about your experince from germany, India, about culture, Food.
              Sign up with a new account (no email address required for
              those who don't want to compromise personal data). Once you're logged in, you have the option to create a post
              (post about anything you want!). Add a photo to your post, a
              title, and some content. There are no character limits for
              content, but the title will have a limit of 300 characters. Photos
              will be required for your post! Don't have a photo? Show us a
              photo of a cat you walked past the other day. You can like
              other user's posts, make comments, follow other users,
              and comments! You can track your liked post. Once you start
              following users, their posts will show up in the "Feed" link in
              navigation. You can also manage your profile and change your
              profile photo if you wish. Most importantly, you have the freedom
              to delete your posts/comments and edit your posts/comments as
              well, so don't sweat it if you wrote something really
              embarrassing!
            </p>
            <p>So what are you waiting for? </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default About;