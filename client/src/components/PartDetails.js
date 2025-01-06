import { usePartsContext } from '../hooks/usePartsContext';

const PartDetails = ({part}) => {
    const {dispatch} = usePartsContext();
    const handleDelete = async() => {
        const response = await fetch(`/api/parts/${part._id}`, {
            method:'DELETE'
        });
        const json = await response.json();

        if(response.ok){
            console.log('Part deleted');
            dispatch({type:'DELETE_PART', payload: json})
         }
    }

    return (
        <div className="part-details">
            <h4 className="part-number">
                <strong>Part Number: </strong>{part.partNumber}
            </h4>
            
            <div className="part-info">
                <p><strong>Manufacturer: </strong>{part.manufacturer}</p>
                <p><strong>Description: </strong>{part.description}</p>
                <p><strong>Created At: </strong>{new Date(part.createdAt).toLocaleDateString()}</p>
            </div>
    
            <div className="action-button">
                <button onClick={handleDelete}>Delete Part</button>
            </div>
        </div>
    )
}

export default PartDetails;