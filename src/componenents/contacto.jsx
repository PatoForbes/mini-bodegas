import GMap from "./Map"

import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Contacto = (props) => {
    return (
        <div id='ubicacion' className='text-center'>
            <div className='section-title contacto'>
                <h2>UBICACÍON</h2>
            </div>
            <div id="contacto-cont">

                <div className="container-fluid">

                    <div className='row '>
                        <h3>
                            <Icon icon={locationIcon} className="pin-icon" /> Blvd. Miguel de la Madrid KM 5.8, San Rafael Arcangel, 67119 Guadalupe, N.L.
                        </h3>


                        <div className="col-12 col-sm-12 col-md-12">
                            <GMap />
                        </div>


                    </div>
                </div>
            </div>

            <div id='footer'>
                <div className='container text-center'>
                    <p>
                        &copy; 2023 MINI BODEGAS

                    </p>
                </div>
            </div>
        </div>


    );
}

export default Contacto;