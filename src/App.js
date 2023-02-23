import React from 'react';
import './App.css';
import logo from './zoom-logo.png';

function App() {
  return (
    <div className='App'>
        <header>
            <div className='left-header'>
                <div className='LogoName'>
                    <img class="logo" src={logo} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li role="none"><a id="btnSolutions" class="dropdown" href='#'>Solutions
                            <span className='btnArrow'></span>
                        </a></li>
                        <li role="none"><a role="menuitems" href='https://zoom.us/pricing'>Plans & Pricing</a></li>
                        <li role="none"><a role="menuitems" href='https://explore.zoom.us/en/contactsales/'>Contact Sales</a></li>
                        <li role="none"><a role="menuitems" href='#' className='dropdown'>Resources
                            <span className='btnArrow'></span>
                        </a></li>
                    </ul>
                </nav>
            </div>
            <div className='right-header'>
                <nav>
                    <ul>
                        <li role="none"><a href='https://zoom.us/join'>Join</a></li>
                        <li role="none"><a href='#' className='dropdown'>Host
                            <span className='btnArrow'></span>
                        </a></li>
                        <li className="rightDisplay"><a href='https://zoom.us/signin'>Sign In</a></li>
                        <li className='rightDisplay'>
                            <div className='signfree'>
                                <a className='btn-bg-color' href='https://zoom.us/signup' role="button">Sign Up, It's Free</a>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className='menuBar'>
                    <i class="fa-solid fa-bars fa-lg"></i>
                </div>
            </div>
        </header>

        <main className="mainContainer">
            <div className="main-row">
                    <div className="left-col">
                        <div className='sign-title'>
                            <h1>Sign in</h1>
                            <p>Welcome Back!</p>
                        </div>
                        <div className='zsf-left-col'>
                            <span role='none' className='zsf-span'>New to Zoom? <a href='https://zoom.us/signup' role='btnSignUp'>Sign Up Free</a></span>
                        </div>
                    </div>

                    <div className="right-col">
                        <div className='formContainer'>
                            <div className='form-row'>
                                <label htmlFor='Email'>Email Address</label>
                                <div className='emailAddress'>
                                    <input
                                        type='email'
                                        name='email'
                                        id='Email'
                                        placeholder='Email Address'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='passwordLabel'>
                                    <label htmlFor='Password'>Password</label>
                                
                                    <span role='forgot password' className='password-span' id='resetPassword'>
                                        <a href='#'>Forgot Password?</a>
                                    </span>
                                </div>
                                <div className="password">
                                    <input 
                                        id='Password'
                                        name='yourPassword'
                                        placeholder='Password'
                                        type='password'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-zps-tos'>
                                    <span className='form-zps'>
                                        By signing, I agree to the <a href='#' className='zoom-ps' role='none'>Zoom's Privacy Statement</a> and <a href='#' className='zoom-tos' role='none'>Term's of Service.</a>
                                    </span>
                                </div>
                            </div>

                            <div className='form-row margin-0'>
                                <div className='form-signIn'>
                                    <span role='submit' className='signIn-btn' id='sign-btn'>
                                        Sign In
                                    </span>
                                </div>
                            </div>

                            <div className='form-check'>
                                <input 
                                    type='checkbox'
                                    value='signedIn'
                                />
                                <span>Stay signed in</span>
                            </div>
                            
                            <div className='form-divider'>
                                <div className='divider-text'></div>
                                <div className='form-text-divider'>
                                    <span>Or sign in with</span>
                                </div>
                                <div className='divider-text'></div>
                            </div>

                            <div className='sc-links'>
                                <a href='https://zoom.us/web/sso/login?en=signin' role='button' className='login-btn'>
                                    <span className='icons'><i class="fa-solid fa-key fa-lg fa-black"></i></span>
                                    <span className='font-sm'>SSO</span>
                                </a>

                                <a href='https://zoom.us/apple_oauth_signin' role='button' className='login-btn'>
                                    <span className='icons'><i class="fa-brands fa-apple fa-lg fa-black"></i></span>
                                    <span className='font-sm'>Apple</span>
                                </a>

                                <a href='https://zoom.us/google_oauth_signin' role='button' className='login-btn'>
                                    {/* <span className='icons'><i class="fa-brands fa-google fa-lg fa-red"></i></span> */}

                                    <span className='iconss'><i class="fab fa-google fa-1x"></i></span>
                                    <span className='font-sm'>Google</span>
                                </a>

                                <a href='https://zoom.us/facebook_oauth_signin' role='button' className='login-btn'>
                                    <span className='icons'><i class="fa-brands fa-facebook fa-lg fa-blue"></i></span>
                                    <span className='font-sm'>Facebook</span>
                                </a>
                            </div>

                            <div className='form-row'>
                                <p className='form-pp'>
                                    Zoom is protected by reCAPTCHA and their <a href="#" role='button'>Privacy Policy</a> and <a href='#' role='button'>Terms of Service</a> apply.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </main>

        <footer className='ft-container' role='contentbody'>
            <div className='ft-nav'>
                <div className='ft-about'>
                    <div className='ft-title' role='heading'>
                        <h4>
                            <a href='https://explore.zoom.us/en/about/' target='_blank'>About</a>
                        </h4>
                    </div>
                    <ul>
                        <li><a href='https://blog.zoom.us/' target='_blank' category='Navfooter'>Zoom Blog</a></li>
                        <li><a href='https://explore.zoom.us/en/customer/all/' target='_blank' category='Navfooter'>Customers</a></li>
                        <li><a href='https://explore.zoom.us/en/team/' target='_blank' category='Navfooter'>Our Team</a></li>
                        <li><a href='https://careers.zoom.us/home' target='_blank' category='Navfooter'>Careers</a></li>
                        <li><a href='https://marketplace.zoom.us/' target='_blank' category='Navfooter'>Integrations</a></li>
                        <li><a href='https://partner.zoom.us/' target='_blank' category='Navfooter'>Partners</a></li>
                        <li><a href='https://investors.zoom.us/' target='_blank' category='Navfooter'>Investors</a></li>
                        <li><a href='https://explore.zoom.us/en/press/' target='_blank' category='Navfooter'>Press</a></li>
                        <li><a href='https://explore.zoom.us/en/zoom-esg/' target='_blank' category='Navfooter'>ESG Resposibility</a></li>
                        <li><a href='https://zoom.us/media-kit' target='_blank' category='Navfooter'>Media Kit</a></li>
                        <li><a href='https://explore.zoom.us/en/resources/' target='_blank' category='Navfooter'>How to Videos</a></li>
                        <li><a href='https://developers.zoom.us/' target='_blank' category='Navfooter'>Developer Platform</a></li>
                    </ul>
                </div>

                <div className='ft-download'>
                    <div className='ft-title' role='heading'>
                        <h4>
                            <a href='https://zoom.us/download' target='_blank'>Download</a>
                        </h4>
                    </div>
                    <ul>
                        <li><a href='https://zoom.us/download#client_4meeting' target='_blank' category='Navfooter'>Meeting Client</a></li>
                        <li><a href='https://zoom.us/download#room_client' target='_blank' category='Navfooter'>Zoom Room Client</a></li>
                        <li><a href='https://zoom.us/download#chrome_ext' target='_blank' category='Navfooter'>Browser Extension</a></li>
                        <li><a href='https://zoom.us/download#outlook_plugin' target='_blank' category='Navfooter'>Outlook Plug-in</a></li>
                        <li><a href='https://zoom.us/download#lync_plugin' target='_blank' category='Navfooter'>Lync Plug-in</a></li>
                        <li><a href='https://zoom.us/download#mobile_app' target='_blank' category='Navfooter'>Android App</a></li>
                        <li><a href='https://explore.zoom.us/en/virtual-backgrounds/' target='_blank' category='Navfooter'>Zoom Virtual Background</a></li>
                    </ul>
                </div>

                <div className='ft-sales'>
                    <div className='ft-title' role='heading'>
                        <h4>
                            <a href='https://explore.zoom.us/en/contactsales/' target='_blank'>Sales</a>
                        </h4>
                    </div>
                    <ul>
                        <li className='numSales'><span>1.888.799.9666</span></li>
                        <li><a href='https://explore.zoom.us/en/contactsales/' target='_blank'>Contact Sales</a></li>
                        <li><a href='https://zoom.us/pricing' target='_blank'>Plan &amp; Pricing</a></li>
                        <li><a href='https://explore.zoom.us/docs/en-us/livedemo.html' target='_blank'>Request a Demo</a></li>
                        <li><a href='https://explore.zoom.us/docs/en-us/events.html' target='_blank'>Webinars and Events</a></li>
                    </ul>
                </div>

                <div className='ft-support'>
                    <div className='ft-title' role='heading'>
                        <h4>
                            <a href='https://support.zoom.us/hc/en-us' target='_blank' category='Navfooter'>Support</a>
                        </h4>
                    </div>
                    <ul>
                        <li><a href='https://zoom.us/test' target='_blank' category='Navfooter'>Test Zoom</a></li>
                        <li><a href='https://zoom.us/signin' target='_blank' category='Navfooter'>Account</a></li>
                        <li><a href='https://support.zoom.us/hc/en-us' target='_blank' category='Navfooter'>Support Center</a></li>
                        <li><a href='https://learn-zoom.us/live-training' target='_blank' category='Navfooter'>Live Training</a></li>
                        <li><a href='https://zoom.us/feed' target='_blank' category='Navfooter'>Feedback</a></li>
                        <li><a href='https://explore.zoom.us/docs/en-us/contact.html' target='_blank' category='Navfooter'>Contact Us</a></li>
                        <li><a href='https://explore.zoom.us/en/accessibility/' target='_blank' category='Navfooter'>Accessibility</a></li>
                        <li><a href='https://devsupport.zoom.us/' target='_blank' category='Navfooter'>Developer Support</a></li>
                        <li><a href='https://explore.zoom.us/en/trust/legal-compliance/' target='_blank' category='Navfooter'>Privacy, Security, Legal</a></li>
                        <li><a href='https://explore.zoom.us/en/trust/legal-compliance/' target='_blank' category='Navfooter'>Policies, and Modern Slavery</a></li>
                        <li><a href='https://explore.zoom.us/en/trust/legal-compliance/' target='_blank' category='Navfooter'>Act Transparency Statement</a></li>
                    </ul>
                </div>

                <div className='cm-language'>
                    <div className='ft-title stop-hover' role='heading'>
                        <span>Language</span>
                    </div>

                    <div class='language'>
                        <div onclick="myFunction()" class='dropdown' id='arrowMenu'>
                            <span>English</span>

                            <div class='dropArrow'></div>
                        </div>
                        
                        
                        <ul class='drop-content' id='myDP'>
                            <li class='active'><a href='#'>Espa&#241;ol</a></li>
                            <li><a href='#'>Italiano</a></li>
                            <li><a href='#'>Bahasa Indonesia</a></li>
                            <li><a href='#'>Turkce</a></li>
                        </ul>
                        
                    </div>

                    <div className='ft-currency' role='heading'>

                        <div className='ft-title stop-hover' role='heading'>
                            <span>Currency</span>
                        </div>

                        <div class='language'>
                            <div onclick="myFunction()" class='dropdown' id='arrowMenu'>
                                <span>US Dollars $</span>

                                <div class='dropArrow'></div>
                            </div>
                            
                            <ul class='drop-content' id='myDP'>
                                <li class='active'><a href='#'>US Dollars $</a></li>
                            </ul>
                            
                        </div>
                        
                    </div>

                    <div className='ft-icons'>
                        <a href="https://blog.zoom.us/" target='_blank' className='col-icons icons-wordpress' category='NavFooter'>
                            <span><i class="fa-brands fa-wordpress fa-lg"></i></span>
                        </a>
                        <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F2532259" target='_blank' className='col-icons icons-linkedin' category='NavFooter'>
                            <span><i class="fa-brands fa-linkedin-in fa-lg"></i></span>
                        </a>
                        <a href="https://twitter.com/zoom" target='_blank' className='col-icons icons-twitter' category='NavFooter'>
                            <span><i class="fa-brands fa-twitter fa-lg"></i></span>
                        </a>
                        <a href="https://www.youtube.com/zoommeetings" target='_blank' className='col-icons icons-youtube' category='NavFooter'>
                            <span><i class="fa-brands fa-youtube fa-lg"></i></span>
                        </a>
                        <a href="https://www.facebook.com/zoomvideocommunications" target='_blank' className='col-icons icons-facebook' category='NavFooter'>
                            <span><i class="fa-brands fa-facebook fa-lg"></i></span>
                        </a>   
                        <a href="https://www.instagram.com/zoom/" target='_blank' className='col-icons icons-instagram' category='NavFooter'>
                            <span><i class="fa-brands fa-instagram fa-lg"></i></span>
                        </a>                                                                                       
                    </div>
                </div>
            </div>

            <div className='ft-copyright'>
                <div className='ft-info'>
                    Copyright &copy;2022 Zoom Video Communications, Inc. All rights reserved.
                    <a href='https://explore.zoom.us/en/privacy/' target='_blank' category='nav-copyright'>Privacy</a>
                    <a href='https://explore.zoom.us/en/trust/' target='_blank' category='nav-copyright'>Trust Center</a>
                    <a href='https://zoom.us/community-standards' target='_blank' category='nav-copyright'>Community Standars</a>
                    <a href='https://explore.zoom.us/en/trust/legal-compliance/' target='_blank' category='nav-copyright'>Legal &amp; Compliance</a>
                    <a href='#'>D Not Sell My Personal Infomation</a>
                    <a href='#'>Cookie Preferences</a>
                </div>
            </div>

            <div className='ft-blank-space'></div>
        </footer>
    </div>
  );
}

export default App;

