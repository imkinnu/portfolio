import React from 'react';
import Hr from './../../Hr/Hr'
import Row from './../../UI/Row/Row';
import Col from './../../UI/Col/Col';

const projects = (props) => {
    const { className } = props;
    return (
        <div className={className}>
            <h6 className="text-left font-weight-bold"><i className="fa fa-star text-success" aria-hidden="true"></i> PROJECTS</h6>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />
            <div className="scroll-automatic">
                <Row className="mb-3">
                    <Col className="lg-12">
                        <h6 className="text-left font-weight-bold">APEMCL(Andhra Pradesh Enivironmental Management Corporation Limited)</h6>
                        <Hr className="bg-seablue w-25" margin="2px !important" />
                        <h6 className="font-weight-bold text-left">Description :</h6>
                        <p className="text-left mb-3">Andhra Pradesh Environment Management Corporation Limited (APEMCL) is incorporated on 13th January 2020 as a Government Company for providing effective mechanism of collection, transportation, storage, treatment, processing, delivery and disposal of the industrial waste and other wastes through online.</p>
                        <h6 className="font-weight-bold text-left">Responsibilities :</h6>
                        <p className="text-left mb-0">1 . Responsible for creating well structured front end with reusable components.</p>
                        <p className="text-left mb-0">2 . Responsible for creating multiple pages and implmented React router to navigate between the pages.</p>
                        <p className="text-left mb-0">3 . Integrating with third-party services and external APIs as a part of implementation using PHP.</p>
                    </Col>
                </Row>
                <Row className="">
                    <Col className="lg-12">
                        <h6 className="font-weight-bold text-left">Technologies :</h6>
                        <p className="text-left mb-0">1 . React Js</p>
                        <p className="text-left mb-0">2 . PHP</p>
                        <p className="text-left mb-0">3 . MY SQL</p>
                    </Col>
                </Row>
            </div>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />
            <div className="scroll-automatic mt-3">
                <Row className="mb-3">
                    <Col className="lg-12">
                        <h6 className="text-left font-weight-bold">E-Waste(Electronic Waste Management)</h6>
                        <Hr className="bg-seablue w-25" margin="2px !important" />
                        <h6 className="font-weight-bold text-left">Description :</h6>
                        <p className="text-left mb-3">E-Waste Application Facillitates exchange of Electronic Waste between empaneled vendors and citizens elaborates effective mechanism of collection, transportation, storage, treatment, processing, delivery and disposal of the Electronic waste through online.</p>
                        <h6 className="font-weight-bold text-left">Responsibilities :</h6>
                        <p className="text-left mb-0">1 . Responsible for creating bootstrap admin panel for user to watch the reprts of E-waste Collection by making granular react components and implmented React router to navigate between the pages.</p>
                        <p className="text-left mb-0">2 . Responsible for creating well structured front end with reusable components.</p>
                        <p className="text-left mb-0">3 . Wrote Services using MYSQL and PHP for the Mobile App and helped the App Developer to make use of reusable components.</p>
                    </Col>
                </Row>
                <Row className="">
                    <Col className="lg-12">
                        <h6 className="font-weight-bold text-left">Technologies :</h6>
                        <p className="text-left mb-0">1 . React Js</p>
                        <p className="text-left mb-0">2 . PHP</p>
                        <p className="text-left mb-0">3 . MY SQL</p>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default projects;