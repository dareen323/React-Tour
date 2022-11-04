import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Tours() {

  const arr = [
    {
      Id: 1,
      name: "petra",
      info:"",
      Image:"https://images.unsplash.com/photo-1548786811-dd6e453ccca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      price:10,
    },
    {
      Id: 2,
      name: "Jarash",
      info:"",
      Image:"https://images.unsplash.com/photo-1600945722738-a031d2dce4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      price:10,
    },
    {
      Id: 3,
      name: "Salt",
      info:"",
      Image:"https://images.unsplash.com/photo-1642371594065-a9bff2c80380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      price:10,
    },
    {
      Id: 4,
      name: "Amman",
      info:"",
      Image:"https://images.unsplash.com/photo-1598417642835-f05aa7bd7702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      price:10,
    },
    {
      Id: 5,
      name: "Aqaba",
      info:"",
      Image:"https://images.unsplash.com/photo-1557544779-e170636404c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
      price:10,
    }
    ,
    {
      Id: 6,
      name: "Wadi Rum",
      info:"",
      Image:"https://images.unsplash.com/photo-1558985040-ed4d5029dd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      price:10,
    }
  ];
  return (
    <div className="d-flex flex-row m-5 flex-wrap">
       {arr.map(e => (
          <MDBCol size='4'>
       <MDBCard style={{ maxWidth: '300px' }} className="p-2 mb-3">
        {/* <MDBCol md="6"> */}
       <MDBCardImage src={e.Image} position='top' alt='...' style={{ maxWidth: '300px' }}/>
       {/* </MDBCol> */}
      <MDBCardBody>
        {/* <MDBCol md="6"> */}
        <MDBCardTitle>{e.name}</MDBCardTitle>
        <MDBBtn >More Details</MDBBtn>
        {/* </MDBCol> */}
      </MDBCardBody>
     </MDBCard>
     </MDBCol>
      ))}
    </div>
  )
}
