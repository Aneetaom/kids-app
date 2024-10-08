
var userinput = prompt(`
    "Unlock a world of fun and learning as kids count their way to new adventures with every tap!"
    
     COUNTING 

     TABLE
    
     BACKWARD COUNTING
    
     FORWARD COUNTING
    
    `)
           // COUNTING

if (userinput.toLowerCase() === "counting"){
    for(var i = 1; i <= 100; i += 10)

        for(var j= i; j < i + 10; j++ ){
           document.write(" " +  j + " " );
         }
         document.write("</br>")
        }
            // TABLES

        if (userinput.toLowerCase() === "table"){
        var startFrom = +prompt("Enter Start Number")
  var endFrom = +prompt("Enter Ending Number")
 var tableOf = +prompt("Enter The Number ")

 for(var i= startFrom; i<=endFrom; i++){
   
    document.write( tableOf + "  X  " +  i + " = " +( tableOf*i) +  "</br>")
 }
}
        // BACKWARD COUNTING   

      if(userinput.toLowerCase() === "backward counting"){
      
 var startNum = parseInt(prompt("Enter start number"), 10); 
 var endNum = parseInt(prompt("Enter end number (up to 100)"), 10); 

       for(var i = startNum; i >= endNum; i -= 10){
      
      for(var j= i; j > i - 10 && j >= endNum; j-- ){
          document.write(" " +  j + " " );
      }
      document.write("</br>")
      }
      }

    //   FORWARD COUNTING

       else if(userinput.toLowerCase() === "forward counting"){
         var startNum = parseInt(prompt("Enter start number"), 10); 
         var endNum = parseInt(prompt("Enter end number (up to 100)"), 10); 
     if (endNum > 100) {
             endNum = 100;
       }
    
        for (var i = startNum; i <= endNum; i += 10) {
            for (var j = i; j < i + 10 && j <= endNum; j++) { 
                document.write(" " + j + " ");
            }
             document.write("<br/>"); 
       }
     }
    
    

