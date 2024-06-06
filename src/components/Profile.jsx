import React from 'react'
import Title from './Title'
import Description from './Description'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Declaration from './Declaration'

export default function () {
    return (
        <>
            <div className='main'>
                <Title />
                <div className='main-cont'>
                    <div className='main-left'>
                        <Description >
                            <p>A creative and detailed individual has the capacity to develop an
                                effective and efficient solution with no tolerance for errors and
                                possess a positive attitude towards individual goals and an
                                organizational goal.
                            </p>
                        </Description>
                        <Description >
                            <Heading heading={"INTERNSHIP"} />
                            <SubHeading subheading={"Ellipsonic India Solutions PVT. LTD."} />
                            <div className='key-value'>
                                <span className='key'>Role</span><p> : Junior Software Developer</p>
                            </div>
                            <div className='key-value1'>
                                <span className='key'>Backend Development :</span>
                                <ul>
                                    <li>
                                        Worked on nodejs along with MYSQL database and RESTful API.
                                    </li>
                                </ul>
                            </div>
                            <div className='key-value1'>
                                <span className='key'>Web Technologies :</span>
                                <ul>
                                    <li>
                                        Skilled in crafting dynamic and responsive web interfaces using
                                        HTML, CSS, and JavaScript.
                                    </li>
                                </ul>
                            </div>
                        </Description>
                        <Description >
                            <Heading heading={"PROJECT"} />
                            <SubHeading subheading={"NoteTaker App"} />

                            <p>A creative and detailed individual has the capacity to develop an
                                effective and efficient solution with no tolerance for errors and
                                possess a positive attitude towards individual goals and an
                                organizational goal.
                            </p>
                            <ul>
                                <li className='k-v'>
                                    <p>Programming Language used for implementation : </p><span className='key'>Java</span>
                                </li>
                                <li className='k-v'>
                                    <p>Concepts used : </p><span className='key'>Hibernate, Servlet, JSP, MySQL</span>
                                </li>
                                <li className='k-v'>
                                    <p>Tools used : </p><span className='key'>Eclipse IDE, Tomcat Server.</span>
                                </li>
                            </ul>
                        </Description>
                        <Description >
                            <Heading heading={"EDUCATIONAL BACKGROUND"} />
                            <SubHeading subheading={"Bachelor of Engineering ( BE )"} />
                            <p>EAST WEST INSTITUTE OF TECHNOLOGY</p>
                            <p>Aug 2018 - Sep 2022</p>
                            <ul>
                                <li>
                                    Electronics and Communication. <br /> [ CGPA : 7.63 ]
                                </li>
                            </ul>
                            <SubHeading subheading={"Pre-university course ( PUC )"} />
                            <p>SOUNDARYA COMPOSITE PU COLLEGE</p>
                            <p>Jun 2016 - Mar 2018</p>
                            <ul>
                                <li>
                                    PCMB ( Physics, Chemistry, Math’s, Biology ). <br /> [ % : 73.33% ]
                                </li>
                            </ul>
                            <SubHeading subheading={"Secondary School Leaving Certificate ( SSLC )"} />
                            <p>M.E.S.S.S.R.D.H.S</p>
                            <p>Jun 2013 - Mar 2016</p>
                            <ul>
                                <li>
                                    [ % : 84.64% ]
                                </li>
                            </ul>
                        </Description>
                    </div>
                    <div className='main-right'>
                        <Description >
                            <Heading heading={"CONTACT"} />
                            <div className='p'>
                                <div className='cnt'>Bangalore, Karnataka, India</div>
                                <div className='cnt'>+91 9916693953</div>
                                <div className='cnt'>karthickbs4747@gmail.com</div>
                            </div>
                        </Description>
                        <Description >
                            <Heading heading={"SKILLS"} />
                            <SubHeading subheading={"Career Skills"} />
                            <ul>
                                <li>Problem Solving</li>
                                <li>Research & Analysis</li>
                                <li>Teamwork and Collaboration</li>
                            </ul>
                        </Description>
                        <Description >
                            <SubHeading subheading={"Tools/Software"} />
                            <ul>
                                <li>Java</li>
                                <li>HTML, CSS, JS</li>
                                <li>SQL</li>
                            </ul>
                        </Description><Description >
                            <SubHeading subheading={"Certification"} />
                            <ul>
                                <li>Certified Full Stack Developer from KodNest</li>
                            </ul>
                        </Description><Description >
                            <SubHeading subheading={"Languages"} />
                            <ul>
                                <li>Kannada (Fluent)</li>
                                <li>Hindi (Fluent)</li>
                                <li>English (Proficient)</li>
                            </ul>
                        </Description>
                    </div>
                </div>
                <Declaration>
                    <Heading heading={"DECLARATION"} />
                    <p>I solemnly declare that the information furnished above is free from errors to the best
                        of my knowledge and belief.</p>
                    <div className='key-value'>
                        <span className='key'>Date</span><div>: 06-06-2024</div>
                    </div>
                </Declaration>
            </div>
        </>
    )
}
