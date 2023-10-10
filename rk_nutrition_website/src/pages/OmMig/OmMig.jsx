import './OmMig.css';
import React from 'react';

const OmMig  = () => {
    return (
        <div className='ommig'>

            <div id='leftside'>
                <div style={{height: "50vh", padding: "50px"}}>
                    <h1>Hvem er jeg?</h1>
                    <p>Jeg er autoriseret klinisk diætist med speciale i... </p>
                </div>

                <div style={{height: "25vh", padding: "50px"}}>
                    <h2>Andre siger:</h2>
                    <div style={{display: 'inline-grid'}}>
                        <div style={{gridColumnStart: "1", gridColumnEnd: "1", width: '300px'}}>
                            <p>Udtalelse 1</p>
                        </div>
                        <div style={{gridColumnStart: "2", gridColumnEnd: "2", width: '300px'}}>
                            <p>Udtalelse 2</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='rightside'>
                <div style={{height: "25vh", padding: "50px"}}>
                    <img src="images/small.png" alt="" width={"200px"}/>
                </div>
                <div id='info'>
                    <h2>Kvalifikationer</h2>
                    <p>...</p>
                    
                    <h2>Speciale</h2>
                    <p>...</p>

                    <h2>Erfaring</h2>
                    <p>...</p>

                </div>
                
            </div>
        </div>

    );
};

export default OmMig;