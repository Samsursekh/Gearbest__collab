let registerForm = ()=>{
    return `
    <div id="register">
    <div id="links">
    <h4><a href="./signin.html">SIGN IN</a></h4>
    <h4><a href="./register.html">REGISTER</a></h4>
    </div>
   <div id="register_form">
    <form id="form" > 
        <div class="form_input">
            <input type="email" placeholder="Email" id="user_email">
        </div>
        <div class="form_input">
            <input type="password" placeholder="Password" id="user_password">
        </div>
        <div class="form_input">
            <input type="password" placeholder="Re-type Password" id="re_type_password">
        </div>
        <div class="captcha">
            <div class="preview"></div>
            <div class="captcha_form">
                <input type="text" placeholder="Enter the code" id="captcha_form">
            </div>
        </div>
        <div class="check_box">
            <input type="checkbox" id="check_box">
            <span id="policy">I agree to Gearbest <a href="#">Term & condition</a> and <br><a href="#">Privacy policies</a>.</span>
        </div>
        <div class="form_input">
           <button id="submit" >Register</button>
        </div>
    </form>
  
   <div class="form_input">
    <span id="other_connection"> or connect via</span>
    <br>
    </div>
   <div id="goole_link2">
    <a id="google_link1" href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_
    id=643156394993-6mlvl2ls6f900t3fg9qr16v536fes0gq.apps.googleusercontent.com&redirect_
    uri=https%3A%2F%2Flogin.gearbest.com%2Fsocial%2Ffacade%2F2&response_type=code&scope=email%20profile&
    display=popup&flowName=GeneralOAuthFlow">
    <img id="google_link" src="./images/google.png" alt=""></a>
   </div>
   
   </div>
   </div>
   
</div> 
    `
}
export {registerForm}