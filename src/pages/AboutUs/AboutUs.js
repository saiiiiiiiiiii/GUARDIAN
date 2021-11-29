import React from 'react'
import "./AboutUs.css";
import {SocialIcon} from 'react-social-icons';
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <>
      <section className="section-1" style={{backgroundImage:"linear-gradient(to right,#903dff,#05f6ff)"}}>
          <div className="container" >
              <span className="roun_icon"></span>
              <h2 className="main-text">
                  Guardian Link
              </h2>
              <p className="para1">
                  <b>Humble Beginnings. Amazing Journeys.</b>
              </p>
              <p className="para2">Bootstrapped. Founded 2016.</p>

          </div>

      </section>
      <section className="section-2" style={{backgroundColor:"black"}}>
        <div className="container">
                <h2 className="main-text">
                    <b>Roadmap</b>
                </h2>
                <h4 className="main-text2">
                Our Journey is grounded in the innovation of Blockchain industry
                </h4>
        
                <div className="vl"></div>
                <span className="roun_icon1"></span>
                <h2 className="main-text3">
                    <b>2016</b>
                </h2>
                <p className="para1">The company was established as a Blockchain
                   <br/>R&D & Preferred Product Development organization</p>
                   <span className="roun_icon2"></span>
                   <h2 className="main-text4">
                    <b>2017</b>
                </h2>
                <p className="para2">Over 20+ Custom Blockchains Implemented<br/>
                    2 Payment Gateways Productized <br/>Supported Launch of 2 Major Tokens</p>
                    <span className="roun_icon3"></span>
                    <h2 className="main-text5">
                        <b>2018</b>
                    </h2>
                    <p className="para3">
                        <b>
                            <span style={{color:"red",fontSize:"1.4em"}}>Tokenization & Products</span>
                        </b><br/>
                        Over 30+ Custom Blockchains Integrated<br/>
                        3 Additional Payment Gateways Developed 
                        Creation<br/> Of 3 Major Tokens for 3rd Party Offerings
                    </p>
                    <div className="vl-1"></div>
                    <span className="roun_icon4"></span>
                    <h2 className="main-text6">
                        <b>2019</b>
                    </h2>
                    <p className="para4">
                        <b>
                            <span style={{color:"red",fontSize:"1.4em"}}> Non-Fungible Tokens(NFTs)</span>
                        </b><br/>
                        R&D Of Non-Fungible Tokens and Productization<br/>
                        Development Of NFT Marketplace and Launchpad
                    </p>
                    <hr style={{color:"red"}}/>
                    <div className="vl-2"></div>
                    <span className="roun_icon5"></span>
                    <h2 className="main-text7"> 
                        <b>2020</b>
                    </h2>
                    <p className="para5">
                        <b>
                        <span style={{color:"red",fontSize:"1.4em"}}>Product Launch</span><br/>
                        </b>
                        Branded NFT MarketPlace & LaunchPad<br/>
                        R&D On Legitimacy Protocol & Marketplace Dynamics<br/>
                        DeepEther Spyder for AI Pattern Recognition<br/>
                    </p>
                    <div className="vl-3"></div>
                    <span className="roun_icon6"></span>
                    <h2 className="main-text8">
                        2021 Q2
                    </h2>
                    <p className="para6">
                        <b><span style={{color:"red",fontSize:"1.4em"}}>Partnerships</span><br/></b>
                        Guardian Link Launched.<br/>
                        International Partnerships & Business Development Infrastructure<br/>
                        R&D Accelerated for Legitimacy Protocol Framework<br/>
                        Began EIP Development<br/>
                        
                    </p>
                    <span className="roun_icon7"></span>
                    <h2 className="main-text9">
                        2021 Q4
                    </h2>
                    <p className="para7">
                        <b><span style={{color:"red",fontSize:"1.4em"}}>Public and Private Sale</span></b><br/>
                        Launch Tokenomics For Private & Public Sale<br/>
                        Support 40+ Branded NFT Marketplaces Globally For Brands & Creators
                    </p>
                    <span className="roun_icon8"></span>
                    <h2 className="main-text10">
                        2022 Q1
                    </h2>
                    <p className="para8">
                        <b><span style={{color:"red",fontSize:"1.4em"}}>Legitimacy Framework Launch</span></b><br/>
                        Launch Wallet Cipher<br/>
                        Open Wallet Verification Service For Marketplaces and Creators<br/>
                        Provide First Open EIP Submission<br/>
                    </p>
                    <div className="vl-4"></div>
                    </div>
      </section>
      <section className="section-3" style={{backgroundColor:"white",paddingTop:"2.7rem",paddingBottom:"8rem"}}> 
      
                <div className="container">
                <h2 className="main-text">Our</h2>
                <span className="roun_icon"></span>
                <h2 className="main-text1">Team</h2>
                </div>
                <div className="box1" >
                    <img className="image1"src="https://cdn.guardianlink.io/product-hotspot/images/kp.jpg" alt="imgg"/>
                    
                </div>
                <h2 className="name1">Keyur Patel</h2>
                
                    <p className = "para1">Co-Founder & Chairmam</p>
                    <p className="sub-para1">
                     He is one the most dynamic visionaries in the digital realm. He incubated hatched and funded
                     some of the most successful companies including Amazon, Netflix, Twitter, PayPal, Sky+, NDTV,
                     Yahoo! and Fabrik
                    </p>
                    <div className="box2" >
                    <img className="image2"src="https://cdn.guardianlink.io/product-hotspot/images/ram_3.jpg" alt="imgg"/>
                
                </div>
                <span>
                <SocialIcon className="link-icon1" url="https://www.linkedin.com/signup" target="_blank" />
                </span>
                <h2 className="name2">Ramkumar Subramaniam</h2>
                
                    <p className = "para2">Co-Founder & CEO</p>
                    <p className="sub-para2">
                    Having helped create a $3B MarketCap for our partners, Ram, an early crypto-adopter and 
                    diehard decentralisation fan, is a Co-Founder of Guardian. His vision is to make sure 1 
                    Million Artists make $1 Million each on Guardian Link.
                    </p>
                    <div className="box3" >
                    <img className="image3"src="https://www.guardianlink.io/product-hotspot/images/arjun.jpg" alt="imgg"/>
                
                </div>
                <span>
                <SocialIcon className="link-icon2" url="https://www.linkedin.com/signup" target="_blank" />
                </span>
                <h2 className="name3">Arjun Reddy</h2>
                
                    <p className = "para3">Co-Founder & CTO</p>
                    <p className="sub-para3">
                    Arjun fancys a role like Prometheus who brings the Fire from Gods to mortals, 
                    he makes technology that only Billion dollar conglomerates take advantage of, 
                    to the realm of startups. 
                    </p>
                    <div className="box4" >
                    <img className="image4"src="https://www.guardianlink.io/product-hotspot/images/kamesh.png" alt="imgg"/>
                
                </div>
                <span>
                <SocialIcon className="link-icon3" url="https://www.linkedin.com/signup" target="_blank" />
                </span>
                <h2 className="name4">Kameshwaran Elangovan</h2>
                
                    <p className = "para4">Co-Founder & COO</p>
                    <p className="sub-para4">
                    Coming from the traditional IT startup world, Kamesh founded a company during his 
                    college years and grew it up to be 350+ strong. He has executed 50+ of the most 
                    complex crypto project launches for our R&amp;D partners so that their communities
                     had reason to trust their roadmaps.
                    </p>
                    <div className="box5" >
                    <img className="image5"src="https://cdn.guardianlink.io/product-hotspot/images/sandrina_v1.jpg" alt="imgg"/>
                
                </div>
                <span>
                <SocialIcon className="link-icon4" url="https://www.linkedin.com/signup" target="_blank" />
                </span>
                <h2 className="name5">Sandrina Paula</h2>
                
                    <p className = "para5">Vice President</p>
                    <p className="sub-para5">
                    Sandrina is the new age millennial, fashion trendsetter who is a crypto geek herself.
                    She has worked on some of the most interesting brands such as Fedex, HCL, Four Seasons, 
                    Sky+ for Business Development &amp; as a Human Resource Strategist. 
                    </p>
                    <h2 className="main-head">Advisors</h2>
                <span className="roun_icon1"></span>
                <h2 className="main-head1">Team</h2>
                <div className="box6" >
                    <img className="image6"src="https://www.guardianlink.io/product-hotspot/images/barrie.jpg" alt="imgg"/>
                
                </div>
                <span>
               
                </span>
                <h2 className="name6">Barrie M. Osborne</h2>
                    <p className="sub-para6">
                    A prolific hollywood mogul, producer of Academy Award winning titles like Lord of the Rings, 
                    The Matrix, The Great Gatsby and several such epic media ventures. He is now leading Hollywood 
                    to adopting blockchain through ventures like Guardian.
                    </p>
                    <div className="box7" >
                    <img className="image7"src="https://www.guardianlink.io/product-hotspot/images/ross.jpg" alt="imgg"/>
                
                </div>
                <span>
               
                </span>
                <h2 className="name7">Ross Levinsohn</h2>
                    <p className="sub-para7">
                    Current CEO of Maven Media which controls Sports Illustrated and The History 
                    Channel among other media brands. He is best known for his roles at Yahoo and Fox, 
                    Ross has served as CEO of a number of high profile brands -- driving change, culture and results.
                    </p>
                    <div className="box8" >
                    <img className="image8"src="https://www.guardianlink.io/product-hotspot/images/sonja_3.jpg" alt="imgg"/>
                
                </div>
                <span>
               
                </span>
                <h2 className="name8">Sonja Nuttall</h2>
                    <p className="sub-para8">
                    Sonja Nuttall is the Global Creative Director and Partner at TCG. As a leading British 
                    designer, Sonja Nuttall’s talent has been called up by varying fields of design,
                    from interiors to fashion and even the interior of a Rolls Royce.
                    </p>
                
            </section>
            <section className="section-4" style={{backgroundImage:"linear-gradient(to right, #fc725c, #fff677)",paddingBottom:"7rem"}}>
              <div className="container">  
            <h2 className="main-text">
                <b>Exclusive Invite</b>
            </h2>
            <p className="para">
            The decentralization movement is what will propel our world to a Type-1 Civilization. Just as the 
            internet boom changed the world putting progress on steroids, this decentralized revolution through 
            Smart Contracts will usher in a new age of thinking across national borders and ethnicities. An 
            emerging population looking to join this crypto revolution has to navigate various challenges. 
            This is where Guardian Link serves as a reliability protocol and enables indivisibility, 
            recoverability, and theft-proofs NFTs and Smart Contracts. If you are interested in being part 
            of the biggest paradigm shift in decentralized space, drop us a line.
            </p>
            </div>
            <div class="news__form2">
                            <input type="email" placeholder="name@domain.com" />
                            <button class="news__btn2">Subscribe</button>
                        </div>
            </section>
            
           <section className="section-5" style={{backgroundColor:"black",paddingBottom:"25rem"}}>
           <div className="column1" > 
               <img className="logo" src="https://guardianlink.io/product-hotspot/images/logo_horizondal.svg" alt=""/>
               <p className="para">Mint. Protect. Monetize</p>
               <h2 className="main-font"><b>Community</b></h2>
               <SocialIcon className="discord" url="https://discord.com/invite/GuardianLink" target="_blank"/>
               <SocialIcon className="telegram" url="https://telegram.me/guardiannft" target="_blank"/>
               <SocialIcon className="twitter" url="https://twitter.com/Guardian_NFT" target="_blank"/>
               </div>
               <div className="column2"  > 
               <ul>
               <li><Link className="item1"to="/aboutus">About Us</Link></li>
               <li><Link className="item2" to="/nocodeplatform">No-Code Platform</Link></li>
               <li><Link className="item3" to="/legitimacyplatform">Legitimacy Protocol</Link></li>
               <li><a className="item4" href="http://localhost:3000/home/#join-us">Join us</a></li>
               <li><a className="item5" href="https://www.guardianlink.io/blog">blog</a></li>
               <li> <a className="item6">Contact us</a></li>
               
                    </ul>
                    <div className="vl"></div>
               </div>
               <div className="column3" > 
               <span className="roun_icon"></span>
               <h2 className="col3-main-font" style={{color:"white"}}>
                   <b>Creating&nbsp;<span style={{color:"red"}}>NFT&nbsp;</span>Revolution.</b>
                   
               </h2>
               <p className="col-3-para">Distributed. De-centralized. Scalable. Secure.</p>
               <h2 className="col3-main-font2">
                   <b>Exclusive Invite</b>
               </h2>
               <div class="news__form3">
                            <input type="email" placeholder="name@domain.com" />
                            <button class="news__btn3">Subscribe</button>
                        </div>
                        
               </div>
           </section>
           <div className="container-icons" >
                <a href="https://discord.com/invite/GuardianLink" target="_blank">
                    <img className="icon1"src="https://www.guardianlink.io/product-hotspot/images/discord.svg"/>
                </a>
                <a href="https://t.me/guardiannft" target="_blank">
                    <img className="icon2" src="https://www.guardianlink.io/product-hotspot/images/telegram.svg"/>

                </a>
                <a href="https://twitter.com/Guardian_NFT" target="_blank">
                    <img className="icon3" src="https://www.guardianlink.io/product-hotspot/images/twitter.svg"/>

                </a>

            </div>

            
      
      
      </>
    )
}

export default AboutUs
