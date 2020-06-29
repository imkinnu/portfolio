import React from 'react';
import Hr from './../../Hr/Hr'

const about = (props) => {
    const { className, id } = props;
    return (
        <div class={className} id={id} role="tabpanel">
            <h6 className="text-left font-weight-bold"><i class="fa fa-star text-success" aria-hidden="true"></i> ABOUT</h6>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />

            <p className="text-left">Having around 1.4 year(s) of experience in Web Application Development, Analysis, Design,Customization,Coordination of Development and Deployment across the software solutions,Having very good knowledge on <b>React JS,Bootstrap,PHP</b> Responsible for development of new highly-responsive, web-based user interface and Building <b>reusable components</b> and front-end libraries for future use ,Work with product team and graphic designers Have very good understanding of <b>REST API</b> ,Have very good hands on <b>React Redux,hooks</b> to Develop a flexible and well-structured front-end architecture, along with the APIs to support it.</p>
            <p className="text-left">Specialized in writing the web services using <b>PHP</b> to support across various platforms which can help us to integrate React with Third Party apps</p>
            <p className="text-left">Have excellent quality of adapting to latest technology with <b>analytical, logical</b> and innovative knowledge to provide excellent software solutions. <b>Productive,</b> dedicated and capable of working independently.</p>
            <h6 className="text-left font-weight-bold"><i class="fa fa-star text-success" aria-hidden="true"></i> WORK EXPERIENCE</h6>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />
            <p className="text-left">Currently Working as <b>Web Application Developer</b> at Entro Labs Pvt Ltd since April 2019 to till date</p>
        </div>
    )
}

export default about;