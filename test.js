const async = function(number, callback){
    const result = number + 2;
    callback(result);
}

async(2, function (result){
        console.log(result);
        async(4, function (result){
            console.log(result);
            async(6, function(result){
                console.log(result);
            })
        })
});