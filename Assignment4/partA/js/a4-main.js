
var filterAgeMax = Number.MAX_VALUE; 
var filterAgeMin = 0; 
var filterType = ""

window.onload=function(){

    filterAllPets();
    
}

function loadTableWithFilters(){
    
    var table = document.querySelector("#main-table-body");
    
    table.innerHTML="";

      for( var i=0;i<petData.length;i++)
      {
        
          if((filterType == "dog" && petData[i].type=="dog" )||( filterType == "cat" && petData[i].type=="cat") || (filterType == "bird" && petData[i].type=="bird")||(filterType == ""))
          {
              if(petData[i].age>=filterAgeMin && petData[i].age<=filterAgeMax &&filterType=="")
              {
                
                var tr = document.createElement('tr');
                var firsttd = document.createElement('td');
                var image = document.createElement('img');
                
                image.setAttribute("src", petData[i].image.src);
                image.setAttribute("width",petData[i].image.width);
                image.setAttribute("height",petData[i].image.height);
                image.setAttribute("alt",petData[i].image.alt);
                
                firsttd.appendChild(image);
                tr.appendChild(firsttd);
                
                var secondtd = document.createElement('td');
                tr.appendChild(secondtd);
                
                var head = document.createElement('h4');
                secondtd.appendChild(head);
                
                var name = document.createTextNode(""+petData[i].name+"");
                head.appendChild(name);
                
                var para = document.createElement('p');
                var span = document.createElement('span');
                
                para.innerHTML = petData[i].description;
                secondtd.appendChild(para);
                
                var age = document.createTextNode("Age: " + petData[i].age + " year old.");
                
                span.appendChild(age);
                secondtd.appendChild(span);
                table.appendChild(tr);
              }
             else if(petData[i].age>=filterAgeMin && petData[i].age<=filterAgeMax &&filterType==petData[i].type){
                
                var tr = document.createElement('tr');
                var firsttd = document.createElement('td');
                var image = document.createElement('img');
                
                image.setAttribute("src", petData[i].image.src);
                image.setAttribute("width",petData[i].image.width);
                image.setAttribute("height",petData[i].image.height);
                image.setAttribute("alt",petData[i].image.alt);
                
                firsttd.appendChild(image);
                tr.appendChild(firsttd);
                
                var secondtd = document.createElement('td');
                tr.appendChild(secondtd);
                
                var head = document.createElement('h4');
                secondtd.appendChild(head);
                
                var name = document.createTextNode(""+petData[i].name+"");
                head.appendChild(name);
                
                var para = document.createElement('p');
                var span = document.createElement('span');
                
                para.innerHTML = petData[i].description;
                secondtd.appendChild(para);
                
                var age = document.createTextNode("Age: " + petData[i].age + " year old.");
                
                span.appendChild(age);
                secondtd.appendChild(span);
                table.appendChild(tr);
                 
          }
          
    }
}
}

function filterDogs(){
    
    filterType = "dog";

    loadTableWithFilters();

}

function filterBird(){
   
    filterType = "bird";

    loadTableWithFilters();

}

function filterCat(){
    
    filterType = "cat";
 
    loadTableWithFilters();

}

function filter_zero_1(){
    
    filterAgeMin = 0;
    
    filterAgeMax = 1;
    
    loadTableWithFilters();

}

function filter_1_3(){
   
    filterAgeMin = 1;
   
    filterAgeMax = 3;
   
    loadTableWithFilters();

}

function filter_4_plus(){
    
    filterAgeMin = 4;
    
    filterAgeMax = Number.MAX_VALUE;
    
    loadTableWithFilters();

}

function filterAllPets(){
    
    filterType="";

    loadTableWithFilters();

}