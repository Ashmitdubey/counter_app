import React from 'react'
import Button from '../button/button'
import './home.css'
import Card from '../card1/card'

const Home = () => {
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
        {/* <Card title="Ashmit" describe="I created a step-by-step CRA counter app guide (with full file contents) in a canvas titled “CRA Counter App - Step-by-step”. Open the document to copy the commands and code into your project."/>
        <Card title="Ashmit" describe="I created a step-by-step CRA counter app guide (with full file contents) in a canvas titled “CRA Counter App - Step-by-step”. Open the document to copy the commands and code into your project."/>
        <Card title="Ashmit" describe="I created a step-by-step CRA counter app guide (with full file contents) in a canvas titled “CRA Counter App - Step-by-step”. Open the document to copy the commands and code into your project."/> */}
    {cardData.map(cd => (
        <Card describe={cd.desc} />
    ))}
    
    </div>
)

}


export default Home

// make 5 type of diffrent cards with diffrents data 
// use props for cards varients and JSON data for cards content
// id card card 5 for diffrent students