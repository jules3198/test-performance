import React from 'react';
import NewAdressComponent from '../AdressForm.component';

export default function Modal ({show, title, disabled, state}) {
    // The Modal -->
    return (

        show && (
        <div className="pmodal-overlay">
        <div className="pmodal-wrapper">
        <div className="pmodal">
            <div className="pmodal-header">
                <p> {title}</p>
                <button
                    type="button"
                    className="pmodal-close-button"
                    onClick={disabled}
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className="pmodal-body">
                    <NewAdressComponent state={state}/>
            </div>
        </div>
        </div>
    </div>   
    ));
  
}