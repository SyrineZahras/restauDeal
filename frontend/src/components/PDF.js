import React from 'react';
import Pdf from "react-to-pdf";
import QRCode from "react-qr-code";


const ref = React.createRef();


const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
      <h1>RestauDeal</h1>
       Votre Email: <p>{props.email}</p>
       Votre Numéro: <p>{props.num}</p>
       
       Votre QR Code : <QRCode value={props.email} />
       
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;