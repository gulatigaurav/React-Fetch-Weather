// function getTempCallback( location ) {
//     return new Promise(function (resolve, reject) {
//         resolve(78);
//         reject('City Not Found');
//     });
// }
//
// getTempCallback('Philedephia').then(
//     function (temp) {
//         console.log(temp);
//     }, function (err) {
//         console.log(err);
//     }
// )

function addTwoNumbers( a, b ) {
    return new Promise (function (resolve, reject){
        if (  typeof(a) == 'number' & typeof(b) == 'number' ){
            resolve(a+b);
        }
        else {
            reject('Please enter two numbers');
        }
    });
}

addTwoNumbers(5,'Hello World').then(function (x) {
    console.log(x);
}, function (err) {
    console.log(err);
    })
