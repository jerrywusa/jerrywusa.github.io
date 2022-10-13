import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { uid } from "uid";
import style from "../sass/Root.module.scss";
import createScrollSnap from "scroll-snap";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import WorkExperiencePage from "./WorkExperiencePage/WorkExperiencePage";
import SkillsPage from "./SkillsPage/SkillsPage";
import BlogPage from "./BlogPage/BlogPage";
import workIcon from "./WorkExperiencePage/work_icon_v1.png";
import starIcon from "./WorkExperiencePage/star_icon_v1.png";
import happyStarIcon from "./WorkExperiencePage/happy_star_icon_v1.png";
import resumeIcon from "./WorkExperiencePage/resume_icon_v4.png";
import linkedinIcon from "./WorkExperiencePage/linkedin_icon_v4.png";
import githubIcon from "./WorkExperiencePage/github_icon_v4.png";
import pingpongImg1 from "./AboutPage/pingpong_1.jpg";
import pingpongImg2 from "./AboutPage/pingpong_2.jpg";
import chessImg1 from "./AboutPage/chess_1.jpg";

class Root extends Component {
  constructor(props) {
    super(props);

    const darkgrey = "#282828";
    const red = "#cc241d";
    const green = "#98971a";
    const yellow = "#d79921";
    const blue = "#458588";
    const purple = "#b16286";
    const aqua = "#689d6a";
    const grey = "#a89984";
    const white = "#ebdbb2";
    this.colors = [darkgrey, red, green, yellow, purple, aqua, grey];

    this.state = {
      HomePage: {
        tileRipple: {
          color: "rgb(251, 241, 199, 1.0)",
          duration: 500,
        },
        timeoutDuration: 250,
        tiles: [
          {
            uid: uid(),
            pathName: "about",
            title: "About Me",
            description: "who am I?",
            position: "top-left",
            revealAnimation: {
              left: true,
              right: false,
              top: true,
              bottom: false,
              delay: 0,
            },
            opacity: 1,
          },
          {
            uid: uid(),
            pathName: "exp",
            title: "Work Experience",
            description: "my work experience",
            position: "top-right",
            revealAnimation: {
              left: false,
              right: true,
              top: true,
              bottom: false,
              delay: 250,
            },
            opacity: 1,
          },
          {
            uid: uid(),
            pathName: "skills",
            title: "Skills",
            description: "programming languages and technologies",
            position: "bottom-left",
            revealAnimation: {
              left: true,
              right: false,
              top: false,
              bottom: true,
              delay: 750,
            },
            opacity: 1,
          },
          {
            uid: uid(),
            pathName: "blog",
            title: "Blog",
            description: "brain dump",
            position: "bottom-right",
            revealAnimation: {
              left: false,
              right: true,
              top: false,
              bottom: true,
              delay: 500,
            },
            opacity: 1,
          },
        ],
      },
      AboutPage: {
        page1: {
          backgroundColor: darkgrey,
          typingText: {
            staticText: ["Hello, I'm "],
            sequence: [
              "",
              800,
              "Jerry",
              500,
              "",
              300,
              "a CompSci major",
              500,
              "",
              300,
              "a Vim enthusiast",
              1000,
            ],
            revealAnimation: {
              right: true,
            },
          },
        },
        page2: {
          backgroundColor: green,
          titleText: [
            {
              text: "I like playing ",
              textColor: white,
              isBold: false,
              uid: uid(),
            },
            {
              text: "ping pong ",
              textColor: blue,
              isBold: true,
              uid: uid(),
            },
            {
              text: "and ",
              textColor: white,
              isBold: false,
              uid: uid(),
            },
            {
              text: "chess",
              textColor: purple,
              isBold: true,
              uid: uid(),
            },
          ],
          pingpongImg1: pingpongImg1,
          pingpongImg2: pingpongImg2,
          chessImg1: chessImg1,
        },
        page3: {
          backgroundColor: yellow,
          titleText: [
            {
              text: "I enjoy listening to ",
              textColor: white,
              isBold: false,
              uid: uid(),
            },
            {
              text: "music",
              textColor: darkgrey,
              isBold: true,
              uid: uid(),
            },
          ],
          playlists: [
            {
              title: "angry classical",
              src: "https://open.spotify.com/embed/playlist/2NaXb74rbrN8iTATiEEvwp?utm_source=generator&theme=0",
              uid: uid(),
            },
            {
              title: "rock ‘n metal",
              src: "https://open.spotify.com/embed/playlist/5EwM5JAv5ojLCVAJAOZjPG?utm_source=generator",
              uid: uid(),
            },
            {
              title: "pop",
              src: "https://open.spotify.com/embed/playlist/1epzb6d4ZnPWNxDo9SDdiJ?utm_source=generator",
              uid: uid(),
            },
          ],
        },
        particles: {
          particleColor: white,
          hoverParticleColor: white,
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
          shape: "square",
        },
      },
      WorkExperiencePage: {
        page1: {
          backgroundColor: darkgrey,
          title: "Work Experience",
          revealAnimation: {
            right: true,
          },
        },
        page2: {
          backgroundColor: blue,
          workExperiences: [
            {
              uid: uid(),
              icon: happyStarIcon,
              iconAlt: "happy star icon",
              positionTitle: "Enterprise Software Engineer Intern",
              startDate: "May 2022",
              endDate: "Aug 2022",
              companyName: "Meta",
              companyLink: "https://about.facebook.com/",
              workDescription:
                "Worked in the Headcount Management team. Designed and launched highly configurable timeline for Meta employees to manage daily work flow. Used by thousands of recruiters and mission control users.",
              revealAnimation: {
                positionTitle: {
                  left: true,
                  delay: 0,
                },
                icon: {
                  delay: 0,
                },
                companyName: {
                  right: true,
                  delay: 0,
                },
                date: {
                  left: true,
                  delay: 100,
                },
                workDescription: {
                  right: true,
                  delay: 100,
                },
              },
              emphasize: true,
            },
            {
              uid: uid(),
              icon: starIcon,
              iconAlt: "star icon",
              positionTitle: "Undergraduate Researcher",
              startDate: "Sep 2021",
              endDate: "Dec 2021",
              companyName: "PANS Lab @ UC Merced",
              companyLink: "https://www.pans-lab.com/",
              workDescription:
                "Undergraduate researcher in the PANS Lab. Developed an Android application to allow elderly individuals to seamlessly connect with structural vibration sensors via WiFi hotspot.",
              revealAnimation: {
                positionTitle: {
                  left: true,
                  delay: 200,
                },
                icon: {
                  delay: 200,
                },
                companyName: {
                  right: true,
                  delay: 200,
                },
                date: {
                  left: true,
                  delay: 300,
                },
                workDescription: {
                  right: true,
                  delay: 300,
                },
              },
            },
            {
              uid: uid(),
              icon: starIcon,
              iconAlt: "star icon",
              positionTitle: "Software Engineer Intern",
              startDate: "Jun 2021",
              endDate: "Aug 2021",
              companyName: "Curated",
              companyLink: "https://www.curated.com/company/about",
              workDescription:
                "Implemented full stack infocard feature using Java, MongoDB, GraphQL, React, and Typescript to improve the accuracy of information for 1000+ experts at Curated. Implemented caching mechanism to optimize Slack api query volume from 250,000 to 2,000 per day, improving the communication between team managers and team experts.",
              revealAnimation: {
                positionTitle: {
                  left: true,
                  delay: 400,
                },
                icon: {
                  delay: 400,
                },
                companyName: {
                  right: true,
                  delay: 400,
                },
                date: {
                  left: true,
                  delay: 500,
                },
                workDescription: {
                  right: true,
                  delay: 500,
                },
              },
            },
          ],
        },
        page3: {
          backgroundColor: yellow,
          icons: [
            {
              uid: uid(),
              link: "https://docs.google.com/document/d/1b7bXyiSwDhB1Dqt6wzgj0Li0QQ1mWoHFjz5Zg7ac34s/edit?usp=sharing",
              icon: resumeIcon,
              iconAlt: "resume icon",
              titleText: "Resume",
              revealAnimation: {
                left: true,
                bottom: true,
              },
            },
            {
              uid: uid(),
              link: "https://www.linkedin.com/in/jerryowu/",
              titleText: "LinkedIn",
              icon: linkedinIcon,
              iconAlt: "linkedin icon",
              revealAnimation: {
                bottom: true,
              },
            },
            {
              uid: uid(),
              link: "https://github.com/jerrywusa",
              icon: githubIcon,
              iconAlt: "github icon",
              titleText: "GitHub",
              revealAnimation: {
                right: true,
                bottom: true,
              },
            },
          ],
        },
      },
      SkillsPage: {
        page1: {
          backgroundColor: white,
          revealAnimation: {
            duration: 1000,
          },
          skillBar: {
            animationDelay: 750,
            animationDuration: 1500,
            skills: [
              {
                type: "Java",
                level: 80,
                color: {
                  bar: this.randomColor(),
                  title: {
                    text: white,
                    background: this.randomColor(),
                  },
                },
              },
              {
                type: "C++",
                level: 50,
                color: {
                  bar: this.randomColor(),
                  title: {
                    text: white,
                    background: this.randomColor(),
                  },
                },
              },
              {
                type: "React",
                level: 75,
                color: {
                  bar: this.randomColor(),
                  title: {
                    text: white,
                    background: this.randomColor(),
                  },
                },
              },
              {
                type: "JavaScript",
                level: 55,
                color: {
                  bar: this.randomColor(),
                  title: {
                    text: white,
                    background: this.randomColor(),
                  },
                },
              },
              {
                type: "Hacklang",
                level: 10,
                color: {
                  bar: this.randomColor(),
                  title: {
                    text: white,
                    background: this.randomColor(),
                  },
                },
              },
              {
                type: "BashScript",
                level: 20,
                color: {
                  bar: this.randomColor(),
                  title: {
                    text: white,
                    background: this.randomColor(),
                  },
                },
              },
              {
                type: "Vim",
                level: 90,
                color: {
                  bar: this.randomColor(),
                  title: {
                    text: white,
                    background: this.randomColor(),
                  },
                },
              },
            ],
          },
        },
      },
      BlogPage: {
        page1: {
          backgroundColor: white,
        },
      },
    };
  }

