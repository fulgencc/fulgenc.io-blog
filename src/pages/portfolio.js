import React from 'react'
import { Link } from 'gatsby'
import { FaArrowLeft, FaMapMarkerAlt, FaRegEnvelope, FaGithub, FaLinkedin, FaUniversity } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { Container, Row, Col, Image, Badge, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import eiswelt from './eiswelt-gelato.png';
import waves from './waves.svg';
import beach2 from'./beach-2.png';
import beach from './beach.svg';
import office from './office.svg';
import office2 from './office-2.svg';
import bar from './bar.png';
import pw from './pw.jpg';

export default function Portfolio() {

    // const useStyles = makeStyles((theme) => ({
    //   overlay {
    //     content: '',
    //     width: 200,
    //     height: 200,
    //     position: absolute,
    //     z-index: 1,
    //     top: 0,
    //     left: 0,
    //     background: linear-gradient(bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)
    // }
    // }));

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 2,
          staggerChildren: 0.2
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }
  

    return (
      <React.Fragment>
        <Link to='/'><h5 className='p-3 text-light' style={{position:'absolute', zIndex: 1}}><FaArrowLeft /> back to the blog</h5></Link>
          <img className='mb-0 header' style={{marginLeft: 'auto', marginRight: 'auto'}} src={waves} />
          <Container fluid className='text-center bg-light'>
            <Container className='py-3'>
              <Row className='pt-5 text-center'>
                <Col>
                    <motion.h1 animate={{ y:0 }} initial={{y:-500}} transition={{ type: 'spring', damping: 300 }} className='display-4 text-light name-title'>Chris Fulgencio</motion.h1>
                    <motion.h5 animate={{opacity: 1}} initial={{opacity:0}} transition={{delay: 1.3, ease: 'easeIn'}} className='text-light name-title'>Full Stack Engineer</motion.h5>
                </Col>
              </Row>
                <Row className='p-3 text-center'>
                  <Col sm={{span:4, offset:4}} className='p-3'>
                    <motion.div className='text-center' variants={container} initial="hidden" animate="show">
                      <motion.p variants={item}> <FaMapMarkerAlt/> Los Angeles, California</motion.p>
                      <motion.p variants={item}> <FaRegEnvelope/> chris@fulgenc.io</motion.p>
                      <a href='https://github.com/fulgencc'><motion.p variants={item} className='text-dark'><FaGithub/> GitHub</motion.p></a>
                      <a href='https://www.linkedin.com/in/chris-fulgencio-b25554103/' className='text-dark'><motion.p variants={item}><FaLinkedin/> LinkedIn</motion.p></a>
                      <motion.p variants={item}> <FaUniversity/> University of California, Irvine</motion.p>
                    </motion.div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={{span: 8, offset: 2}} className='pb-3'>
                    <motion.div animate={{ y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{ type: 'spring', damping: 10000, delay:3.5 }}>
                      <h5 className='pb-3'>Skills</h5>
                        <Badge pill variant='primary' className='mx-2'>C#</Badge>
                        <Badge pill variant='primary' className='mx-2'>JavaScript</Badge>
                        <Badge pill variant='primary' className='mx-2'>TypeScript</Badge>
                        <Badge pill variant='primary' className='mx-2'>Python</Badge>
                        <Badge pill variant='primary' className='mx-2'>CSS</Badge>
                        <Badge pill variant='primary' className='mx-2'>React</Badge>
                        <Badge pill variant='primary' className='mx-2'>Redux</Badge>
                        <Badge pill variant='primary' className='mx-2'>SQL Server</Badge>
                      </motion.div>
                  </Col>
                </Row>
            </Container>
            <motion.div animate={{ y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{ type: 'spring', damping: 10000, delay:3.9 }} className='py-3'>
              <Container className='py-3'>
                <h3 className='section-title'>Work Experience</h3>
                <Row className='mb-5'>
                  <Col sm={{span: 8, offset: 2}}>
                    <Card className='border shadow'>
                      <Card.Img src={pw} />
                        <Card.Body>
                          <Card.Title><h3>Los Angeles County Public Works</h3></Card.Title>
                          <Card.Text>
                            <p className='mt-3 text-left'>Developing full stack web applications using React, .NET Core Web API, and SQL Server.</p>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className='mb-5'>
                  <Col sm={{span: 8, offset: 2}}>
                    <Card className='border shadow'>
                      <Card.Img src={eiswelt} />
                      <Card.Body>
                        <Card.Title><h3>Eiswelt Gelato</h3></Card.Title>
                        <Card.Text>
                          <p className='mt-3 text-left'>Contract web designer for Eiswelt Gelato. Designed and created their website.</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <h3 className='section-title'>Projects</h3>
                <Row className='mb-5'>
                    <Col sm={{span:8, offset:2}}>
                      <Card className='border shadow'>
                          <Card.Img src={beach2} />
                        <Card.Body>
                          <Card.Title><h3>Fulgenc.io Blog</h3></Card.Title>
                          <Card.Text>
                            <Badge pill variant='primary' className='mx-2'>HTML5</Badge>
                            <Badge pill variant='primary' className='mx-2'>CSS</Badge>
                            <Badge pill variant='primary' className='mx-2'>Sass</Badge>
                            <Badge pill variant='primary' className='mx-2'>JavaScript</Badge>
                            <Badge pill variant='primary' className='mx-2'>React</Badge>
                            <Badge pill variant='primary' className='mx-2'>Gatsby</Badge>
                            <p className='mt-3 text-left'>My own personal blog I made to talk about React &amp; and my career in web development.</p>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col sm={{span:8, offset:2}}>
                      <Card className='border shadow'>
                          <Card.Img src={office2} />
                        <Card.Body>
                          <Card.Title><h3>Building &amp; Safety Permit Office API</h3></Card.Title>
                          <Card.Text>
                            <Badge pill variant='primary' className='mx-2'>C#</Badge>
                            <Badge pill variant='primary' className='mx-2'>API</Badge>
                            <Badge pill variant='primary' className='mx-2'>.NET Core</Badge>
                            <Badge pill variant='primary' className='mx-2'>LINQ</Badge>
                            <Badge pill variant='primary' className='mx-2'>SQL Server</Badge>
                            <p className='mt-3 text-left'>An API providing appointment data for each of the department's Building and Safety offices. Also utilizes authentication and authorization via oAuth.</p>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col sm={{span:8, offset:2}}>
                      <Card className='border shadow'>
                          <Card.Img src={office} />
                        <Card.Body>
                          <Card.Title><h3>Queue Management Application</h3></Card.Title>
                          <Card.Text>
                            <Badge pill variant='primary' className='mx-2'>React</Badge>
                            <Badge pill variant='primary' className='mx-2'>TypeScript</Badge>
                            <p className='mt-3 text-left'>An application utilizing the Building &amp; Safety Permit Office API to help service customers coming in. It helps employees streamline customer check in and routing them to the multiple areas these offices service.</p>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col sm={{span:8, offset:2}}>
                      <Card className='border shadow'>
                          <Card.Img src={bar} />
                        <Card.Body>
                          <Card.Title><h3>Cavern Tavern</h3></Card.Title>
                          <Card.Text>
                            <Badge pill variant='primary' className='mx-2'>C#</Badge>
                            <Badge pill variant='primary' className='mx-2'>Unity</Badge>
                            <p className='mt-3 text-left'>A time management game created for my senior project in college. We got first place in the IEE GameSig Competition, and were awarded Ingenuity Award at UC Irvine! </p>
                          </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
              </Container>
            </motion.div>
          </Container>
          <img className='bg-light mb-0' style={{width:'100%', position:'relative', zIndex:0, bottom:0 }} src={beach} />
        </React.Fragment>
    );
}