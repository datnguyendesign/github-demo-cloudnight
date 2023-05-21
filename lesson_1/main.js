// ============================================
// ================ Polyfill ? ================
// ============================================

if (!String.prototype.includes)
{
    String.prototype.includes = function(search, start)
    {
        'use strict';

        if (search instanceof RegExp)
        {
            throw TypeError('first argument must not be a RegExp');
        }

        if (start === undefined)
        {
            start = 0;
        }

        return this.indexOf(search, start) !== -1;
    }
}



// ========================================
// ================ Object ================
// ========================================

var emailKey = 'email';

var myInfo = {
    name: 'Tien Dat',
    age: 19,
    address: 'Quang Binh',
    [emailKey]: 'ngtiendat.94.04@gmail.com',
    phone: 21315123,
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
};

// Function --> Phuong thuc/ method
// Others --> Thuoc tinh/ property

// myInfo.email = 'ngtiendat.94.04@gmail.com';
// // or
// myInfo['email'] = 'ngtiendat.94.04@gmail.com';

// delete
delete myInfo.age;

console.log(myInfo.getName());



// ====================================================
// ================ Object constructor ================
// ====================================================

function User(firstName, lastName, avatar)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = '22GIT2';
User.prototype.getClassName = function() {
    return this.className;
}

var author = new User('Tien', 'Dat', 'Avatar');
var user = new User('Vu', 'Nguyen', 'Avatar');

author.title = 'hello world';
user.comment = 'cool !!';

console.log(author.className);
console.log(user);



// ================================================
// ================ Đối tượng Date ================
// ================================================

var date = new Date();

var year = date.getFullYear(); // year
var month = date.getMonth() + 1; // 0-11 --> (+ 1) // month
var day = date.getDate(); // day
var hours = date.getHours(); // hours
var minutes = date.getMinutes(); // minutes
var seconds = date.getSeconds(); // seconds

console.log(`${day}/${month}/${year}`);
console.log(`${hours}:${minutes}:${seconds}`);



// ============================================
//================ For/in loop ================
// ============================================

// object
var Info = {
    name: 'Tien Dat',
    age: 19,
    address: 'Quang Binh'
};

for (var key in Info)
{
    console.log(Info[key]);
}

// array
var languages = ['Javascript', 'PHP', 'Ruby'];

for (var key in languages)
{
    console.log(languages[key]);
}

// string
var myString = 'Javascript';

for (var key in myString)
{
    console.log(myString[key]);
}



// ============================================
//================ For/of loop ================
// ============================================

var courses = ['Javascript', 'PHP', 'Java'];

for (var value of courses)
{
    console.log(value);
}


// ==============================================
// ================ Array method ================
// ==============================================

/*
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var subjects = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },

    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },

    {
        id: 3,
        name: 'Ruby',
        coin: 1
    },

    {
        id: 4,
        name: 'Java',
        coin: 2
    },

    {
        id: 5,
        name: 'C++',
        coin: 1
    },

    {
        id: 6,
        name: 'Node.Js',
        coin: 5
    },

    {
        id: 7,
        name: 'C#',
        coin: 12
    }
];

// ================ map() ================
function subjectsHandler(subject, index, originArray)
{
    // console.log(subject);
    return {
        id: subject.id,
        name: `Khoa hoc: ${subject.name}`,
        coin: subject.coin,
        coinText: `Gia: ${subject.coin}`,

        index: index,

        originArray: originArray
    };
};

var newSubjects = subjects.map(subjectsHandler);

console.log(newSubjects);

// ================ reduce() ================

// normal way
var totalCoin = 0;
for (var subject of subjects)
{
    totalCoin += subject.coin;
};

console.log(totalCoin);

// use reduce()
function coinHandler(accumulator, currentValue, currentIndex, originArray)
{
    return accumulator + currentValue.coin;
};

var totalCoin2 = subjects.reduce(coinHandler, 0);

console.log(totalCoin2);

// ================ ForEach ================
Array.prototype.forEach2 = function(callback) {

}

var hehe = ['Jayce', 'Kata', 'Lucy'];
hehe.forEach(function(elm, index, array) {
    console.log(elm, index, array);
});


// Exercises

    var numbers = [5, 16, 15, 64, 94];

    var sum = numbers.reduce(function(sum, number) {
        return sum + number;
    });

    console.log(sum);

// "Làm phẳng" mảng từ Depth array - "Mảng sâu"
    var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
    var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
        return flatOutput.concat(depthItem);
    }, []);

    console.log(flatArray);

// Lấy ra các khóa học và đưa vào một mảng mới
    var topics = [
        {
            topic: "Front-end",
            courses: [
                {
                    id: 1,
                    title: "HTML, CSS"
                },
                {
                    id: 2,
                    title: "Javascript"
                }
            ]
        },
        {
            topic: "Back-end",
            courses: [
                {
                    id: 1,
                    title: "PHP"
                },
                {
                    id: 2,
                    title: "NodeJS"
                }
            ]
        }
    ]

    var newCourses = topics.reduce(function(course, topic) {
        return course.concat(topic.courses);
    }, []);

    console.log(newCourses);

    var htmls = newCourses.map(function(course) {
        return `
            <div>
                <h2>${course.title}</h2>
                <p>${course.id}</p>
            </div>
        `;
    });

    // convert to string
    console.log(htmls.join(''));



// ================================================
// ================ include method ================
// ================================================

var title = 'Responsive web design';
console.log(title.includes('web'));

var arr = ['Javascript', 'PHP', 'Dart'];
console.log(arr.includes('PHP'));



// =============================================
// ================ Math object ================
// =============================================

/*

- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()

*/

