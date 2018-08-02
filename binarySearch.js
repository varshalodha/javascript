var binarySearch = function(items,num){
  var start =0 ;
  var end = items.length-1;
  var middle = Math.floor((start+end)/2);
  
  
  while(items[middle]!=num && start < end){
  
    if(num < items[middle]){
      end = middle-1;
    }else if (num > items[middle]){
      start = middle+1;
    }
    middle = Math.floor((start+end)/2);
  }
 
  return (items[middle] != num) ? -1 : middle;
}

var items = ["a","b","c","d","e","f","g","h","i","j"];
console.log(binarySearch(items,"a"));
