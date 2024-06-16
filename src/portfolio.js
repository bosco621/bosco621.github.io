/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bosco Wu",
  title: "Hello, I'm Bosco",
  subTitle: emoji(
    "A passionate student 🚀 majoring in Quantitative Finance, also a coding enthusiast who loves to explore different programming languages and technologies for fun."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16h6-VJm1Ot7C-nwtGvhWn4ydBiEju08d/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bosco621",
  linkedin: "https://www.linkedin.com/in/wutszkiu/",
  gmail: "boscowu621@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "ENTHUSIASTIC PROGRAMMING LEARNER WHO LOVES TO EXPLORE MACHINE LEARNING AND VARIOUS TECH STACKS",
  skills: [
    emoji(
      "⚡ Experienced in training BERT models for sentiment analysis and text classification."
    ),
    emoji(
      "⚡ Passionate about mathematics and statistics, with a strong foundation in both fields."
    ),
    emoji(
      "⚡ Knowledgeable in financial modeling, leveraging statistical analysis for accurate predictions."
    ),
    emoji(
      "⚡ Actively interested in actuarial science, exploring the intersection of mathematics and risk assessment."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Excel VBA",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Markdown",
      fontAwesomeClassname: "fab fa-markdown"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "C++",
      iconPath: "../../assets/images/cplus.svg"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Hong Kong",
      logo: require("./assets/images/hkulogo.png"),
      subHeader: "Bachelor of Science in Quantitative Finance",
      duration: "September 2020 - December 2024",
      desc: "Attained a CGPA of 3.58/4.3",
      descBullets: [
        "Awarded the Sola Gratia Foundation Scholarship in 2023",
        "Resided in Simon K. Y. Lee Hall, Activities: Floor Representative, Team Captain of Basketball Team and Lacrosse Team"
      ]
    },
    {
      schoolName: "Ramon Llull University, ESADE Business School",
      logo: require("./assets/images/esadelogo.png"),
      subHeader: "Bachelor of Business Administration",
      duration: "January 2023 - May 2023",
      desc: "HKU Business School Student Exchange Programme 2022-2023",
      descBullets: [
        "Studied Mergers & Acquisitions, Investment Banking , Applied Portfolio Management",
        "Worked closely with a local non-profit entity in Barcelona in a project-based course: Financial Analysis for Non-profit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Statistical & Financial Modelling", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Designing",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Intern",
      company: "Hang Seng Bank",
      companylogo: require("./assets/images/hangsengLogo.png"),
      date: "July 2023 – December 2023",
      desc: "",
      descBullets: [
        "Supported product user acceptance testing by working with cross-functional teams to ensure that insurance products met customer and regulatory requirements",
        "Assisted in the finance reporting process by gathering and analyzing financial data and contributing to the financial planning and forecasting process",
        "Performed ad-hoc tasks as required, including data entry, research, and analysis"
      ]
    },
    {
      role: "Summer Intern",
      company: "Uniwin International CPA Limited",
      companylogo: require("./assets/images/no-photo.png"),
      date: "June 2022 – August 2022",
      desc: "",
      descBullets: [
        "Recorded daily transactions of clients",
        "Audited, casted and reviewed financial reports",
        "Drafted bank confirmation, clearance letter and other signing documents for clients"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements, Certifications & Qualifications 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "Sola Gratia Foundation Scholarship Awardee",
      subtitle:
        "Achieved a cumulative GPA of 3.0 or above and have made a substantial contribution to Simon K Y Lee Hall. ",
      image: require("./assets/images/skyLogo.jpeg"),
      imageAlt: "skylee logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://scholar.aas.hku.hk/?action=showonesscheme&ss_id=245&backb=1"
        },
        {
          name: "Announcement",
          url: "https://www.skylee.hku.hk/copy-of-news#comp-lbfh9eb3"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Passionate about creating, writing, and sharing about what I've learned.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://buehlmaier.github.io/FINA4350-student-blog-2024-01/blog-post-one-initial-thoughts-by-group-textonomy.html",
      title: 'Initial Thoughts (by Group "Textonomy")',
      description:
        "Nividia's stock price reached its historical peak, how can we eplore the relationship between investors' sentiment and AI stock price using NLP?"
    },
    {
      url: "https://buehlmaier.github.io/FINA4350-student-blog-2024-01/blog-post-two-encounter-analyze-and-solve-by-group-textonomy.html",
      title: 'Encounter, Analyze, and Solve (by Group "Textonomy")',
      description:
        "As we are all new to NLP, we believe sharing the challenges we met along the way is valuable. We hope these experiences can serve as a reference for future NLP learners."
    },
    {
      url: "https://bosco621.github.io/Data-Analytics-Visualization-in-Financial-Statement-Analysis/",
      title: 'Encounter, Analyze, and Solve (by Group "Textonomy")',
      description:
        "The objectives of this financial analysis are to understand the financial health of Grab Holdings, identify potential issues or opportunities, and facilitate the decision-making process."
    },
    {
      url: "https://bosco621.github.io/BERT-Model/",
      title: "BERT Model Training",
      description:
        "A tutorial on how to train a BERT model to perform text classification and sentiment anaylsis by python."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Travel Sections

const travelSection = {
  title: emoji("Travel 🌍"),
  subtitle: "I am addicted to travelling! I love to explore and experience new culture.",
  base:emoji("📍 Based in 🇭🇰"),
  travelled:emoji("✈️ Travelled to 🇹🇼 🇹🇭 🇯🇵 🇨🇳 🇲🇴 🇪🇸 🇵🇹 🇫🇷 🇩🇪 🇸🇪 🇲🇦 🇨🇿 🇦🇹 🇭🇺 🇦🇩"),
  favourite:emoji("❤️ Favourite cities: Barcelona, Osaka, Kyoto"),
  bucket:emoji("📝 Bucket list: Argentina, Brazil, Iceland ..."),
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to contact for job enquiry. My Inbox is open for all.",
  number: "",
  email_address: "boscowu621@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  travelSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
