import React from "react";
import profilePic from "../assets/Screenshot_20200918_191851_com.instagram.android.JPG";
import profileLeft from "../assets/Green Kettle set/1.JPG"
import profileRight from "../assets/white curly double jugs/2.JPG"
import "./About.css";

const About = () => {
  return (
    <div className="about-me  main">
      <div className="about-me-row">
        <div className="column">
          <img className="m-2" src={profileLeft} alt="" width="200px" />
          <img className="m-2" src={profilePic} alt="" width="300px" />
          <img className="m-2" src={profileRight} alt="" width="200px" />
        </div>
        <div className="column-article">
          <h3>About me</h3>
          <p>
            We all have experiences of our own, but the one which makes a
            difference is worth to tell. I haven't gone through any revolution
            but what life taught me, resulted in my evolution. I had my own set
            of choices, I had different maths of plan, but leaving all that
            behind, here I am with all new brand.<br></br><br></br> I wonder if I would have gone
            abroad for my further studies after getting discharged from ten long
            years of 'sick bed', if I would have followed those plans which I
            wrote in my scrapbook, neither I would be telling this story nor you
            will be interested to read one. <br></br><br></br>I won't blame this pandemic which
            got me into this business or the circumstances which bring me here.
            We all have a pleasant smell of interest embedded in our soul, which
            we need to sense at once. I did not find Misaaka, I found my soul,
            my happiness, my subject of interest in the form of this tiny
            circular logo named 'MISAAKA'.<br></br> Yes I sometimes encounter with
            moments of doubts, stupid things, mistakes and problems, but what
            keeps me going is those happy DMs or full star rating after
            delivering the pack of satisfaction to thousands of customer.<br></br><br></br> I was
            lost in my own bucket list but then gradually, the picture of my
            goals and ambitions started to clear. Those underrated yet talented
            and dedicated local artisans are now getting rewarded for their work
            with what they always deserved, just because of my little cause of
            action. Always remember, do not dishearten or dissuade by failures,
            it happens only because better sets of plans are made for your
            success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
