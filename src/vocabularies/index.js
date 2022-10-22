import React from "react";
import JsxParser from "react-jsx-parser";
import {randomInt} from "../utils/utils";

const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

export const destinations = [
    "Rome",
    "Paris",
    "Miami",
    "Austin",
    "Dallas",
    "Boston",
    "Cairo",
    "Sidney"
];
export const education = [
    "tuition",
    "graduation",
    "school",
    "department",
    "grade",
    "section",
    "teacher",
    "professor",
    "student",
    "topic",
    "home_work",
    "due_date",
    "quiz",
    "exam",
    "training",
    "curriculum"
];
export const fruits = [
    "apple",
    "apricots",
    "avocado",
    "banana",
    "blackberries",
    "blueberries",
    "carrot",
    "cherry",
    "coconut",
    "cranberry",
    "elderberry",
    "fig",
    "grape",
    "guava",
    "kiwi",
    "lemon",
    "lime",
    "mango",
    "melon",
    "orange",
    "papaya",
    "peach",
    "pear",
    "pineapple",
    "pumpkin",
    "raspberry",
    "strawberry",
    "watermelon",
];
export const vegetables = [
    "arugula",
    "artichoke",
    "asparagus",
    "basil",
    "broccoli",
    "carrot",
    "cabbage",
    "cauliflower",
    "celery",
    "cucumber",
    "garlic",
    "kale",
    "lettuce",
    "mushrooms",
    "onion",
    "oregano",
    "parsley",
    "pepper",
    "potato",
    "radish",
    "spinach",
    "tomato",
    "turnip",
    "zucchini",
];
export const work = [
    "project",
    "employee",
    "stakeholder",
    "task",
    "job",
    "chart",
    "dead_line",
    "due_date",
    "workload",
    "issue",
    "step",
    "sub_task",
    "deliverable",
    "assignee",
    "engineer",
    "business_analyst",
    "version",
    "revision",
    "criteria"
];
export const allArrays = [
    ...destinations,
    ...education,
    ...fruits,
    ...vegetables,
    ...work,
];

export const images = Array(20).fill(0).map((_, i) =>
    `https://picsum.photos/200?${i}`
)

export const theImage = <JsxParser
    jsx={`<img src="https://picsum.photos/200"/>`}
/>;

export const randomImage = (width, height) =>
    <JsxParser
        jsx={`<img src="https://picsum.photos/${width}/${height}?${(new Date()).getTime()}"/>`}
    />;

// export const textInput = <JsxParser jsx={`<input type="text"/>`}/>
export const textInput = (size=10, v="some name") =>
    <JsxParser
        jsx={`<input type="text" size="${size}"/>${v}`}/>;
export const smallTextInput = <input type="text" size={3}/>;
export const textArea = <textarea></textarea>;
export const radioBtn = () => <JsxParser jsx={`<input type="radio"/>`}/>
export const heading = (size) => <JsxParser jsx={`<h1>The heading</h1>`}/>

export const aggregationFunctions = [
    "COUNT",
    "AVG",
    "MAX",
    "MIN"
]

export const jsDataTypes = [
    "String",
    "Number",
    "Date"
]

export const arrays = [
    fruits,
    work,
    education
]

export const TRANSFORM_NONE = 'TRANSFORM_NONE';
export const TRANSFORM_TO_UPPERCASE = 'TRANSFORM_TO_UPPERCASE';
export const TRANSFORM_TO_LOWERCASE = 'TRANSFORM_TO_LOWERCASE';
export const TRANSFORM_CAPITALIZE = 'TRANSFORM_CAPITALIZE';

export const random = (array=allArrays, index=0) =>
    randomArray({array})[index];

export const randomArray = (
    {
        array=allArrays,
        size=array ? array.length : allArrays.length,
        transform=TRANSFORM_NONE
    }) => {
    let count = 0;
    let newArray = [];
    while (count < size) {
        const index = randomInt(array.length)
        let randomItem = array[index]
        const alreadyPicked = newArray.findIndex(f => randomItem === f) >= 0
        if(randomItem && !alreadyPicked) {
            randomItem = transform === TRANSFORM_TO_UPPERCASE ? randomItem.toUpperCase() : randomItem;
            randomItem = transform === TRANSFORM_TO_LOWERCASE ? randomItem.toLowerCase() : randomItem;
            randomItem = transform === TRANSFORM_CAPITALIZE ? capitalize(randomItem) : randomItem;
            newArray.push(randomItem);
            count++;
        }
    }
    return newArray;
};