console.log(Math.PI); // số PI
console.log(Math.round(5.3)); // làm tròn
console.log(Math.abs(-4)); // giá trị tuyệt đối
console.log(Math.ceil(4.1)); // làm tròn trên
console.log(Math.floor(5.9)); // làm tròn dưới
console.log(Math.floor(Math.random() * 10)); // random trong 1 khoảng cho trước (0-10)
console.log(Math.min(5, 2, 1, 6, 8));
console.log(Math.max(5, 2, 1, 100, 3));



// ============================================
//================ CallBack? ==================
// ============================================

// Là hàm (function) được truyền qua đối số
// Khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
    if (typeof param === 'function') {
        param('Hello');
    }
}

function myCallback(value) {
    console.log('Value: ', value);
}

myFunction(myCallback);



// ==================================================
// ==================== HTML DOM ====================
// ==================================================

// stand for "Document Object Model"
/**
 * -- Includes 3 part:
 *    1. Element
 *    2. Attribute
 *    3. Text
 */

// Node

// ----------------------------

// Javascript: Browser | Server (Node.JS)

// Browser: HTML -> DOM -> WEB API

// Document
console.log(document);

document.write('HELLO GUYS!');

// Element: ID, class, tag, CSS selector, HTML collection
var id = document.getElementById('heading');

var class1 = document.getElementsByClassName('heading');

var tag = document.getElementsByTagName('h1');

var css = document.querySelector('.heading');

console.log('css selector: ', css);
console.log('tag: ', tag);
console.log('class: ', id);
console.log('id: ', class1);

// === Attributes ===
var headingElement = document.querySelector('h1');

// Set attribute
headingElement.title = 'title';
headingElement.id = 'id';
headingElement.className = 'class';
/* or */
headingElement.setAttribute('class', 'heading');

// Get attribute
console.log(headingElement.getAttribute('class'));

// innerText, textContent
// get text
console.log(headingElement.innerText);
console.log(headingElement.textContent);

// set text
headingElement.innerText = 'I love you';
headingElement.textContent = 'I hate you';

// innerHTML, outerHTML
var boxElement = document.querySelector('.box'); // ***

boxElement.innerHTML = '<h1>Heading</h1>';

console.log(boxElement.innerHTML);

console.log(boxElement.outerHTML);

// === Node properties ===

// ====   DOM style   ====

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';
// boxElement.style.borderRadius = '10px';

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
})

// === ClassList property ===

// add
// contains
// remove
// toggle

console.log(boxElement.classList.length); // length
console.log(boxElement.classList.value); // value in string type

boxElement.classList.add('red'); // add class
console.log(boxElement.classList.contains('red')); // check class is contain or not
boxElement.classList.remove('red'); // remove class

setTimeout(() => {                          //
    boxElement.classList.remove('red');     //  remove class after 3s
}, 3000);                                   //

boxElement.classList.toggle('red'); // remove/add if class 'red' is exist/not exist

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);

// === DOM events ===

// 1. Attribute events: using in html file
// 2. Assign event using the element node
var h1Element = document.querySelectorAll('h1');
console.log(h1Element);

for (var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}

// === 1. Input / select
var inputValue;

var inputElement = document.querySelector('input[type="text"]');

// input
inputElement.onchange = function(e) {
    inputValue = e.target.value;
    console.log(`Value: ${inputValue}`);
}

inputElement.oninput = function(e) {
    inputValue = e.target.value;
    console.log(`Value: ${inputValue}`);
}

// checkbox
var checkboxElement = document.querySelector('input[type="checkbox"]');

checkboxElement.onchange = function(e) {
    console.log(e.target.checked);
}

// select
var selectElement = document.querySelector('select');

selectElement.onchange = function(e) {
    console.log(e.target.value);
}

// === 2. Key up / down
inputElement.onkeydown = function(e) {
    console.log(e.which);

    switch(e.which) {
        case 27:
            console.log('Exit');
            break;
    }
}

document.onkeyup = function(e) {
    switch(e.which) {
        case 27:
            console.log('EXIT');
            break;
        case 13:
            console.log('SEND MESSAGE');
            break;
    }
}

document.onkeypress = function(e) {
    console.log(e.which);
}

// === 1. preventDefault
var aElements = document.links;

for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        if (!e.target.href.startsWith('https://www.facebook.com/')) {
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = function(e) {
    console.log(e.target);
}

// 2. stopPropagation (Propagation: lan truyền)
var divElement = document.querySelector('.div');
divElement.onclick = function(e) {
    console.log('DIV');
}

var buttonElement = document.querySelector('button');
buttonElement.onclick = function(e) {
    console.log('Click me!');
    e.stopPropagation();
}

// example
var body = document.querySelector('.all');
var mode = document.querySelector('a');
mode.onclick = function(e) {
    body.classList.toggle('dark');
    console.log(mode);
}

