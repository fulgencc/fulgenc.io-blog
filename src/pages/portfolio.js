import React from 'react'
import { FaMapMarkerAlt, FaRegEnvelope, FaGithub } from 'react-icons/fa'
import { Container, Row, Col, Image, Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
    return (
        <Container fluid className='text-center bg-light'>
          <Container className='py-3'>
            <Row className='p-5 text-center'>
              <Col>
                <h1 className='display-1'>Chris Fulgencio</h1>
                <h4 className='text-secondary'>Full Stack Engineer</h4>
              </Col>
            </Row>

            <Row className='p-3 text-left'>
              <Col sm={{offset: 4}}>
                <h4> <FaMapMarkerAlt/> Los Angeles, California</h4>
                <h4> <FaRegEnvelope/> chris@fulgenc.io</h4>
                <h4> <FaGithub/> <a href='https://github.com/fulgencc'>GitHub</a></h4>
              </Col>
            </Row>
            <hr/>
          </Container>

          <div className='py-3'>
            <h2 className='mb-5'>Work Experience</h2>
            <Row className='mb-3'>
              <Col sm={{span: 3, offset: 2}} className='border shadow px-0'>
              <Image src='https://picsum.photos/1000/350' className='m-0 pb-4' />
                <h3>Los Angeles County Public Works</h3>
                <h3><Badge pill variant="primary">2018 - Present</Badge></h3>
                <p>Developing full stack web applications using React, .NET Core Web API, and SQL Server.</p>
              </Col>
              <Col sm={{span: 3, offset: 2}} className='border shadow px-0'>
                <Image src='https://picsum.photos/1000/350' className='m-0 pb-4' />
                <h3>Eiswelt Gelato </h3>
                <h3><Badge pill variant="secondary">2017 - 2017</Badge></h3>
                <p>Contract web designer.</p>
              </Col>
            </Row>
          </div>

          <Container className='py-3'>
            <hr/>
            <h2 className='my-5'>Education</h2>
            <Row className='mb-5'>
                <Col className='border shadow px-0'>
                <Image src='https://picsum.photos/1500/350' className='m-0 pb-4' />
                  <h3>University of California, Irvine</h3>
                  <h3><Badge pill variant='primary'>2012 - 2017</Badge></h3>
                  <p>BS in Computer Game Science.</p>
                </Col>
            </Row>
          </Container>

          <Container className='py-3'>
            <hr/>
            <h2 className='my-5'>Projects</h2>
            <Row className='mb-5'>
                <Col className='border shadow px-0 pb-5'>
                <Image src='https://picsum.photos/1500/350' className='m-0 pb-4' />
                  <h3>Fulgenc.io Blog</h3>
                  <h5 className='pt-3'>
                      <Badge pill variant='primary' className='mx-2'>HTML5</Badge>
                      <Badge pill variant='primary' className='mx-2'>CSS</Badge>
                      <Badge pill variant='primary' className='mx-2'>Sass</Badge>
                      <Badge pill variant='primary' className='mx-2'>JavaScript</Badge>
                      <Badge pill variant='primary' className='mx-2'>ReactJS</Badge>
                      <Badge pill variant='primary' className='mx-2'>Gatsby</Badge>
                  </h5>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col className='border shadow px-0 pb-5'>
                <Image src='https://picsum.photos/1500/350' className='m-0 pb-4' />
                  <h3>Building &amp; Safety Permit Office API</h3>
                  <h5 className='pb-3 pt-3'>
                      <Badge pill variant='primary' className='mx-2'>C#</Badge>
                      <Badge pill variant='primary' className='mx-2'>API</Badge>
                      <Badge pill variant='primary' className='mx-2'>.NET Core</Badge>
                      <Badge pill variant='primary' className='mx-2'>LINQ</Badge>
                      <Badge pill variant='primary' className='mx-2'>SQL Server</Badge>
                  </h5>
                  <h5>An API designed to return information on the department's permit offices. This includes information on appointments in each permit office and the services that each office provides.</h5>
                </Col>
            </Row>
          </Container>

        </Container>
    );
}