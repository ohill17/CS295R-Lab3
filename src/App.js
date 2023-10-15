import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css"
//Dev Server Image Testing
/*
console.log(AlexaImage);
console.log(SiriImage);
*/

function App() {
    return (
        <div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title"> Personal Digital Assistants</p>
                </div>
            </section>
          
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" handle="@Alexa" image={AlexaImage} description="Billionaire spy device" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@Cortana" image={CortanaImage} description="Also a Billionaire's spyware"/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Siri" handle="@Siri" image={SiriImage} description="You guessed it more spying"/>
                        </div>
                    </div>
                </section>
            </div>





        </div>

    );

} 
export default App; 