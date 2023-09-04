let users=[
    {name:"john",age:25,occupation:"gardener"},
    {name:"lenny",age:51,occupation:"programmer"},
    {name:"andrew",age:43,occupation:"teacher"},
    {name:"peter",age:81,occupation:"teacher"},
    {name:"anna",age:47,occupation:"programmer"},
    {name:"albert",age:76,occupation:"programmer"},
]

var ans=users.filter(function(e){
    if(e.occupation=="programmer"){
        console.log(e);
    }
})