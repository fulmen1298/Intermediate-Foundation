function sigma(num){
    sum=0;
    for(var i=0; i<num+1; i++){
        sum+=i;
    }
    console.log(sum);
}

function factorial(num){
    product=1;
    for(var i=num; i>0; i--){
        product*=i;
    }
    console.log(product);
}

function fibonacci(num, index){
    var a = 1, b = 0, temp;
    var arr=[];

    while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
    arr.push(a);
  }
  console.log(arr);

  return arr[index-1];
}

function secondToLast(arr){
    if(arr.length<2){
        console.log("null");
    }
    else{
        console.log(arr[arr.length-2]);
    }
        
}

function nthToLast(arr, index){
    if(arr.length<index){
        console.log("null");
    }
    else{
        console.log(arr[arr.length-(index)]);
    }
        
}

function secondLargest(arr){
    biggest = -Infinity,
next_biggest = -Infinity;

for (var i = 0, n = arr.length; i < n; ++i) {
    var nr = +arr[i]; 

    if (nr > biggest) {
        next_biggest = biggest; 
        biggest = nr;
    } else if (nr < biggest && nr > next_biggest) {
        next_biggest = nr; 
    }
}

console.log(next_biggest);
}

function doubleTrouble(arr){
    newArr=[];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

