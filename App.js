import React from "react"
import About from "./components/About.js" 
import Footer from "./components/Footer.js" 
import Info from "./components/Info.js" 
import Interests from "./components/Interests.js" 

export default function App () {
    return(
        <main className = "mainClass">
            <div className = "infoBox">
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
        </main>
    )
}