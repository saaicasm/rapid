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
            <h4><strong>Part Number: </strong>{part.partNumber}</h4>
            <p><strong>Manufacturer: </strong>{part.manufacturer}</p>
            <p><strong>Description: </strong>{part.description}</p>
            <p>{part.createdAt}</p>
            <button onClick={handleDelete}> Delete Part</button>
        </div>
    )
}

export default PartDetails;