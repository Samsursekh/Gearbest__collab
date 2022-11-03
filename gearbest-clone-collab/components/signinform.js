let signInForm = ()=>{
    return`
    <div id="register">
    <div id="links">
    <h4><a href="./signin.html">SIGN IN</a></h4>
    <h4><a href="./register.html">REGISTER</a></h4>
    </div>
    
   <div id="register_form">
    <form id="form">
        <div class="form_input">
            <input type="email" placeholder="Email" id="user_email">
        </div>
        <div class="form_input">
            <input type="password" placeholder="Password" id="user_password">
        </div>
       <br>
        <div class="form-input">
            <label id="label">
                <input type="checkbox" name="" id="check_box">
                <span>Keep me signed in</span>
            </label>
            <a href="#" id="forget_password">Forget your password?</a>
        </div>
       <br>
        <div class="form_input">
            <button id="submit" >Register</button>
        </div>
       
    </form>
   <div class="form_input">
    <span> or connect via</span>
    <br>
    <a id="google_link1" href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=
    code&redirect_uri=https%3A%2F%2Fsocial-login.oxiapps.com%2Fauth%2Fgoogle&client_
    id=288380117484-av3a09rtmk27647k47ad2ui45lohki5g.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com
    %2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=online&approval_prompt=auto&
    flowName=GeneralOAuthFlow">
    <img id="google_link" src="./images/google.png" alt=""></a>
   </div>
   </div>
   
   </div>
    `
   }
   
   export {signInForm}