import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Valeria Villanueva </span>
            from  <span className="purple"> Texas, US of A.</span>
            <br />
            As a passionate Computer Science educator, I spend my days imparting knowledge to high school students, igniting their curiosity in STEM.
            <br />
            My journey in education is taking an exciting turn as I prepare to embark on an adventure to South Korea.  <span className="purple"> There, I will be teaching at an international school, specializing in AP Computer Science and robotics, where I hope to inspire and nurture the next generation of tech innovators.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Valorant & Animal Crossing)
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Being a mom to two crazy boys
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to invent it." {" "}
          </p>
          <footer className="blockquote-footer"> Alan Kay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
