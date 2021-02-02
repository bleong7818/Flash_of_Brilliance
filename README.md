# README

[Live website](https://flash-of-brilliance.herokuapp.com/#/)

Flash of Brilliance is a flashcard website for people dedicated to learning and improvement. Users can log in, sign up, and log out from their user page. Once signed in, a user can look at flashcard decks, create their own decks, study decks, and save decks to their own page for future use.

On the technical side, Flash of Brilliance is a an application that uses Rails and React. Rails makes up the backend for the project while the front end follows the react-redux cycle, including ajax calls, actions, reducers, and components. 

Specs
=============

Ruby version: 2.5.1

Rails version: 5.2.4.4

Challenging Feature
=============

The feature I am most proud of on this app is the login and sign up modals. I did not have much experience with modals prior to this project, and in the end the two modals took me about seven hours of research and experimentation to get done. At first I tried to use bootstrapping, but that did not really work out. Next, I tried putting the forms inside the modal component, but I realized after some time that the modal component would have too much functionality. The examples I had been using as reference had done so, but I realized that I could put another component inside of the modal component, i.e. the login and sign up containers. The decision to put the nest those containers inside the modal component really streamlined the process of getting the modals to function properly. While it does mean that the navigation bar on the main screen has two nested components inside of it, I appreciate the separation between all three components that allows for more focused work on each of the components.

* The login section of the NavBar component

        <div className="login-modal-div">
                        <LoginModal show={this.state.loginShow}
                            hideModal={this.hideModal}
                            className="modal" />
                        <button className="login-button" onClick={() => this.showModal("loginShow")}>
                            Log In
                        </button>
         </div>
         
 * The modal component that links to the login form container
        
        const LoginModal = (props) => {
        const showHideClassname = props.show ? "modal-display-block" : "modal-display-none"
    
                return (
                        <div className={showHideClassname}>
                           <section className="login-modal">
                              <LoginFormContainer hideModal={props.hideModal} className="log-modal" formType="Log in"/>
                           </section>
                        </div>
                )
        }

Next came the CSS for the modals. I was able to find the basics for how to create the modals online and how to gray the rest of the screen out when the modal show up, but I did not have much help when it came to styling within the modal component itself. The login and sign up forms are different sizes with different input fields, and as such I needed to create separate scss files for both of them. When it came to the CSS I had three issues that I faced: 
* I struggled with making the boxes just the right size to fit possible login and sign up errors if the user made a mistake while also preserving the look for when no errors were present. 
* I also had a difficult time placing the close button in the correct place relative to where the modal was on screen. 
* Finally, I had a tough time making sure that the modals themselves did not move the buttons behind them on the regular nav bar when the modals showed up. 

I ended up addressing these problems as follows.

* I found a proper size for both boxes and placed the errors and the login/sign up button in their own div element. This allowed me to style the errors and button in relation to one another, which allowed me to space them out more easily and precisely.

* At first I tried using a button element for the close button, but I ran into an issue where the close button would submit the form. I then tried placing the button outside of the form element, but then it became difficult to place the button inside the form. I got around these issues by making the close button a clickable div element inside the form. This fixed the issue of accidental form submission while also allowing me to style the close button's position more easily.

* The login form with the above implementations.

        <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="login-link">Log In</h1>
                    <div className="login-form">
                        <label>
                            <input type="text" onChange={this.update('email')} placeholder="Email" className="login-email" />
                        </label>
                        <label>
                             <input type="password" onChange={this.update('password')} placeholder="Password" className="login-password" />
                        </label>
                    </div>
                        <div className="log-in-container">
                            <button className="log-in-button" type="submit" >Login</button>
                            <h3 className="form-errors">{this.renderErrors()}</h3>
                        </div>
                 <div className="close-button" onClick={this.handleClose}>×</div>
                </form>

* I solved this last issue by making the positions of the nav buttons relative to the absolute position of the main page. This kept the buttons in place even when the modals showed up.

Instructions for how to run the suite
=============

Start out with installing the bundle.

        Bundle Install
 
Next make sure to npm install.

        npm install
        
Start up webpack using either npm start or npm webpack.

        npm start

Run the rails server and you should be good to go! The server should display a localhost site to go to.

        rails s
