angular.module("sevices",[])
.factory("indexDate",function($http){
    //服务
    // return $http({url:"1.txt"}).then(function(data){
    //     return data.data
    // })//返回一个promise对象；
    return $http({url:"1.txt"})

})
