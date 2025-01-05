const partDetails = ({part}) => {
    return (
        <div className="part-details">
            <h4>{part.partNumber}</h4>
            <p>{part.manufacturer}</p>
            <p>{part.description}</p>
            <p>{part.createdAt}</p>
        </div>
    )
}

export default partDetails;