import React from 'react'
import Clazz from "../utils/clazz";
import ClassDiagramHorizontal from "../utils/class-diagram-horizontal";
import {education, randomSet, work} from "../../utils/utils";
import AssociationHorizontal from "../utils/association-horizontal";
const UmlGroupByMultipleChoice = () => {

    const randomStrings = randomSet(18, work);
    const randomStrings2 = randomSet(16, education);
    const departmentClass = randomStrings[0];//"department";//randomStrings[0]
    const courseClass = randomStrings[1];//"course";//randomStrings[1]
    const sectionClass = randomStrings[2];//"section";//randomStrings[2]
    const enrollmentClass = randomStrings[3];//"enrollment";//randomStrings[3]
    const studentClass = randomStrings[4];//"student";//randomStrings[4]
    const zipClass = randomStrings[5];//"zip";//randomStrings[5]
    
    const departmentId = randomStrings[6];//"did";// randomStrings2[0];
    const departmentName = randomStrings[7];//"name";    
    
    const courseId = randomStrings[8];//"cid";
    const courseTitle = randomStrings[9];//"title";
    const courseCredits = randomStrings[10];//"credits";
        
    const sectionId = randomStrings[11];//"scid";
    const sectionBuilding = randomStrings[12];//"building";
    const sectionRoom = randomStrings[13];//"room";
    const sectionTime = randomStrings[14];//"time";
    
    const enrollmentId = randomStrings[15];//"eid";
    const enrollmentSemester = randomStrings[16];//"semester";
    const enrollmentEnrolled = randomStrings[17];//"enrolled";
    const enrollmentGrade = randomStrings2[14];//"grade";

    const studentId = randomStrings2[0];//"sid";
    const studentLast = randomStrings2[1];//"last";
    const studentFirst = randomStrings2[2];//"first";
    const studentAddress = randomStrings2[3];//"address";
    const studentGrade = randomStrings2[4];//"grade";
    
    const zipId = randomStrings2[5];//"zip";
    const zipCity = randomStrings2[6];//"city";
    const zipState = randomStrings2[7];//"state";
    
    const CS5200 = randomStrings2[8];//"CS5200";
    const Spring2015 = randomStrings2[9];//"Spring2015";
    
    const studentRename = randomStrings2[10];//"s";
    const sectionRename = randomStrings2[11];//"s";
    const enrollmentRename = randomStrings2[12];//"e";
    const courseRename = randomStrings2[13];//"c";
    
    return(
        <div>
            <h1>UML Group By Multiple Choice</h1>
            <div id="questionABC">
                Consider the following UML diagram
                <br/>
                <br/>

                <ClassDiagramHorizontal
                associations={[
                    <AssociationHorizontal
                        left={{cardinality: 1}}
                        right={{cardinality: "*"}}/>,
                    <AssociationHorizontal
                        left={{cardinality: 1}}
                        right={{cardinality: "*"}}/>,
                    <AssociationHorizontal
                        left={{cardinality: 1}}
                        right={{cardinality: "*"}}/>,
                    <AssociationHorizontal
                        left={{cardinality: "*"}}
                        right={{cardinality: 1}}/>,
                ]}
                classes={[
                    <Clazz clazzName={departmentClass}
                           fields={[
                               {name: departmentId, pk: true},
                               {name: departmentName}
                           ]}/>,
                    <Clazz clazzName={courseClass}
                           fields={[
                               {name: courseId, pk: true},
                               {name: courseTitle},
                               {name: courseCredits},
                               {name: departmentId, fk: true},
                           ]}/>,
                    <Clazz clazzName={sectionClass}
                           fields={[
                               {name: sectionId, pk: true},
                               {name: sectionBuilding},
                               {name: sectionRoom},
                               {name: sectionTime},
                               {name: courseId, fk: true},
                           ]}/>,
                    <Clazz clazzName={enrollmentClass}
                           fields={[
                               {name: enrollmentId, pk: true},
                               {name: sectionId, fk: true},
                               {name: studentId, fk: true},
                               {name: enrollmentSemester},
                               {name: enrollmentEnrolled},
                               {name: enrollmentGrade},
                           ]}/>,
                    <Clazz clazzName={studentClass}
                           fields={[
                               {name: studentId, pk: true},
                               {name: studentLast},
                               {name: studentFirst},
                               {name: studentAddress},
                               {name: studentGrade},
                           ]}/>,
                ]}
            />
            <div style={{clear: "both"}}>
                <br/>
                Which of the SQL statements below best implements
                the following query
                <br/>
                <br/>

                Which <span style={{textTransform: "uppercase"}}>{studentClass}</span>(s) got the highest
                &nbsp;{studentGrade} for a <span style={{textTransform: "uppercase"}}>{courseClass}</span>'s
                &nbsp;{courseTitle} is "{CS5200}" and <span style={{textTransform: "uppercase"}}>{enrollmentClass}</span>'s
                &nbsp;{enrollmentSemester} is "{Spring2015}"?
                <br/>
                &nbsp;List the <span style={{textTransform: "uppercase"}}>{studentClass}</span>'s primary key,
                &nbsp;{studentFirst}, {studentLast}, and {studentGrade}
            </div>
            </div>
            <div id="answersABC">
                <hr/>
                SELECT {studentRename}.{studentId}, {studentRename}.{studentFirst}, {studentRename}.{studentLast}, {studentRename}.{studentGrade}
                <br/>
                FROM <span style={{textTransform: "uppercase"}}>{studentClass}</span> {studentRename}
                <br/>
                WHERE {studentRename}.{studentGrade} = (SELECT MAX({enrollmentRename}.{enrollmentGrade})
                <br/>
                FROM <span style={{textTransform: "uppercase"}}>{enrollmentClass}</span> {enrollmentRename},
                &nbsp;<span style={{textTransform: "uppercase"}}>{sectionClass}</span> {sectionRename},
                &nbsp;<span style={{textTransform: "uppercase"}}>{courseClass}</span> {courseRename}
                <br/>
                WHERE {enrollmentRename}.{sectionId} = {sectionRename}.{sectionId}
                <br/>
                AND {sectionRename}.{courseId} = {courseRename}.{courseId}
                <br/>
                AND {courseRename}.{courseTitle}='{CS5200}'
                <br/>
                AND {enrollmentRename}.{enrollmentSemester}='{Spring2015}')
                
                <hr/>
                
                SELECT {studentRename}.{studentId}, {studentRename}.{studentFirst}, {studentRename}.{studentLast}, {studentRename}.{studentGrade}
                <br/>
                FROM <span style={{textTransform: "uppercase"}}>{studentClass}</span> {studentRename}
                <br/>
                WHERE {studentRename}.{studentGrade} = (SELECT MAX({enrollmentRename}.{enrollmentGrade})
                <br/>
                FROM <span style={{textTransform: "uppercase"}}>{enrollmentClass}</span> {enrollmentRename}, <span style={{textTransform: "uppercase"}}>{sectionClass}</span> {sectionRename}, <span style={{textTransform: "uppercase"}}>{courseClass}</span> {courseRename}
                <br/>
                WHERE {enrollmentRename}.{sectionId} = {sectionRename}.{sectionId}
                <br/>
                AND {sectionRename}.{courseId} = {courseRename}.{courseId}
                <br/>
                AND {courseRename}.{courseTitle}='{CS5200}'
                <br/>
                AND {enrollmentRename}.{enrollmentSemester}='{Spring2015}'
                <br/>
                GROUP BY {sectionRename}.{sectionId})
                
                <hr/>
                
                SELECT {studentRename}.{studentId}, {studentRename}.{studentFirst}, {studentRename}.{studentLast}, {studentRename}.{studentGrade}
                <br/>
                FROM <span style={{textTransform: "uppercase"}}>{studentClass}</span> {studentRename}
                <br/>
                WHERE {studentRename}.{studentGrade} = (SELECT MAX({enrollmentRename}.{enrollmentGrade})
                <br/>
                FROM <span style={{textTransform: "uppercase"}}>{enrollmentClass}</span> {enrollmentRename}, <span style={{textTransform: "uppercase"}}>{sectionClass}</span> {sectionRename}
                <br/>
                WHERE {enrollmentRename}.{sectionId} = {sectionRename}.{sectionId}
                <br/>
                AND {sectionRename}.{courseId} = <span style={{textTransform: "uppercase"}}>{courseClass}</span>.{courseId}
                <br/>
                AND <span style={{textTransform: "uppercase"}}>{courseClass}</span>.{courseTitle}='{CS5200}'
                <br/>
                AND {enrollmentRename}.{enrollmentSemester}='{Spring2015}')

                <hr/>
                SELECT {studentRename}.{studentId}, {studentRename}.{studentFirst}, {studentRename}.{studentLast}, {studentRename}.{studentGrade}
                <br/>
                FROM <span style={{textTransform: "uppercase"}}>{studentClass}</span> {studentRename}
                <br/>
                WHERE {studentRename}.{studentGrade} = (SELECT MAX({enrollmentRename}.{enrollmentGrade})
                <br/>
                FROM <span style={{textTransform: "uppercase"}}>{enrollmentClass}</span> {enrollmentRename}, <span style={{textTransform: "uppercase"}}>{courseClass}</span> {courseRename}
                <br/>
                WHERE {enrollmentRename}.{sectionId} = <span style={{textTransform: "uppercase"}}>{sectionClass}</span>.{sectionId}
                <br/>
                AND <span style={{textTransform: "uppercase"}}>{sectionClass}</span>.{courseId} = {courseRename}.{courseId}
                <br/>
                AND {courseRename}.{courseTitle}='{CS5200}'
                <br/>
                AND {enrollmentRename}.{enrollmentSemester}='{Spring2015}')

                <hr/>
                
                
            </div>
        </div>
    )
}
export default UmlGroupByMultipleChoice