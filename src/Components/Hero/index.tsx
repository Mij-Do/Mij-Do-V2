import './index.scss';
import heroImage from './../../assets/Images/Logo.png';

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='hero-header'>
                    <h1>&lt; <span className='frist-logo-span'>MijDo</span> <span className='last-logo-span'>/</span> &gt;</h1>
                </div>
                <div className='hero-content'>
                    <h2>
                        My name is Ahmed.
                    </h2>
                    <p>
                        I'm a passionate Front-End Developer skilled in HTML, CSS, JavaScript, Bootstrap, TypeScript, and React. 
                        I focus on crafting seamless and interactive user experiences, believing that attention to detail makes all the difference.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Hero;