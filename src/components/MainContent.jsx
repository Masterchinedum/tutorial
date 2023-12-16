import './MainContent.css';
import elder from './images/elder.png'

export default function MainContent() {
    return (
        <div className='Hero'>
            <div className='left-side'>
                <h1 className='header'>hello by addele</h1>
                <p>Well Hello, Its me i've been wondering after all these while the thing we used to be, to go over and free they say that time's supposed to heal ya buh i ain't done much healing</p>
                <p>So hello from the other side, i must have called a thousand times, to tell you that i am sory for everything that i have done but it don't matter really doesn't take you appert </p>
                <p>Anymore!!!!!</p>
            </div>
            <div className='right-side'> 
                <img src={elder} alt='Hero Image'/>
            </div>
        </div>
    )
}