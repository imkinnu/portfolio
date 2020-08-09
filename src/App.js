import React, { useState } from 'react';
import './App.css';
import Container from './components/UI/Container/Container'
import Row from './components/UI/Row/Row';
import Col from './components/UI/Col/Col'
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Image from './components/Image/Image'
import Hr from './components/Hr/Hr';
import Hyperlink from './components/HyperLink/Hyperlink';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/Tabpanes/About/About'
import Projects from './components/Tabpanes/Projects/Projects'
import Skills from './components/Tabpanes/Skills/Skills'
import Contact from './components/Tabpanes/Contact/Contact'
import ColorSwitcher from './components/ColorSwitcher/ColorSwitcher'
import col from './components/UI/Col/Col';

const App = () => {

  let [color, setColor] = useState('#0091ea');

  let style = {
    bgcolor: {
      backgroundColor: `${color}`,
      transition: '0.4s linear all'
    }
  }

  let changeColor = (color) => {
    setColor(color);
  }


  return (
    <Router basename='/'>
      <div style={style.bgcolor} className="App vh-100 d-flex justify-content-center align-items-center bg-seablue text-consolas">
        <Container >
          <Row className="">
            <Col className="lg-12">
              <Card className="shadow-lg border-0">
                <Row className="">
                  <Col className="lg-3">
                    <Image source="./assets/images/download.png" name="Kiran Tirumalasetti" height="" width="" />
                    <h6 className="mt-2 font-weight-bold">KIRAN TIRUMALASETTI </h6>
                    <Hr className="bg-seablue mt-4 w-75 mx-auto" width="90px" />
                    <span className="text-14 font-weight-bold">Web Application Developer</span>
                    <Hr className="bg-seablue mt-4 w-75 mx-auto" width="90px" />
                    <ColorSwitcher changeColor={(color) => changeColor(color)} />
                    <Navbar bgcolor={color} />
                    <Hr className="bg-seablue mt-5 w-75 mx-auto" margin="16px" width="90px" />
                    <Row className="d-flex justify-content-center align-items-center">
                      <Col className="lg-2">
                        <Hyperlink href="#!" className="text-seablue" >
                          <i class="fa fa-github" aria-hidden="true"></i>
                        </Hyperlink>
                      </Col>
                      <Col className="lg-2">
                        <Hyperlink href="#!" className="text-seablue" >
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </Hyperlink>
                      </Col>
                      <Col className="lg-2">
                        <Hyperlink href="#!" className="text-seablue" >
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </Hyperlink>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="lg-9">
                    <div className="" style={{ overflowY: "scroll", overflowX: "hidden", height: "75vh" }}>
                      <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/contact" component={Contact} />
                      </Switch>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container >
      </div >
    </Router >
  );
}

export default App;
