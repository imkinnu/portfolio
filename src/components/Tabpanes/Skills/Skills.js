import React from 'react';
import Hr from './../../Hr/Hr'
import Row from './../../UI/Row/Row';
import Col from './../../UI/Col/Col';
import Card from './../../Card/Card';
import Image from './../../Image/Image';

const skills = (props) => {
    const { className } = props;
    return (
        <div class={className} >
            <h6 className="text-left font-weight-bold"><i class="fa fa-star text-success" aria-hidden="true"></i> SKILLS</h6>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />
            <h6 className="text-left">Programming/Markup Languages</h6>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />
            <Row className="m-2">
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/react.png" name="React JS" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>React JS</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/redux.png" name="Redux" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>Redux</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="m-2">
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/JavaScript-logo.png" name="Javascript" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>Javascript</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/jquery-logo.png" name="jQuery" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>jQuery</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="m-2">
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/ajax-logo.jpg" name="AJAX" height="30px" width="40px" />
                            </Col>
                            <Col className="lg-4">
                                <span>AJAX</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/bootstrap-logo.png" name="Bootstrap" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>Bootstrap</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="m-2">
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/php-logo.png" name="php" height="30px" width="40px" />
                            </Col>
                            <Col className="lg-4">
                                <span>PHP</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/mysql-logo.png" name="MYSQL" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>MYSQL</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="m-2">
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/html-logo.png" name="HTML" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>HTML</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/css-logo.png" name="Bootstrap" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>CSS</span>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default skills;