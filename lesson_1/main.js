// Polyfill ?

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

// Object

var myInfo = {
    name: 'Tien Dat',
    age: 19,
    address: 'Quang Binh'
};

myInfo.email = 'ngtiendat.94.04@gmail.com';
// or
myInfo['email'] = 'ngtiendat.94.04@gmail.com';

console.log(myInfo);