import { useState } from 'react';
import { usePartsContext } from '../hooks/usePartsContext';
const PartForm = () => {
    const {dispatch} = usePartsContext();
    const [partNumber, setPartNumber] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const clearMsg = () => {
        setError(null);
        setSuccess(null);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const newPart = { partNumber, manufacturer, description };

        const response = await fetch('/api/parts', {
            method:'POST',
            body: JSON.stringify(newPart),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        
        if(!response.ok){
            setError(data.error)
            setEmptyFields(data.emptyFields);
            console.log('Error adding part');
        }

        if(response.ok){
            setPartNumber('');
            setManufacturer('');
            setDescription('');
            setError(null);
            setEmptyFields([]);
            console.log('Part added');
            setSuccess('Part added successfully');
            dispatch({type:'ADD_PART', payload: data});
            
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
                className={emptyFields.includes('partNumber') ? 'empty' : ''}
            />
           
            <label>Manufacturer</label>
            <input 
                type="text" 
                value={manufacturer} 
                onChange={(e) => setManufacturer(e.target.value)} 
                className={emptyFields.includes('manufacturer') ? 'empty' : ''}
            />
            
            <label>Description</label>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                className={emptyFields.includes('description') ? 'empty' : ''}
            />
            
            <button>Add Part</button>
            {error && <div className='error'>Please enter Valid Part details</div>}
            {success && <div className='success'>{success}</div>}
        </form>

    )

}

export default PartForm;