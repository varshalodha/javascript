function removeDuplicate1(arr){
  var map = {};
  var resArr = [];
  for (let i=0; i< arr.length; i++){
    if(!map[arr[i]]){
      map[arr[i]] = true; // {1:true, 2:true}
      resArr.push(arr[i]);
    }
  }
  console.log(resArr);
}

function removeDuplicate2(arr) {
	var set = new Set(arr);
	console.log(Array.from(set));
}

function removeDuplicate3(arr){
  var res = arr.reduce((acc,val) => {
    if(acc.indexOf(val) == -1){
      acc.push(val);
    }
    return acc;
  },[]);

  console.log(res);
}

var arr = [1, 2, 2, 4, 5, 3, 5, 18];

removeDuplicate1(arr);
removeDuplicate2(arr);
removeDuplicate3(arr);
