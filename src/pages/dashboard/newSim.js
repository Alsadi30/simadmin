



const NewSim = ({ attachment }) => {
    console.log(attachment)
    return (
        <>
            <div>ds </div>
            <button>
                <a href={`http://localhost:5000/wordfile/${attachment.file_1}`} download > Word File </a>
            </button>
            
            {
                attachment.file_2 && <button> <a rel="noreferrer" target="_blank" href={`http://localhost:5000/uploads/${attachment.file_2}`} download > Download File1</a></button>
              }  
              {
                attachment.file_3 && <button> <a rel="noreferrer" target="_blank" href={`http://localhost:5000/uploads/${attachment.file_3}`} download > Download File2</a></button>
            }
            {
                attachment.file_4 && <button> <a rel="noreferrer" target="_blank" href={`http://localhost:5000/uploads/${attachment.file_4}`} download > Download File3</a></button>
              }  
            
        
     </>
    )
}

export default NewSim 