import { usePartsContext } from '../hooks/usePartsContext';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';


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
<<<<<<< HEAD
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
=======
            <h4><strong>Part Number: </strong>{part.partNumber}</h4>
            <p><strong>Manufacturer: </strong>{part.manufacturer}</p>
            <p><strong>Description: </strong>{part.description}</p>
            <p>{formatDistanceToNow(new Date(part.createdAt), {addSuffix:true})}</p>
            <button onClick={handleDelete}> Delete Part</button>
>>>>>>> c733826 (finishing up)
        </div>
    )
}

export default PartDetails;