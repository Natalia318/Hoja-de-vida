import './Contact.css';

import github from './github.png';
function Contact(){
    return(
        <div className="contacto">
            <hr/>
            <h2>DATOS PERSONALES </h2>
            <div className="dat">
               
            <div className="info"><i class="fas fa-id-card-alt"></i>TI 103180021</div>
            <div className="info"><i class="fas fa-user"></i> 15/11/2003</div> 
            </div>
            <div className="dat1">
            <div className="info"><i className="fas fa-envelope-open"></i> nata.yuri2003@gmail.com</div>
            <div className="info"><i className="fas fa-phone"></i> 321 8900 801</div>
            <div className="info"><i className="fas fa-map-marker-alt"></i> Calle 137 # 112a 33</div>
            </div>
            <hr/>
            <h2>FORMACIÓN</h2>
            <div>
            <div className="lugar">
                <div className="info"> <strong>INSTITUTO NACIONAL DE APRENDIZAJE SENA</strong></div>
                </div>
                <div className="espe">
                <div className="info"> <strong>Técnologo en Análisis y Desarrollo de Sistemas de Información</strong>/FEB 2021- CURSANDO</div>
                </div>
            </div>
            <div>
            <div className="lugar">
                <div className="info"> <strong>INSTITUTO NACIONAL DE APRENDIZAJE SENA</strong></div>
                </div>
                <div className="espe">
                <div className="info"> <strong>Técnico en desarollo de software</strong>/ FEB-2019-NOV 2020</div> 
                </div>
            </div>
            <div>
            <div className="lugar">
            <div className="info"> <strong>COLEGIO DISTRITAL ALBERTO LLERAS CAMARGO</strong></div> 
                </div>
                <div className="espe">
                <div className="info"> <strong>Bachiller Academico</strong> /DIC 2020</div>
                </div>
            </div>
            
            <hr/>
            <h2>CURSOS </h2>
            <div>
            
                <div className="lugar">
                <div className="info"> <strong>INSTITUTO NACIONAL DE APRENDIZAJE SENA</strong></div>
                </div>
                <div className="espe">
                <div className="info"> <strong>Complementaria virtual en estructura de programación C++ (Nivel I) </strong> /AGO 2020</div> 
                </div>
            </div>
            <div></div>
            <div>
                <div className="lugar">
                <div className="info"> <strong>UNIVERSIDAD PAMPLONA (MISION TIC 2022- MINTIC)</strong></div> 
                </div>
                <div className="espe">
                <div className="info"> <strong>Fundamentos de Programación</strong> /DIC 2020</div>  
                </div>
            </div>
            
            
            <hr/>

            <div className='ref'>
                <div className="enlaces">

                <a href="https://github.com/" target="_blank">
                    <img src={github} alt="Github" />
                </a>
                 </div>
            </div>

            

        </div>

    );
}

export default Contact;