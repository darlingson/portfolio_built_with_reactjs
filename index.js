$(document).ready(function () {
  $("button").click(function (e) {
    var t = $(this).attr("sect");
    if ($(this).attr("id") === "contact") {
      $("html, body").animate(
      {
        scrollTop: $("#Mycontact").offset().top },

      2000);

    }
    if ($(this).attr("id") === "about") {
      $("html, body").animate(
      {
        scrollTop: $("#Myabout").offset().top },

      2000);

    }
    if ($(this).attr("id") === "education") {
      $("html, body").animate(
      {
        scrollTop: $("#Myeducation").offset().top },

      2000);

    }
    if ($(this).attr("id") === "projects") {
      $("html, body").animate(
      {
        scrollTop: $("#Myprojects").offset().top },

      2000);

    }
  });
});



class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null,
      " ", /*#__PURE__*/
      React.createElement(WelcomeBanner, null), /*#__PURE__*/
      React.createElement(AboutMeSection, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null)));


  }}

class Projects extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("h1", { id: "Myprojects" }, "Projects"), /*#__PURE__*/
      React.createElement(Project, {
        name: "Text to sign language translator",
        url: "",
        desc: "A system built using PHP. It allows users to enter text or voice input and get Malawi sign language of the input in form of  short gifs.  The purpose of the system to fill shortfall of Malawi Sign Language Translators." }), /*#__PURE__*/

      React.createElement(Project, {
        name: "Personal portfolio",
        desc: "built 2 personpersonal portfolio. The 1 was built with just css,js and . The second one was react learning project" }), /*#__PURE__*/

      React.createElement(Project, {
        name: "MUBAS Library past papers repository ",
        desc: "Final year project built using django. The system allows for storing of digital past papers.It also allows students to access these past papers through a web web portal." })));



  }}

class WelcomeBanner extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(BannerContent, null);
  }}

class Project extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col s12" }, /*#__PURE__*/
      React.createElement("div", { class: "card blue-grey darken-1 cardwidth" }, /*#__PURE__*/
      React.createElement("div", { class: "card-content white-text" }, /*#__PURE__*/
      React.createElement("span", { class: "card-title" }, this.props.name), /*#__PURE__*/

      React.createElement("p", null, this.props.desc)), /*#__PURE__*/


      React.createElement("div", { class: "card-action" }, /*#__PURE__*/
      React.createElement("a", { href: "#" }, "View Demo"))))));





  }}

class BannerContent extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(WelcomeMessage, null), /*#__PURE__*/
      React.createElement(Link, { text: "about me", url: "contact.html", id: "about", sect: "about" }), /*#__PURE__*/
      React.createElement(Link, { text: "contact me ", url: "contact.html", id: "contact" }), /*#__PURE__*/
      React.createElement(Link, { text: "my projects ", url: "contact.html", id: "projects" })));


  }}

class AboutMeSection extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container", id: "Myabout" }, /*#__PURE__*/
      React.createElement("h1", null, "About Me"), /*#__PURE__*/
      React.createElement(ShortIntro, null), " ", /*#__PURE__*/React.createElement(Education, null), " ", /*#__PURE__*/React.createElement(TechnicalSkills, null), " ", /*#__PURE__*/React.createElement(SoftSkills, null)));


  }}

class Contact extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("h1", null, "Contact"), /*#__PURE__*/
      React.createElement("div", { className: "container soclinks", id: "Mycontact" }, /*#__PURE__*/
      React.createElement(SocLink, { link: "https://github.com/darlingson", name: "GitHub" }), /*#__PURE__*/
      React.createElement(SocLink, {
        link: "https://linkedin.com/iin/darlingsonm",
        name: "LinkedIn" }), /*#__PURE__*/

      React.createElement(SocLink, { link: "https://kaggle.com/darlingson", name: "Kaggle" }), /*#__PURE__*/
      React.createElement(SocLink, { link: "https://zindi.com/darlingson", name: "Zindi" }))));



  }}

