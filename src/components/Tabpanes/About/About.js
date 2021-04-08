import React from 'react';
import Hr from './../../Hr/Hr'

const about = (props) => {
    const { className, id } = props;
    return (
        <div class={className} id={id} role="tabpanel">
            <h6 className="text-left font-weight-bold"><i class="fa fa-star text-success" aria-hidden="true"></i> ABOUT</h6>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />

            <p className="text-left content">Having <b>2+ year(s)</b> of experience in <b>Web & Mobile </b>Application Development, Building quality websites and Mobile applications with <b>Bootstrap, CSS, and JavaScript,MYSQL, React Native</b></p>
            <p className="text-left content">Expertize in PHP, Bootstrap Oriented Web Design, Designing <b>Dashboards</b>, Reports, end to end web and mobile app development.</p>
            <p className="text-left content">Motivated designer and developer with experience creating custom websites through PHP and Bootstrap</p>
            <p className="text-left content">Strong creative and analytical skills, Team player with an eye for detail. CSS, JavaScript and MYSQL.</p>
            <p className="text-left content">Have very good understanding on making use of <b>REST API's</b> which can help us to integrate our web (or) mobile app with <b>Third Party apps</b></p>
            <p className="text-left content">Skilled in creating Dashboards, Reports as per the user requirement, Responsive Design</p>
            <p className="text-left content">Have Sound Debugging and Performance tuning Skills.</p>
            <p className="text-left content"><b>Migrated</b> data to PHP from different Environments like <b>Java, .Net</b> etc...</p>
            <p className="text-left content">Have excellent quality of adapting to latest technology with analytical, logical and innovative knowledge to provide excellent software solutions. <b>Productive, dedicated and capable of working independently.</b></p>
            <h6 className="text-left font-weight-bold"><i class="fa fa-star text-success" aria-hidden="true"></i> WORK EXPERIENCE</h6>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />
            <p className="text-left">Currently Working as <b>Web Application Developer</b> at Entro Labs Pvt Ltd since March 2019 to till date</p>
        </div>
    )
}

export default about;