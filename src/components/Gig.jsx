import "./Gig.css"
import {useState} from "react";

const Gig = (props) => {
    const [favourite, setFavourite] = useState(false)
    const adjustFavourite = () => {
        setFavourite(!favourite)
        }
    let status
    if(favourite) {
        status = "Yes"
    } else {
        status = "No"
    }
    return (
        <div id="gig" class="gig">
        <h3 class="band">{props.band}</h3>
        <img src={props.image} class="image"></img>
        <p class="gig-description">{props.description}</p>
        <p class="date">{props.date}</p>
        <p class="location">{props.location}</p>
        <button onClick={adjustFavourite}>Click Button to adjust Favourite</button>
        <p class="favourite">Favourite: {status}</p>
        </div>
    );
};

export default Gig;
