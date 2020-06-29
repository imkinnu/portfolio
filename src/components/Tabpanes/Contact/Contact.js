import React from 'react';
import Hr from './../../Hr/Hr'
import Row from './../../UI/Row/Row';
import Col from './../../UI/Col/Col';
import Card from './../../Card/Card';
import Image from './../../Image/Image';

const contact = (props) => {
    const { className, id } = props;
    return (
        <div class={className} id={id} role="tabpanel">
            <h6 className="text-left font-weight-bold"><i class="fa fa-star text-success" aria-hidden="true"></i> Contact</h6>
            <Hr className="bg-seablue w-75" margin="2px !important" width="90px" />
            <Row className="">
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/fb-logo.png" name="Facebook" height="30px" width="40px" />
                            </Col>
                            <Col className="lg-4">
                                <span>Facebook</span>
                            </Col>
                            <Col className="lg-4">
                                <a target="blank" href="https://www.facebook.com/kirantirumalasette"><svg viewBox="0 0 24 24" style={{
                                    width: "36px", height: "36px", padding: "8px"
                                }}><path fill="#00C853" d="M10.59, 13.41C11, 13.8 11, 14.44 10.59, 14.83C10.2, 15.22 9.56, 15.22 9.17, 14.83C7.22, 12.88 7.22, 9.71 9.17, 7.76V7.76L12.71, 4.22C14.66, 2.27 17.83, 2.27 19.78, 4.22C21.73, 6.17 21.73, 9.34 19.78, 11.29L18.29, 12.78C18.3, 11.96 18.17, 11.14 17.89, 10.36L18.36, 9.88C19.54, 8.71 19.54, 6.81 18.36, 5.64C17.19, 4.46 15.29, 4.46 14.12, 5.64L10.59, 9.17C9.41, 10.34 9.41, 12.24 10.59, 13.41M13.41, 9.17C13.8, 8.78 14.44, 8.78 14.83, 9.17C16.78, 11.12 16.78, 14.29 14.83, 16.24V16.24L11.29, 19.78C9.34, 21.73 6.17, 21.73 4.22, 19.78C2.27, 17.83 2.27, 14.66 4.22, 12.71L5.71, 11.22C5.7, 12.04 5.83, 12.86 6.11, 13.65L5.64, 14.12C4.46, 15.29 4.46, 17.19 5.64, 18.36C6.81, 19.54 8.71, 19.54 9.88, 18.36L13.41, 14.83C14.59, 13.66 14.59, 11.76 13.41, 10.59C13, 10.2 13, 9.56 13.41, 9.17Z"></path></svg></a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/whatsapp-logo.png" name="Whatsapp" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>Whatsapp</span>
                            </Col>
                            <Col className="lg-4">
                                <a target="blank" href="https://api.whatsapp.com/send?phone=+917097081191"><svg viewBox="0 0 24 24" style={{
                                    width: "36px", height: "36px", padding: "8px"
                                }}><path fill="#00C853" d="M10.59, 13.41C11, 13.8 11, 14.44 10.59, 14.83C10.2, 15.22 9.56, 15.22 9.17, 14.83C7.22, 12.88 7.22, 9.71 9.17, 7.76V7.76L12.71, 4.22C14.66, 2.27 17.83, 2.27 19.78, 4.22C21.73, 6.17 21.73, 9.34 19.78, 11.29L18.29, 12.78C18.3, 11.96 18.17, 11.14 17.89, 10.36L18.36, 9.88C19.54, 8.71 19.54, 6.81 18.36, 5.64C17.19, 4.46 15.29, 4.46 14.12, 5.64L10.59, 9.17C9.41, 10.34 9.41, 12.24 10.59, 13.41M13.41, 9.17C13.8, 8.78 14.44, 8.78 14.83, 9.17C16.78, 11.12 16.78, 14.29 14.83, 16.24V16.24L11.29, 19.78C9.34, 21.73 6.17, 21.73 4.22, 19.78C2.27, 17.83 2.27, 14.66 4.22, 12.71L5.71, 11.22C5.7, 12.04 5.83, 12.86 6.11, 13.65L5.64, 14.12C4.46, 15.29 4.46, 17.19 5.64, 18.36C6.81, 19.54 8.71, 19.54 9.88, 18.36L13.41, 14.83C14.59, 13.66 14.59, 11.76 13.41, 10.59C13, 10.2 13, 9.56 13.41, 9.17Z"></path></svg></a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/github-logo.png" name="GitHub" height="30px" width="40px" />
                            </Col>
                            <Col className="lg-4">
                                <span>GitHub</span>
                            </Col>
                            <Col className="lg-4">
                                <a target="blank" href="https://github.com/imkinnu"><svg viewBox="0 0 24 24" style={{
                                    width: "36px", height: "36px", padding: "8px"
                                }}><path fill="#00C853" d="M10.59, 13.41C11, 13.8 11, 14.44 10.59, 14.83C10.2, 15.22 9.56, 15.22 9.17, 14.83C7.22, 12.88 7.22, 9.71 9.17, 7.76V7.76L12.71, 4.22C14.66, 2.27 17.83, 2.27 19.78, 4.22C21.73, 6.17 21.73, 9.34 19.78, 11.29L18.29, 12.78C18.3, 11.96 18.17, 11.14 17.89, 10.36L18.36, 9.88C19.54, 8.71 19.54, 6.81 18.36, 5.64C17.19, 4.46 15.29, 4.46 14.12, 5.64L10.59, 9.17C9.41, 10.34 9.41, 12.24 10.59, 13.41M13.41, 9.17C13.8, 8.78 14.44, 8.78 14.83, 9.17C16.78, 11.12 16.78, 14.29 14.83, 16.24V16.24L11.29, 19.78C9.34, 21.73 6.17, 21.73 4.22, 19.78C2.27, 17.83 2.27, 14.66 4.22, 12.71L5.71, 11.22C5.7, 12.04 5.83, 12.86 6.11, 13.65L5.64, 14.12C4.46, 15.29 4.46, 17.19 5.64, 18.36C6.81, 19.54 8.71, 19.54 9.88, 18.36L13.41, 14.83C14.59, 13.66 14.59, 11.76 13.41, 10.59C13, 10.2 13, 9.56 13.41, 9.17Z"></path></svg></a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col className="lg-6">
                    <Card className="shadow-lg border-0">
                        <Row className="">
                            <Col className="lg-4">
                                <Image source="./assets/images/linkedin-logo.png" name="LinkedIn" height="30px" width="30px" />
                            </Col>
                            <Col className="lg-4">
                                <span>LinkedIn</span>
                            </Col>
                            <Col className="lg-4">
                                <a target="blank" href="https://www.linkedin.com/in/kiran-tirumalasetti-51b0b9187/"><svg viewBox="0 0 24 24" style={{
                                    width: "36px", height: "36px", padding: "8px"
                                }}><path fill="#00C853" d="M10.59, 13.41C11, 13.8 11, 14.44 10.59, 14.83C10.2, 15.22 9.56, 15.22 9.17, 14.83C7.22, 12.88 7.22, 9.71 9.17, 7.76V7.76L12.71, 4.22C14.66, 2.27 17.83, 2.27 19.78, 4.22C21.73, 6.17 21.73, 9.34 19.78, 11.29L18.29, 12.78C18.3, 11.96 18.17, 11.14 17.89, 10.36L18.36, 9.88C19.54, 8.71 19.54, 6.81 18.36, 5.64C17.19, 4.46 15.29, 4.46 14.12, 5.64L10.59, 9.17C9.41, 10.34 9.41, 12.24 10.59, 13.41M13.41, 9.17C13.8, 8.78 14.44, 8.78 14.83, 9.17C16.78, 11.12 16.78, 14.29 14.83, 16.24V16.24L11.29, 19.78C9.34, 21.73 6.17, 21.73 4.22, 19.78C2.27, 17.83 2.27, 14.66 4.22, 12.71L5.71, 11.22C5.7, 12.04 5.83, 12.86 6.11, 13.65L5.64, 14.12C4.46, 15.29 4.46, 17.19 5.64, 18.36C6.81, 19.54 8.71, 19.54 9.88, 18.36L13.41, 14.83C14.59, 13.66 14.59, 11.76 13.41, 10.59C13, 10.2 13, 9.56 13.41, 9.17Z"></path></svg></a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default contact;