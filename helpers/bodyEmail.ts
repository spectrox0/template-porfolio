import {ContactInfo} from "../models/ContactInfo";
import {backgroundImage} from "../config";
import {paletteColorsDark} from "../styles/variables";

const stylesText = "box-sizing: border-box; padding:1rem; font-size: 1em; letter-spacing: 0.11em; color: #fff; margin: 1rem 0;"
const stylesTextBold = "box-sizing: border-box;text-shadows: 0 0 3px rgba(255,255,255, 0.8)";
const stylesTitle = `
box-sizing: border-box;
 border-bottom: 1px solid #fff ;
  text-transform: uppercase;
  padding:1rem; 
  font-size: 1.4em;
   letter-spacing: 0.11em; 
color: ${paletteColorsDark.primary}; 
margin: 2% 0;`

export const bodyEmail = ({email, name, message, subject}: ContactInfo) => {
    return (
        `  <div style="
                      min-height:100vh;
                      display:flex; 
                      flex-direction: column;
                      flex:1; 
                      box-sizing: border-box;
                      width: 100%;
                      background-color: rgba(28,28,28,0.7);
                      background-image: url("${backgroundImage}");
                      background-size: cover;
                      background-repeat: no-repeat;
                      background-position: center center;
                      align-items:center;
                      border:solid 1px #fff;
                      padding: calc(.5rem + 2%);
                      " >
                  <div style="
                   max-width: 1280px;
                   box-sizing: border-box;
                   width:100%;
                   margin: 0 auto;
                   background-color: rgba(28,28,28,0.7);
                   border-radius: 10px;
                   padding: 2%;
                   backdrop-filter: blur(2px);
                   box-shadow: 0 0 8px rgba(0,0,0,0.5);
                    "> 
                     <h1 style="${stylesTitle}"> Hi <b style="${stylesTextBold}"> Viviana </b> , you have been contacted !  </h1>
                     <p style="${stylesText}" > <b style="${stylesTextBold}"> EMAIL </b> : ${email}  </p> 
                     <p style="${stylesText}"> <b style="${stylesTextBold}"> NAME  </b> : ${name}  </p> 
                     <p style="${stylesText}"> <b style="${stylesTextBold}" > SUBJECT </b> : ${subject}  </p> 
                     <p style="${stylesText}"> <b style="${stylesTextBold}"> MESSAGE </b> : ${message}  </p> 
                  </div>
             </div>
      `
    )
}