function SocLink(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("a", { href: props.link }, props.name)));


}
function ShortIntro() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("p", null, "My name is Darlingson Makuwila. I am a software developer, Full Stack Web developer as well as a data scientist. I am interested in building technology that helps my community. I am also a very keen learner.")), /*#__PURE__*/





    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col s4" }, "Gender : "), /*#__PURE__*/
    React.createElement("div", { className: "col s6" }, "Male")), /*#__PURE__*/

    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col s4" }, " Languages :"), /*#__PURE__*/
    React.createElement("div", { className: "col s4" }, " Chichewa, English")), /*#__PURE__*/

    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col s4" }, "Location : "), /*#__PURE__*/
    React.createElement("div", { className: "col s6" }, "Blantyre, Malawi")))));




}
function Education() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h1", null, "Education "), /*#__PURE__*/
    React.createElement("div", { id: "Myeducation" }, /*#__PURE__*/
    React.createElement(Qualification, {
      name: "BSc Management Information Systems",
      school: "Malawi University of Business and Applied Sciences",
      from: "03/2018",
      to: "12/2022" }), /*#__PURE__*/

    React.createElement(Qualification, {
      name: "Malawi School Certificate of Education",
      school: "Chila PVT Secondary School",
      from: "2017",
      to: "2017" }))));




}
function Qualification(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", null, props.name), /*#__PURE__*/
    React.createElement("div", null, props.school), /*#__PURE__*/
    React.createElement("div", null,
    props.from, " - ", props.to)));



}
function TechnicalSkills() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h2", null, "Technical Skills"), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", null, "Frontend Web development"), /*#__PURE__*/
    React.createElement(TechList, { tlist: frontendSkills })), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", null, "Backend Web development"), /*#__PURE__*/
    React.createElement(TechList, { tlist: backendSkills })), /*#__PURE__*/


    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", null, "Software development"), /*#__PURE__*/
    React.createElement(TechList, { tlist: softwareSkills })), /*#__PURE__*/


    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", null, "Data Science"), /*#__PURE__*/
    React.createElement(TechList, { tlist: dsSkills }))));



}
function SoftSkills() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", null, "Softskills"), /*#__PURE__*/
    React.createElement(TechList, { tlist: softSkills }))));



}
function WelcomeMessage() {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { id: "h" }, " Hi, I am Darlingson ")), /*#__PURE__*/

    React.createElement("h2", null, /*#__PURE__*/
    React.createElement("span", null, " Full Stack Developer and Data Scientist"))));



}

function Link(props) {
  return /*#__PURE__*/(
    React.createElement("button", {
      className: "waves-effect waves-light btn  btn-small",
      href: props.url,
      id: props.id,
      sect: props.sect },

    props.text, " "));


}
/*
function Link(props) {
  return (
    <input
      className="waves-effect waves-light btn  btn-small"
      type="button"
    />
  );
}*/
function TechList(props) {
  const list = props.tlist;

  const listItems = list.map(item => /*#__PURE__*/React.createElement("li", null, item));

  return /*#__PURE__*/React.createElement("ul", null, listItems);
}
const softSkills = ["Team worker", "independent", "fast learner"];
const frontendSkills = [
"react ",
"bootstrap",
"JQUERY",
"HTML",
"CSS",
"JavaScript"];

const backendSkills = [
"django",
"Laravel",
"php",
"nodejs",
"MySQL",
"firebase"];

const softwareSkills = ["C++", "java", "python", "kotlin", "dart", "flutter"];
const dsSkills = [
"pandas",
"MS Excel",
"Google Sheets",
"google data studio",
"CSS",
"JavaScript"];

const root = ReactDOM.createRoot(document.getElementById("root"));
let rootElement = /*#__PURE__*/React.createElement(App, null);
root.render(rootElement);
