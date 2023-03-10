import React from 'react';
import resume from '../../assets/Resume(Current).pdf';

function Resume() {
  return (
    <section style={{ height: '60vh', paddingLeft: '40px', paddingRight: '40px'}}>
      <div>
      <h2 style={{fontSize: '30px', paddingTop: '40px', color: '#F5B041', paddingBottom: '40px' }}>
      <a href={resume} download style={{ color: '#7eff10' }}>
      →→ Click here to download my resume! ←←
          </a>
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            <h3 style={{fontSize: '30px', paddingTop: '10px', color: '#F5B041', textDecoration: 'underline' }}>Front-end technologies</h3>
            <ul style={{ listStyleType: 'none', color: 'silver', fontSize: '18px', letterSpacing: '2px', lineHeight: '2.5' }}> 
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive web design</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div style={{ listStyleType: 'none', color: 'silver', fontSize: '22px', letterSpacing: '2px', lineHeight: '1.5' }}> 
          <h4 style = {{ letterSpacing: '1px'}}> Or reach out to me using the links below.</h4>
          <p><a href='https://www.linkedin.com/in/wwartick/' download style={{ color: 'silver' }}>LinkedIn Profile</a></p>
          <p><a href='https://github.com/wwartick' download style={{ color: 'silver' }}>Github Profile</a></p>
          <p>willwartick@gmail.com</p>
        </div>

          <div
            style={{
              flex: 1,
            }}
          >
            <h3 style={{fontSize: '30px', paddingTop: '10px', color: '#F5B041', textDecoration: 'underline' }}>Back-end technologies</h3>
            <ul style={{ listStyleType: 'none', color: 'silver', fontSize: '18px', letterSpacing: '2px', lineHeight: '2.5' }}> 
              <li>APIs</li>
              <li>Node JS</li>
              <li>Express.js</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
  
    </section>
  );
}

export default Resume;