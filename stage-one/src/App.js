import './App.css';
import zurilogo from './images/Zuri.Internship_Logo.svg'
import ifglogo from './images/I4G.svg'
import slacklogo from './images/slack.svg'
import githublogo from './images/github.svg'
import sharebutton from './images/sharebutton.svg'
import sharelink from './images/sharelink.svg'

function App() {
  return (
    <div className="App">
      <section id='profile__section'>
        <div id='sharefunction'>
          <img src={sharelink} alt='sharelink' id='sharelink'/>
          <img src={sharebutton} alt='sharebutton' id='sharebutton' />
        </div>
        <div id="profile__img">
          <div id='camera'></div>
        </div>
        <span id="twitter">0runto</span>
        <span id="slack">Orunto Eniola</span>
        
      </section>

      <section id='links__section'>
        <a href='https://twitter.com/0runto'>Twitter Link</a>
        <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
        <a href='https://books.zuri.team' id='books' title='Handpicked books and customized guides to learn design and coding'>Zuri Books</a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' id='book__python'>Python Books</a>
        <a href='https://background.zuri.team' id='pitch'>Background Check for Coders</a>
        <a href='https://books.zuri.team/design-rules' id='book__design'>Design Books</a>
        <div>
          <a href='https://app.slack.com/'><img src={slacklogo} alt="slack" /></a>
          <a href='https://github.com/orunto'><img src={githublogo} alt="github" /></a>
        </div>
      </section>

      <footer>
        <img src={zurilogo} alt='Zuri Internship Logo'/>
        <span>HNG Internship 9 Frontend Task</span>
        <img src={ifglogo} alt='Ingressive for good Logo'/>
      </footer>
    </div>
  );
}

export default App;

