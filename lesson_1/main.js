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


