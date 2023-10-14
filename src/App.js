import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

//Dev Server Image Testing
/*
console.log(AlexaImage);
console.log(SiriImage);
*/

function App() {
    return (
        <div>
            <div>
                Personal Digital Assistants
            </div>

            <ProfileCard title = "Alexa" handle = "@Alexa" image={AlexaImage}/>
            <ProfileCard title = "Cortana" handle ="@Cortana" image={CortanaImage}/>
            <ProfileCard title = "Siri" handle = "@Siri" image={SiriImage} />
        </div>
    );

}
export default App; 