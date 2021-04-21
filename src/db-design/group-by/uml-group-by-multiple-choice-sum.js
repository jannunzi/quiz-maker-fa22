import React from 'react'
import Clazz from "../utils/clazz";
import ClassDiagramHorizontal from "../utils/class-diagram-horizontal";
import {destinations, education, randomArrayElement, randomInt, randomSet, work} from "../../utils/utils";
import AssociationHorizontal from "../utils/association-horizontal";
const UmlGroupByMultipleSum = () => {

    const randomStrings = randomSet(18, work);
    const randomStrings2 = randomSet(16, education);
    
    const airlineClass      = randomStrings[0].toUpperCase();//"airline";//randomStrings[0];//"airline";//randomStrings[0]
    const flightClass       = randomStrings[1].toUpperCase();//"flight";//randomStrings[1];//"flight";//randomStrings[1]
    const reservationClass  = randomStrings[2].toUpperCase();//"reservation";
    const ticketClass       = randomStrings[3].toUpperCase();//"ticket";//randomStrings[3];//"ticket";//randomStrings[3]
    const passengerClass    = randomStrings[4];//"passenger";//randomStrings[4];//"passenger";//randomStrings[4]
    
    const airlineId         = randomStrings[5];//"aid";//randomStrings[6];//"did";// randomStrings2[0];
    const airlineName       = randomStrings[6];//"name";//randomStrings[7];//"name";    
    
    const flightId          = randomStrings[7];//"fid";//randomStrings[8];//"cid";
    const flightType        = randomStrings[8];//"type";//randomStrings[9];//"title";
    const flightSource      = randomStrings[9];//"source";//randomStrings[10];//"credits";
    const flightDestination = randomStrings[10];//"destination";//randomStrings[10];//"credits";
    const flightDuration    = randomStrings[11];//"duration";//randomStrings[10];//"credits";
        
    const reservationId     = randomStrings[12];//"rid";//randomStrings[11];//"scid";
    const reservationBookingAgent = randomStrings[13];//"bookingAgent";//randomStrings[12];//"building";
    const reservationType   = randomStrings[14];//"type";//randomStrings[13];//"room";
    // const reservationTime = randomStrings[14];//"time";
    
    const ticketId          = randomStrings[15];//"tid";//randomStrings[15];//"eid";
    const ticketPrice       = randomStrings[16];//"price";//randomStrings[16];//"semester";
    const ticketBoardingDate = randomStrings[17];//"boardingDate";//randomStrings[17];//"enrolled";
    const ticketType        = randomStrings2[10];//"type";//randomStrings2[14];//"grade";

    const passengerId       = randomStrings2[0];//"pid";//randomStrings2[0];//"sid";
    const passengerLast     = randomStrings2[1];//"last";//randomStrings2[1];//"last";
    const passengerFirst    = randomStrings2[2];//"first";//randomStrings2[2];//"first";
    const passengerAge      = randomStrings2[3];//"age";//randomStrings2[3];//"address";
    const passengerEmail    = randomStrings2[4];//"email";//randomStrings2[4];//"grade";
    const passengerContact  = randomStrings2[5];//"contact";//randomStrings2[4];//"grade";
    
    const NewYork           = randomArrayElement(destinations);//"NewYork";//randomStrings2[8];//"NewYork";
    const FourHundred       = randomInt(1000);//randomStrings2[9];//"FourHundred";
    
    const passengerRename   = randomStrings2[6];//"s";
    const reservationRename = randomStrings2[7];//"s";
    const ticketRename      = randomStrings2[8];//"e";
    const flightRename      = randomStrings2[9];//"c";
    
    return(
        <div>
            <h1>UML Group By Multiple Choice Sum</h1>
            <div id="questionABC">
                Consider the following UML class diagram:
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
                    <Clazz clazzName={airlineClass}
                           fields={[
                               {name: airlineId, pk: true},
                               {name: airlineName}
                           ]}/>,
                    <Clazz clazzName={flightClass}
                           fields={[
                               {name: flightId, pk: true},
                               {name: flightType},
                               {name: flightSource},
                               {name: flightDestination},
                               {name: flightDuration},
                               {name: airlineId, fk: true},
                           ]}/>,
                    <Clazz clazzName={reservationClass}
                           fields={[
                               {name: reservationId, pk: true},
                               {name: reservationBookingAgent},
                               {name: reservationType},
                               {name: flightId, fk: true},
                           ]}/>,
                    <Clazz clazzName={ticketClass}
                           fields={[
                               {name: ticketId, pk: true},
                               {name: reservationId, fk: true},
                               {name: passengerId, fk: true},
                               {name: ticketPrice},
                               {name: ticketBoardingDate},
                               {name: ticketType},
                           ]}/>,
                    <Clazz clazzName={passengerClass}
                           fields={[
                               {name: passengerId, pk: true},
                               {name: passengerFirst},
                               {name: passengerLast},
                               {name: passengerAge},
                               {name: passengerEmail},
                               {name: passengerContact},
                               {name: ticketId, fk: true},
                           ]}/>,
                ]}
            />
            <div style={{clear: "both"}}>
                <br/>
                Which of the SQL statements below best implements
                the following query?
                <br/>
                <br/>

                "Which records in {reservationClass}s are related to
                <br/>
                &nbsp;records in {flightClass} whose field {flightDestination} is "{NewYork}"
                <br/>
                {/*&nbsp;and which have a total cost of ${FourHundred} or more,*/}
                {/*<br/>*/}
                {/*&nbsp;and the total cost of a {reservationClass} is*/}
                {/*<br/>*/}
                &nbsp;and the SUM of the {ticketPrice}s of all the {ticketClass}s
                <br/>
                &nbsp;related to {reservationClass} is more than ${FourHundred}"
                <br/>

            </div>
            </div>
            <div id="answersABC">
                <hr/>
                SELECT {reservationRename}.{reservationId}, SUM({ticketRename}.{ticketPrice})
                <br/>
                FROM {reservationClass} {reservationRename}, {flightClass} {flightRename}, {ticketClass} {ticketRename}
                <br/>
                WHERE {flightRename}.{flightId} = {reservationRename}.{flightId}
                <br/>
                AND {flightRename}.{flightDestination} = '{NewYork}'
                <br/>
                AND {reservationRename}.{reservationId} = {ticketRename}.{reservationId}
                <br/>
                GROUP BY {reservationRename}.{reservationId}
                <br/>
                HAVING SUM({ticketRename}.{ticketPrice}) > {FourHundred}

                <hr/>
                
                SELECT {reservationRename}.{reservationId}, SUM({ticketRename}.{ticketPrice}) > {FourHundred}
                <br/>
                FROM {reservationClass} {reservationRename}, {flightClass} {flightRename}, {ticketClass} {ticketRename}
                <br/>
                WHERE {flightRename}.{flightId} = {reservationRename}.{flightId}
                <br/>
                AND {flightRename}.{flightDestination} = '{NewYork}'
                <br/>
                AND {reservationRename}.{reservationId} = {ticketRename}.{reservationId}
                <br/>
                GROUP BY {reservationRename}.{reservationId}
                
                <hr/>

                SELECT {reservationRename}.{reservationId}, SUM({ticketRename}.{ticketPrice})
                <br/>
                FROM {reservationClass} {reservationRename}, {flightClass} {flightRename}, {ticketClass} {ticketRename}
                <br/>
                WHERE {flightRename}.{flightId} = {reservationRename}.{flightId}
                <br/>
                AND {flightRename}.destination = '{NewYork}'
                <br/>
                AND {reservationRename}.{reservationId} = {ticketRename}.{reservationId}
                <br/>
                HAVING SUM({ticketRename}.{ticketPrice}) >= {FourHundred}
                
                <hr/>

                SELECT {reservationRename}.{reservationId}, SUM({ticketRename}.{ticketPrice})
                <br/>
                FROM {reservationClass} {reservationRename}, {flightClass} {flightRename}, {ticketClass} {ticketRename}
                <br/>
                WHERE {flightRename}.{flightId} = {reservationRename}.{flightId}
                <br/>
                AND {flightRename}.destination = '{NewYork}'
                <br/>
                AND {reservationRename}.{reservationId} = {ticketRename}.{reservationId}
                
                <hr/>

            </div>
        </div>
    )
}
export default UmlGroupByMultipleSum