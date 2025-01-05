import { useState } from 'react';

const PartForm = () => {
    const [partNumber, setPartNumber] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const clearMsg = () => {
        setError(null);
        setSuccess(null);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const newPart = { partNumber, manufacturer, description };
        const json = JSON.stringify(newPart);

        const response = await fetch('/api/parts', {
            method:'POST',
            body: json,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            setPartNumber('');
            setManufacturer('');
            setDescription('');
            console.log('Part added');
            setSuccess('Part added successfully');
        }
        const data = await response.json();

        if(!response.ok){
            setError(data.error)
            console.log('Error adding part');
        }

        
        console.log(data);

    }

    return(
        
        <form onClick={clearMsg} onSubmit={handleSubmit} >

            <h1>Add a New Part</h1>

            <label>Part Number</label>
            <input 
                type="text" 
                value={partNumber} 
                onChange={(e) => setPartNumber(e.target.value)} 
            />
           
            <label>Manufacturer</label>
            <input 
                type="text" 
                value={manufacturer} 
                onChange={(e) => setManufacturer(e.target.value)} 
            />
            
            <label>Description</label>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            
            <button>Add Part</button>
            {error && <div className='error'>{error}</div>}
            {success && <div className='success'>{success}</div>}
        </form>

    )

}

export default PartForm;