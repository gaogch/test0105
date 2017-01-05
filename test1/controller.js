angular.module("ctrls",["sevices"])
.controller("index",["$scope","$http","indexDate",function($scope,$http,indexDate){
    // $scope.data=[
    //     {title:"新闻1",con:"新闻内容"},
    //     {title:"新闻1",con:"新闻内容"},
    //     {title:"新闻1",con:"新闻内容"},
    //     {title:"新闻1",con:"新闻内容"},
    //     {title:"新闻1",con:"新闻内容"},
    //     {title:"新闻1",con:"新闻内容"},
    //     {title:"新闻1",con:"新闻内容"}
    // ]
    indexDate.then(function(data){
        $scope.data = data.data;
    })
}]).controller("list",function($scope,$routeParams){
    $scope.id=$routeParams.id;
}).controller("show",function($scope,$routeParams){
    console.log(123)
})