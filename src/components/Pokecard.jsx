

export default function Pokecard({id,name, type,image}) {
   

  return (

    <>
    <div className="rounded d-flex justify-content-center " style={{
        backgroundColor: '#d3d3d3',
        width: '200px',
        flexDirection:'column',
        alignItems:'center',
        margin:'1rem',
        padding:'1rem',
        height:'20rem'
    }}>
        <p className="text-primary fw-bolder fs-3">{name}</p>
        <img src={image} alt={id} />
        <p className="fw-bolder">Type: {type}</p>
    </div>
    </>
  )
}
