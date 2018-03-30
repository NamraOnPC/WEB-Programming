// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){
    var fruitListContainer = document.querySelector("#ListOfFruits");
    var orderedList = "<ol>";

    for(var i =0; i < fruits.length; i++){
        orderedList += "<li>" + fruits[i] + "</li>";
    }
    
    orderedList += "</ol>";
    fruitListContainer.innerHTML = orderedList;

    var unorderedListContainer = document.querySelector("#ListOfFiles");
    var unorderedList = "<ul>";
    
    for(var i = 0; i < directory.length; i++){
        unorderedList += "<li>";        
        if(directory[i].type == "file"){
            unorderedList += directory[i].name;
        }else if(directory[i].type == "directory"){             unorderedList += directory[i].name + "<ul>";            for(var j = 0; j < directory[i].files.length; j++){                unorderedList += "<li>" + directory[i].files[j].name + "</li>";            }            unorderedList += "</ul>";        }        unorderedList += "</li>"    }
    unorderedList += "</ul>";
    unorderedListContainer.innerHTML = unorderedList;
};
