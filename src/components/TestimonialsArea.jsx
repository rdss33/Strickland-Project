import "./TestimonialsArea.css"
import {LOREM} from "../assets/lorem.js"

export default function TestimonialsArea(){
    return(
        <div id="testimonials-area">
            <div className="testimonial-card">
                <p><span>{LOREM}</span></p>
                <h4><span> - Customer Name</span></h4>  
            </div>
            <hr className="crossing-line"/>
        </div>
    );
}