  randomColor() {
    let size = this.colors.length;
    let idx = Math.trunc(size * Math.random());
    return this.colors[idx];
  }

  // commented out code is for scroll snapping
  bindScrollSnap(container) {
    // const element = container.current;
    // createScrollSnap(element, {
    //     snapDestinationY: "100%",
    //     duration: 400,
    // });
  }

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              tileRipple={this.state.HomePage.tileRipple}
              timeoutDuration={this.state.HomePage.timeoutDuration}
              tiles={this.state.HomePage.tiles}
              particles={this.state.HomePage.particles}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              bindScrollSnap={this.bindScrollSnap}
              page1={this.state.AboutPage.page1}
              page2={this.state.AboutPage.page2}
              page3={this.state.AboutPage.page3}
              particles={this.state.AboutPage.particles}
            />
          }
        />
        <Route
          path="/exp"
          element={
            <WorkExperiencePage
              bindScrollSnap={this.bindScrollSnap}
              page1={this.state.WorkExperiencePage.page1}
              page2={this.state.WorkExperiencePage.page2}
              page3={this.state.WorkExperiencePage.page3}
            />
          }
        />
        <Route
          path="/skills"
          element={
            <SkillsPage
              bindScrollSnap={this.bindScrollSnap}
              page1={this.state.SkillsPage.page1}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage
              bindScrollSnap={this.bindScrollSnap}
              page1={this.state.BlogPage.page1}
            />
          }
        />
      </Routes>
    );
  }
}

export default Root;
