import { useEffect, useState } from "react";

import PartDetails from "../components/PartDetails";
import PartForm from "../components/PartForm";
const Home = () => {

const [parts, setParts] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/api/parts');
        const json = await response.json();
        
        if(response.ok) {       
            setParts(json);
        }
    };

    fetchData();

}, []);

    return (
        <div className="home">
           <div className="parts">
                {parts.map(part => (
                    <PartDetails key={part._id} part={part} />
                ))}
           </div>
           <div className="form">
                <PartForm/>
           </div>
        </div>
    );
}

export default Home;