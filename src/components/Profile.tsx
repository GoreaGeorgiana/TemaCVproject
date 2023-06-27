
function Profile() {
    return (
        <div className="Data">
            <div className="PersonalData">
                <img src='./image/mypic.jpg' alt="Picture of me" />
                <div className="Details">
                    <p>First Name: Gorea</p>
                    <p>Last Name: Minerva-Georgiana</p>
                    <p>Email: goreageorgi@gmail.com</p>
                    <p>Phone: 0740948232</p>
                </div>
            </div>
            <div className="AboutMe">About Me:
                <div className="Mydescription">
                    <p>My name is Georgiana, I'm 21 years old and I'm a second-year student at the
                         University of Economics and Law. In the past two years, I have studied both 
                         accounting and programming subjects. The technologies I have studied at university
                         include HTML, CSS, JS, PHP, and SQL. About a year ago, I discovered my passion for
                         programming and started learning JS and React.
                    </p>
                </div>

            </div>
        </div>
    )
}
export default Profile;