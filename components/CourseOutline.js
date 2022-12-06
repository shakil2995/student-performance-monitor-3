import React from 'react'
import styles from '../styles/outline.module.css'

export default function CourseOutline() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Independent University, Bangladesh</h1>
            <h2 className={styles.subtitle}>Department of Computer Science & Engineering</h2>
            <div className={styles.flex}>
                <div className={styles.outline}>
                    <h3>Course Outline</h3>
                    <h4>Course Title: Web Application Development</h4>
                    <p>Course Code: CSE 3100</p>
                    <p>Course Credit: 3.00</p>
                    <p>Total Marks: 100</p>

                </div>
                <div className={styles.instructor}>
                    <h3>Instructor details</h3>
                    <h4>Name: Dr. Md. Shamsuzzaman</h4>
                    <p>Designation: Assistant Professor</p>
                    <p>Department: Computer Science & Engineering</p>
                    <p>Email: Faculty@mail.com</p>
                </div>
            </div>
            <div className={styles.objectives}>
                <h4>Course Objectives:</h4>
                <ul>
                    <li>Understand the basic concepts of web application development.</li>
                    <li>Understand the basic concepts of web application development tools.</li>
                    <li>Understand the basic concepts of web application development frameworks.</li>
                    <li>Understand the basic concepts of web application security.</li>
                </ul>
            </div>
            <div className={styles.objectives}>
                <h4>Course policy</h4>
                <ul>
                    <li>Attendance is mandatory.</li>
                    <li>Students are expected to be on time for the class.</li>
                    <li>Students are expected to be active in the class.</li>
                    <li>Students are expected to be polite and respectful to the instructor and other students.</li>
                    <li>Students are expected to be honest and ethical in their academic work.</li>

                </ul>
            </div>
            <div>
                <h3>Grade Conversion Scheme</h3>
                <table className={styles.table}>
                    <tr>
                        <th>Letter Grade</th>
                        <th>Grade Point</th>
                        <th>Percentage</th>
                    </tr>
                    <tr>
                        <td>A+</td>
                        <td>4.00</td>
                        <td>80-100</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>3.75</td>
                        <td>75-79</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>3.50</td>
                        <td>70-74</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>3.25</td>
                        <td>65-69</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>3.00</td>
                        <td>60-64</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>2.75</td>
                        <td>55-59</td>
                    </tr>
                    <tr>
                        <td>C+</td>
                        <td>2.50</td>
                        <td>50-54</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>2.25</td>
                        <td>45-49</td>
                    </tr>
                    <tr>
                        <td>C-</td>
                        <td>2.00</td>
                        <td>40-44</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>1.00</td>
                        <td>33-39</td>
                    </tr>
                    <tr>
                        <td>F</td>
                        <td>0.00</td>
                        <td>0-32</td>
                    </tr>
                </table>

            </div>
            <div className={styles.objectives}>
                <h3>Course Outcomes:</h3>
                <h4>At the end of the course, the students will be able to:</h4>
                <ul>
                    <li>Develop web applications using HTML, CSS, and JavaScript.</li>
                    <li>Develop web applications using React.js.</li>
                    <li>Develop web applications using Node.js.</li>
                    <li>Develop web applications using Express.js.</li>

                </ul>

            </div>


            <div>
                <h4>Class and exam Schedule , Topics and Readings</h4>
                <table className={styles.table}>
                    <tr>
                        <th>Week</th>
                        <th>Topics</th>
                        <th>Readings</th>
                    </tr>
                    <tr>
                        <td>Week 1</td>
                        <td>Introduction to Web Application Development</td>
                        <td><a href=" ">Introduction to HTML</a></td>
                    </tr>
                    <tr>
                        <td>Week 2</td>
                        <td>HTML</td>
                        <td><a href=" ">Introduction to HTML</a></td>
                    </tr>
                    <tr>
                        <td>Week 3</td>
                        <td>CSS</td>
                        <td><a href=" ">Introduction to CSS</a></td>
                    </tr>
                    <tr>
                        <td>Week 4</td>
                        <td>JavaScript</td>
                        <td><a href=" ">Introduction to JavaScript</a></td>
                    </tr>
                    <tr>
                        <td>Week 5</td>
                        <td>React.js</td>
                        <td><a href=" ">Introduction to React.js</a></td>
                    </tr>
                    <tr>
                        <td>Week 6</td>
                        <td>Node.js</td>
                        <td><a href=" ">Introduction to Node.js</a></td>
                    </tr>
                    <tr>
                        <td>Week 7</td>
                        <td>Express.js</td>
                        <td><a href=" ">Introduction to Express.js</a></td>
                    </tr>
                    <tr>
                        <td>Week 8</td>
                        <td>MongoDB</td>
                        <td><a href=" ">Introduction to MongoDB</a></td>
                    </tr>
                </table>
            </div>
            <div className={styles.objectives}>
                <h4>Resources</h4>
                <ul>
                    <li><a href=" ">W3Schools</a></li>
                    <li><a href=" ">W3Schools</a></li>
                    <li><a href=" ">W3Schools</a></li>
                    <li><a href=" ">W3Schools</a></li>
                    <li><a href=" ">W3Schools</a></li>

                </ul>
            </div>





        </div>
    )
}

