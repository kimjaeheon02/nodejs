const user_list = ['김재헌', '김재훈', '김재홍'];

function getAllUsers(callback_function){
    if(user_list.length == 0){
        callback_function(new Error('에러 발생!'), undefined);
        return;
    } else{
        callback_function(undefined, user_list);
    }
}