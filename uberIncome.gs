var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

var today = Utilities.formatDate(new Date(), "GMT-8", "MM/dd/yyyy");



function UBERDATE(range,date,year)
/* make it throw a parameter error if date!= 1 or 2 */  
{
  
  if (year==null) {year=2018;} 
   
  if (range.constructor != Array) { range = [[range]]; }
  
  var regexp = /\w{3}\s\d{1,2}/;
  
  for (var i = 0; i < range.length; i++){
   
   var splitDate = ( range[i][0].split(' - ') )[date-1];
   
   if ( range[i] != "" && regexp.test(splitDate) ){ 
    
        range[i] = [Utilities.formatDate(new Date( splitDate + " " + year),"GMT","M/d/yyyy")]; 
        
    }
  
  }

  return range;
  
}


function UBERWEEK(range)

{
  
  if (range.constructor != Array) { range = [[range]]; }
    
    
    
    // add date validation to this change to for loop
    for (var i = 0; i < range.length; i++ ) {
        
        if (range[i] != ""){
        
        var date = new Date(range[i]);
                
        var weekDay = Utilities.formatDate(date, "GMT", "u"); var monthDay = Utilities.formatDate(date, "GMT", "d");  
        
        date.setDate(monthDay-weekDay+1);
        
        var weekBegin = Utilities.formatDate(date,"GMT","MMM d");
        
        date.setDate(monthDay-weekDay+8);
        
        var weekEnd = Utilities.formatDate(date,"GMT","MMM d");
        
        range[i] = [weekBegin+" - "+weekEnd]; 
        
       }
        
    }
    
   return range;

}


function searchINDEX(value,index)

{
  var data = Spreadsheet.getActiveSheet().getDataRange().getValues();
  
  for (i=0;i<data.length;i++){
  
    for(j=0;j<data[0].length;j++){
  
      if (data[i][j]==value) {
      
        var arr=[i,j];
        
      }
    
    }
  
  }
       return arr[index];
}