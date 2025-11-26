// import React from 'react'
import Button from '../button/button'
import './home.css'
import Card from '../card1/card'
import ToggleSwitch from '../toggle/ToggleSwitch'
import { useState } from 'react'
import BulbOn from '../../assests/bulb_on.png'
import BulbOff from '../../assests/bulb_off.png'


const Home = () => {
    const [toggle, setToggle]=useState(false)
    const cardData = [{
        desc: "I created a step-by-step CRA counter app guide (with full file contents) in a canvas titled “CRA Counter App - Step-by-step”. Open the document to copy the commands and code into your project."
    },{
        desc: "I created a step-by-step CRA counter app guide (with full file contents) in a canvas titled “CRA Counter App - Step-by-step”. Open the document to copy the commands and code into your project."
    },{
        desc: "I created a step-by-step CRA counter app guide (with full file contents) in a canvas titled “CRA Counter App - Step-by-step”. Open the document to copy the commands and code into your project."
    },{
        desc: "I created a step-by-step CRA counter app guide (with full file contents) in a canvas titled “CRA Counter App - Step-by-step”. Open the document to copy the commands and code into your project."
    },{
        desc: "I created a step-by-step CRA counter app guide (with full file contents) in a canvas titled “CRA Counter App - Step-by-step”. Open the document to copy the commands and code into your project."
    },
]
return (
    <div>
        <Button name="Inc" className="btn-color" />
        <Button name="ashmit"  bgColor="blue" fontSize="30px"/>
        <br></br>
        <Card title="LUCKNOW PUBLIC " describe="STUDENT: ASHMIT DUBEY " name="CLASS: PLAY" sec="ROLL NO. :666" bgColor="rgb(246, 230, 230)"/>
        <br></br>
        <Card title="CMS" describe="STUDENT: AMIT BHAIYA " name="CLASS: PREP" sec="ROLL NO. :555" bgColor="rgba(240, 249, 190, 1)"/>
        <br></br>
        <Card title="ST. MARRY" describe="STUDENT: EMRAN BHAIYA" name="CLASS: 11th" sec="ROLL NO. :13" bgColor="rgba(172, 253, 237, 1)"/>
        <br></br>
        <Card title="ST. JOSEPH" describe="STUDENT: FARAZ BHAIYA " name="CLASS: IIIrd" sec="ROLL NO. :324" bgColor="rgba(255, 210, 182, 1)"/>
        <br></br>
        <Card title="STELLA MARRY" describe="STUDENT: PAPPU BAJPAI " name="CLASS: IST" sec="ROLL NO. :888" bgColor="rgba(185, 186, 253, 1)"/>
    {/* {cardData.map(cd => (
        <Card describe={cd.desc} /> */}
    {/* ))} */}


        <br></br>



        <Card bgColor="rgba(245, 177, 225, 1)" showCircle="{true}">
        <div className="circle" style={{
            backgroundColor: toggle ? "green" : "yellow", 
        }}></div>
        {/* <ToggleSwitch /> */}
            <Button name={toggle ? "on" : "off"} className="btn-color" onClick={() => setToggle( toggle ? false :true) }/>
        </Card>


        <br></br>



        <Card bgColor="rgba(251, 46, 46, 1)">
        {/* <ToggleSwitch /> */}

        <img src={toggle? BulbOn : BulbOff} className='imgon'/>
        <br></br> 
            <Button name={toggle ? "on" : "off"} className="btn-color" onClick={() => setToggle( toggle ? false :true) }/>
        </Card>
    </div>
)

}


export default Home

// make 5 type of diffrent cards with diffrents data 
// use props for cards varients and JSON data for cards content
// id card card 5 for diffrent students