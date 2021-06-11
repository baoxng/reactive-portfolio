import React from "react";
import { Col, Row, Container } from "../Grid";

const Profile = () =>{

    return (
    <div>
        <Container>
            <h1>About Npaus</h1>
            <img class="Npaus" 
            src="https://user-images.githubusercontent.com/74163895/121623964-459e9e80-ca36-11eb-8ce2-f6f5be083752.JPG">
            </img>
            <Row>
                <Col size= "md-6">
                    <p>
                     Hello all and welcome!
                     <br></br>
                    First and foremost, my name is Bao Xiong. You have stumbled upon a showcase of who I am, where I come from, what I create and just things that I love doing on a daily basis. I hope this bio page could be relatable to the things that you are interested in and I do hope that my creations have inspired you to be more creative in some aspects in your life. Before I bore you into hitting that back arrow button on top of web page, consider checking out my cool hamburger navigation bar! I mean one day it'll actually be shaped like a hamburger, but visit again for when that actually happens. From my hamburger bar, you can find images of things that I love doing and if that interest you, feel free to connect with me by leaving your information and a brief message in the contact tab. 
                    </p>
                </Col>    
            </Row>
            <Row>
                <Col size="md-6">
                    <p>
                    Currently I am transitioning into web development and just loving the whole process of it. On free days I like relaxing and just enjoying some time on my phone scrolling through pintrest. Some of my favorite hobbies include, singing, song writing, drawing, crafting, traveling and photography. I've just recently dived into travelling and doing mini road trips to different states, but of course that is currently on halt. I do have a strong sense of photography and have been collecting a series of portaits and landscape photos. Most of the things that I gravitated towards in my life so far, were creations that I made with my own hands and the creativity that I put into it. I feel like there's always an ambundance of ideas to spare and I never run out of ways to do things or create things. For other content check the portfolio tab in navigation.
                    </p>           
                </Col>
            </Row>
        </Container>
    </div>
    )};


export default Profile;