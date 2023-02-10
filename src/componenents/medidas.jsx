

const Medidas = (props) => {
    return (
        <div id='medidas' className='text-center'>
            <div className='section-title medidas'>
                <h2>TAMAÑOS Y CARACTERÍSTICAS</h2>
            </div>
            <div id="medidas-cont">

                <div className="container-fluid">

                    <div className='row '>
                        <div className="col-5 col-sm-7 col-md-7">
                            <div className='thumbnail'>
                                <img src='../img/medidas_bodegas.png' alt='...' className='team-img' />

                            </div>
                        </div>
                        <div className="col-7 col-md-5 text-left">
                            <h2>¿NECESITAS MÁS ESPACIO?</h2>
                            <h3>
                                Contamos con 3 distintos tamaños de MINI BODEGAS
                                para que puedas almacenar todo lo que necesites.</h3>
                            <br />


                            <div className="container-fluid">
                                <div className='row '>
                                    <div className="col-6 col-sm-6 col-md-6">
                                        <div className='contact-item'>
                                            <h3>
                                                <span>
                                                    <i className='fa fa-clock-o'></i> Horarios:
                                                </span>{' '}
                                                <br />
                                                Lunes - Sabado
                                                <br />
                                                8:30 AM - 12:30 PM
                                                <br />
                                                1:30 PM - 5:30 PM

                                            </h3>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-6">
                                        <h3>            <div className='contact-item'>
                                    
                                                <span>
                                                    <i className='fa fa-phone'></i> Phone
                                                </span>
                                                <br />
                                                +52 81-8335-7045
                                                <br />
                                                +52 81-8327-6369
                                                
                                        
                                        </div></h3>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Medidas;