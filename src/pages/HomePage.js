import React, {useState} from "react";
import "./Style.css";



export default function HomePage () {

    const [value, setValue] = useState("");
    const [summary, setSummary] = useState("");

    const handleButtonClick = async () => {
        setValue(document.getElementById("textarea").value);
        const response=await fetch("http://localhost:3000",{
            method:"POST",
            body:value,
        })
        const sum = await response.text()
        setSummary(sum);
    
    }

    return (
        <>
        <div class="row">   
            <div class="header">
                <h1>summaRiff</h1>
                <p>A text-to-speech & speech-to-text summarizer</p>
            </div>
            
            <div class="column left"> <center>
                <br></br>
                <p class="bolded">Text</p>
                <div class="wrapper">
                <div class = "textArea"><center>
                    <textarea id="textarea"></textarea>
                    </center>
                </div>   
                </div>
                <br></br> 
                <button onClick={handleButtonClick} class="btn">Summarize</button>
            </center></div>
            
            <div class="column right"> <center>
                <br></br>
                <p class="bolded">Summary</p>   
                <script src="Vocalize.js"></script>
                <div class="wrapper">
                <div id = "printed">
                    <p id="text">{summary}</p>
                </div> 
                </div>
                <br></br>
                <div class="button">
                    <form action="#">
                        <button class="btn">Speaker Button</button>
                    </form>
                </div>
            </center></div>
            
        </div>
        
        </>
    );
}