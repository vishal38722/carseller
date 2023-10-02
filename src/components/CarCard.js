import React from 'react'

const CarCard = (props) => {
  return (
    <div className='my-3'>
      <div className="card" style={{ borderRadius: '20px' }}>
        <div>
          <img src={props.url} height={250} className="card-img-top" alt="..." style={{ borderRadius: '30px', padding: '10px' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.brand + " " + props.model}</h5>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
            <p>Capacity : {props.capacity}</p>
            <p>Fuel : {props.fuel}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
            <p>Mileage : {props.mileage} km/litre</p>
            <p>Type : {props.type}</p>
          </div>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
            <p>Rent : ${props.rent} /month</p>
            <a href={props.url} target="blank" className="btn btn-sm btn-primary"
              style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              Rent Now
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CarCard
