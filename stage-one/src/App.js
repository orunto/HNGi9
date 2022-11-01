import './App.css';
import zurilogo from './images/Zuri.Internship_Logo.svg'
import ifglogo from './images/I4G.svg'
import slacklogo from './images/slack.svg'
import githublogo from './images/github.svg'
import sharebutton from './images/sharebutton.svg'
import sharebuttonmobile from './images/sharebuttonmobile.svg'
import sharelink from './images/sharelink.svg'
import camera from './images/camera.svg'

function App() {
  return (
    <div className="App">
      <section id='profile__section'>
        <div id='sharefunction' onClick={ShareFunction}>
          <img src={sharelink} alt='sharelink' id='sharelink'/>
          <img src={sharebutton} alt='sharebutton' id='sharebutton' />
          <img src={sharebuttonmobile} alt='sharebutton' id='sharebuttonmobile' />
        </div>
        <div id="profile__img">
          <div id='camera'>
            <img src={camera} alt='camera' />
          </div>
        </div>
        <span id="twitter">0runto</span>
        <span id="slack">Orunto Eniola. Username="oruntoeniola"</span>
        
      </section>

      <section id='links__section'>
        <a href='https://twitter.com/0runto'>Twitter Link</a>
        <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
        <div className='linkswithdescription'>
          <a href='https://books.zuri.team' id='books' title='Handpicked books and customized guides to learn design and coding'>Zuri Books</a>
          <label>Handpicked books and customized guides to learn design and coding</label>
        </div>
        <div className='linkswithdescription'>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=oruntoeniola' id='book__python'>Python Books</a>
          <label>Get top of the line python books here</label>
        </div>
        <div className='linkswithdescription'>
          <a href='https://background.zuri.team' id='pitch'>Background Check for Coders</a>
          <label>Not sure about your new hire, run a background check</label>
        </div>
        <div className='linkswithdescription'>
          <a href='https://books.zuri.team/design-rules' id='book__design'>Design Books</a>
          <label>A free book to help boost your design skills</label>
        </div>

        <div id='slackgithub'>
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


function ShareFunction() {
  var copyText = 'https://hngstageone.vercel.app/';
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText)
  alert("link copied");
  // var tooltip = document.getElementById("myTooltip");
  // tooltip.innerHTML = "Copied: " + copyText.value;
}

export default App;

