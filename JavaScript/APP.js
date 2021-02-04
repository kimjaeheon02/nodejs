import DB from './DB.js';

DB.getAllUsers( function myCallback(error, users){
    if(error){
        console.log('에러 에러 에러');
        console.log(error);
        return;
    }
    console.log('성공!');
    console.log(users);
})

