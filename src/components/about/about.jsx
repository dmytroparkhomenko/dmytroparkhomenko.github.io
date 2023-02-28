import './about.scss'

const About = (props) => {

    return (
        <>  
            <div className="about">
                <img src={props.img} alt="about beans img" />
                <div className="about_beans_desc">
                    <h2>{props.title}</h2>
                    <img src={props.logo} alt="beans logo" />
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. <br/><br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default About 