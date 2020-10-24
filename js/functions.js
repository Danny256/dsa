// window.onload = initAll; 

function fib(limit){
    document.getElementById("fibOut").innerHTML ="";
    var oldfib;
    var a = 0,b = 1,c;
    if(limit > 0){
        for(i = 1; i <= limit ; i++){
            if(i == limit){
                oldfib = fibOut.innerHTML;
                fibOut.innerHTML = oldfib + a;
            }else{
                oldfib = fibOut.innerHTML;
                fibOut.innerHTML = oldfib + a + ',' ;
            }
            c = a+b;
            a = b;
            b = c;
        }
    }else{document.getElementById("fibOut").innerHTML = 'Please enter a Positive Integer';}
}

function fibClear(){
    document.getElementById("fibOut").innerHTML ="";
    document.getElementById("fibLimit").value = "";
}

function fact(n){
    var fact = 1;
    if(n == 1 || n == 0){
        document.getElementById("facto").innerHTML = 1;
    }else if( n > 1){
        for(var i = n; i >= 1; i--){
            fact *= i;
        }
        document.getElementById("facto").innerHTML = fact;
    }else{
        document.getElementById("facto").innerHTML = 'Please enter a Positive Integer';
    }
}

function factClear(){
    document.getElementById("facto").innerHTML = "";
    document.getElementById("factof").value = "";
}

function Toh(disks,source,dest,aux){
    if(disks == 1){
        var oldout = toho.innerHTML;
        toho.innerHTML = oldout +" Move disk " + disks + " from rod " + source + " to rod " + dest + "<br>";
    }else{
        Toh(disks-1,source,aux,dest);
        Toh(1,source,dest,aux);
        Toh(disks-1,aux,dest,source);
    }
    var steps = Math.pow(2,disks) - 1;
    document.getElementById('moves').innerHTML = "Total number of moves : " + steps;
}

function reset(){
    //Tower of Hanoi reset
    document.getElementById("toho").innerHTML = " ";
    document.getElementById("moves").innerHTML = " ";
    document.getElementById("disks").value = " ";
    document.getElementById("src").value = " ";
    document.getElementById("dest").value = " ";
    document.getElementById("aux").value = " ";
}

        //>> Stack Implemenation <<
//Constructor Function of the Stack Class
function Stack() {          
   this.dataStore = [];
   this.top = 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
   this.length = length;
   this.prints = prints;
   this.clear = clear;
}

function push(element) {
   this.dataStore[this.top++] = element;
   document.getElementById('out').innerHTML = "Push(" + document.getElementById('stackin').value +")";
   document.getElementById('stackin').value = "";
}

function peek() {
    if(this.top > 0){
        return  document.getElementById('out').innerHTML = this.dataStore[this.top-1];
    }else{
        return document.getElementById('out').innerHTML = "Stack empty";
    }
}

function pop() {
    if(this.top == 0){
        return document.getElementById('out').innerHTML = "Stack Under flow";
    }else{
        return document.getElementById('out').innerHTML = "Pop(" + this.dataStore[--this.top] + ")";
    }
}

function clear() {
   this.top = 0;
   return document.getElementById('out').innerHTML = "Stack Cleared";
}

function length() {
   return document.getElementById('out').innerHTML = this.top;
}

function prints() {
    var str = " ";
//Starting from the first in 
    var temp =  this.top - 1;
    for(var i = 0; i < this.top; i++){
        if(temp == i){
            str += this.dataStore[i];
        }else{
            str += this.dataStore[i] + ", ";
        }
    }
    return document.getElementById('out').innerHTML = str;
}
var si = new Stack();
//End of Stack Implementation

//>>Queue Implementation (Array)
function Queue(){
	var storage = {},
		head = 0,
		tail= 0;
    
	return {
		enQueue: function(item){
			storage[tail] = item;
              tail++;
              document.getElementById('qout').innerHTML = "enQueue(" + document.getElementById('queuein').value +")";
              document.getElementById('queuein').value = "";
              
		},
		deQueue: function(){
			var size = tail - head;

            if (size <= 0) return undefined;
            
			var item = storage[head];
			delete storage[head];
            head++;

			//Reset the counter
			if (head === tail){
				head = 0;
				tail = 0;
			}
			
            return "deQueue("+ item +")";
		},
		size: function(){
            return tail - head;
            // return document.getElementById('qout').innerHTML = tail - head;
		},
		peek: function(){
            return storage[tail - 1];
            // return document.getElementById('qout').innerHTML = storage[tail - 1];
		},
		print: function(){
			var result = [];

			for (var key in storage){
				result.push(storage[key]);
			}

            return result;
            // return document.getElementById('qout').innerHTML = result;
        },
        clear: function(){
            head = 0;
            tail = 0;
            storage = {};
            document.getElementById('queuein').value = "";
            return  document.getElementById('qout').innerHTML = " ";
        },
        isEmpty: function(){
            if(head == tail){
                return document.getElementById('qout').innerHTML = "Queue is Empty";
            }else{
                return document.getElementById('qout').innerHTML = "Queue is not Empty";
            }
        },
        isFull: function(){
            //Actually this queue can never get full
            return document.getElementById('qout').innerHTML = "Queue is not Full";
        }
	}
}
var q = new Queue();
//End of Queue Implementation


                        //>>>Linked List Implementation
// User defined class node 
class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null;
    } 
}

//linkedlist class 
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 

// adds an element at the end of list   
	add(element) 
	{ 
	    // creates a new node 
	    var node = new Node(element); 
	    // to store current node 
	    var current; 
	    // if list is Empty add the element and make it head 
	    if (this.head == null) 
	        this.head = node; 
	    else { 
	        current = this.head; 
	        // iterate to the end of the list 
	        while (current.next) { 
	            current = current.next; 
	        } 
	        // add node 
	        current.next = node; 
	    } 
        this.size++; 
        document.getElementById('lin1').value = " ";
		return document.getElementById('lout').innerHTML = element ;
	}

	// insert element at the position index 
// of the list 
	insertAt(element, index) 
	{ 
	    if (index > 0 && index > this.size) 
            return false; 
            // return document.getElementById('lout').innerHTML = "false";
	    else { 
	        // creates a new node 
	        var node = new Node(element); 
	        var curr, prev; 
	        curr = this.head; 
	        // add the element to the first index  
	        if (index == 0) { 
	            node.next = head; 
	            this.head = node; 
	        } else { 
	            curr = this.head; 
	            var it = 0; 
	            // iterate over the list to find the position to insert
	            while (it < index) { 
	                it++; 
	                prev = curr; 
	                curr = curr.next; 
	            } 
	            // adding an element 
	            node.next = curr; 
	            prev.next = node; 
            } 
            this.size++; 
            // document.getElementById('lin2').value = "";
    	    return document.getElementById('lout').innerHTML =  "Inserted at Index "+ document.getElementById('lin2').value;
	    } 
	}

	// removes an element from the 
// specified location 
	removeFrom(index) 
	{ 
	    if (index > 0 && index > this.size) 
            return -1; 
	    else { 
	        var curr, prev, it = 0; 
	        curr = this.head; 
	        prev = curr; 
	        // deleting first element 
	        if (index === 0) { 
	            this.head = curr.next; 
	        } else { 
	            // iterate over the list to the position to removce an element
	            while (it < index) { 
	                it++; 
	                prev = curr; 
	                curr = curr.next; 
	            } 
	            // remove the element 
                prev.next = curr.next; 
	        } 
	        this.size--; 
                return curr.element; 
	    } 
	}

	// removes a given element from the 
// list 
	removeElement(element) 
	{ 
	    var current = this.head; 
	    var prev = null; 
	    // iterate over the list 
	    while (current != null) { 
	        // comparing element with current // element if found then remove the // and return true 
	        if (current.element === element) { 
	            if (prev == null) { 
	                this.head = current.next; 
	            } else { 
	                prev.next = current.next; 
	            } 
	            this.size--; 
                return current.element; 
	        } 
	        prev = current; 
	        current = current.next; 
	    } 
        return -1; 
	}

	// prints the list items 
	printList() 
	{ 
	    var curr = this.head; 
	    var str = " "; 
        while (curr) { 
            str += curr.element; 
            curr = curr.next; 
            if(curr){
                str += ","; 
            }
        }
		console.log(str); 
		return document.getElementById('lout').innerHTML = str;
	}

	// finds the index of element 
	// indexOf(element) 
	// { 
	// 	var count = 0; 
	// 	var current = this.head; 
	// 	// iterae over the list 
	// 	while (current != null) { 
	// 		// compare each element of the list // with given element
	// 		if (current.element === element) 
    //             return count; 
    //     		// return document.getElementById('lout').innerHTML = count;
	// 		count++; 
	// 		current = current.next; 
	// 	} 
	// 	// not found 
    //     return -1; 
    //     // return document.getElementById('lout').innerHTML = -1;
	// }
	
	// checks the list for empty 
	isEmpty() 
	{ 
        return this.size == 0; 
        // this.size == 0; 
        // return document.getElementById('lout').innerHTML = this.size;
	}
	
	// gives the size of the list 
	size_of_list() 
	{ 
        console.log(this.size); 
        return document.getElementById('lout').innerHTML = this.size;
    } 
    clearll(){
        this.head = null; 
        this.size = 0;
        document.getElementById('lin1').value = "";
        document.getElementById('lin2').value = "";
        document.getElementById('lout').innerHTML = "Linked List Cleared";
    }
}
var ll = new LinkedList();
//End of linked list implementation


//Linear & Binary search implementation
function search(){
    this.dataStore = [];
    this.top = 0;
    this.srpush = srpush;
    this.srprints = srprints;
    this.srclear = srclear;
    this.lsearch = lsearch;
    this.binaryS = binaryS;
    // this.bsearch = bsearch;
}

function srpush(element) {
    document.getElementById('sout').innerHTML = " ";
    this.dataStore[this.top++] = element;
    // document.getElementById('lsi').value = "";
   
    return document.getElementById('lsout').innerHTML = "Push(" + document.getElementById('lsi').value +")";
    // console.log("Push(" + document.getElementById('lsi').value +")");
 }

function lsearch(item){
    var t0 = performance.now();
    for(var i = 0; i < this.top ; i++){
       if(this.dataStore[i] === item){
        var t1 = performance.now();
           document.getElementById('sout').innerHTML = "Time taken "+ (t1 - t0) + " milliseconds";
           return document.getElementById('lsout').innerHTML = "At index "+i;     
       }
    }
    var t1 = performance.now();
    document.getElementById('sout').innerHTML = "Time taken "+ (t1 - t0) + " milliseconds";
    return  document.getElementById('lsout').innerHTML = "Not Found";
}

var list = [];
function binaryS(value, list) {
    var t0 = performance.now();
    for(var i = 0; i < this.top; i++){
        list[i] = this.dataStore[i];
    }

    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    var t1 = performance.now();
    document.getElementById('sout').innerHTML = "Time taken "+ (t1 - t0) + " milliseconds";

    if(position == -1)
    return  "Not found or Data unsorted";
    else
    return "At index "+ position;
}

// function binaryS(value, list){
//     // var t0 = performance.now();
//     for(var i = 0; i < this.top; i++){
//         list[i] = this.dataStore[i];
//     }

//     let start = 0;
//     let end = list.length - 1;
//     let mid;

//     while(start <= end)
//     {
//         mid = Math.floor((start+end)/2);
//         if(list[mid] === value){
//             return mid;
//         }else if(value < list[mid]){
//             end = mid-1;
//         }else{
//             start = mid+1;
//         }
//     }return -1;
// }

function srprints() {
    document.getElementById('sout').innerHTML = "";
    var str = " ";
//Starting from the first in 
    var temp =  this.top - 1;
    for(var i = 0; i < this.top; i++){
         if(temp == i){
            str += this.dataStore[i];
        }else{
            str += this.dataStore[i] + ", ";
        }
    }     
    return document.getElementById('lsout').innerHTML = str;
}

function srclear() {
    document.getElementById('lsout').innerHTML = "";
    this.top = 0;
    this.dataStore = [];
    document.getElementById('lsi').value = "";
    document.getElementById('sout').innerHTML = "";
    return document.getElementById('lsout').innerHTML = "Elements Cleared";
 }

var s = new search();
//End of linear Search Implementation

            //Sorting Algorithms
function sortA(){
    this.dataStore = [];
    this.top = 0;
    this.srtpush = srtpush;   
    this.srtprints = srtprints;
    this.srtclear = srtclear;
    this.bSort = bSort;
    this.sSort = sSort;
    this.iSort = iSort;
    this.iSort2 = iSort2;
    this.qSort = qSort;
    this.mSort = qSort;
    this.merge = merge;
}

var arr = [];

function bSort() {
    for(var i = 0; i < this.top; i++){
        arr[i] = this.dataStore[i];
    }

    var swapped;
    do {
        swapped = false;
        for (var i=0; i < this.top ; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
        document.getElementById('complexity').innerHTML = "Time complexity > Best: O(n), Average: O(n^2), Worst: O(n^2)";
    return arr;
}

function sSort(){
    for(var i = 0; i < this.top; i++){
        arr[i] = this.dataStore[i];
    }

    for(var i = 0; i < arr.length ; i++){
        //Set minimum to this position
        min = i;
        //Check the rest of the array to see if anything is smaller
        for(var j = i+1; j < this.top ; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        //If the minimum isn't in the position, swap it
        if( i != min){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    document.getElementById('complexity').innerHTML = "Time complexity > Best: O(n^2), Average: O(n^2), Worst: O(n^2)";
    return arr;
}

function iSort(){
    for (var i = 1; i < this.top; i++) 
    {
      if (this.dataStore[i] < this.dataStore[0]) 
      {
        //move current element to the first position
        this.dataStore.unshift(this.dataStore.splice(i,1)[0]);
      } 
      else if (this.dataStore[i] > this.dataStore[i-1]) 
      {
        //leave current element where it is
        continue;
      } 
      else {
        //find where element should go
        for (var j = 1; j < i; j++) {
          if (this.dataStore[i] > this.dataStore[j-1] && this.dataStore[i] < this.dataStore[j]) 
          {
            //move element
            this.dataStore.splice(j,0,this.dataStore.splice(i,1)[0]);
          }
        }
      }
    }
    var str = "";
    for(var i = 0; i < this.top; i++){
        str += this.dataStore[i] + ", ";
    }
    document.getElementById('complexity').innerHTML = "Time complexity > Best: O(n), Average: O(n^2), Worst: O(n^2)";
    return document.getElementById('saout').innerHTML = str;    
  }
//Insertion Sort is Repeated with a different approach
function iSort2(){
    // var insertionSort = function(arr){
        arr = [];
        for(var i = 0; i < this.top; i++){
            arr[i] = this.dataStore[i];
        }
        for(var i = 1; i < arr.length; i++){
            for(var j = 0; j < i; j++){
                if(arr[i] < arr[j]){
                    var temp = arr.splice(i,1);
                    arr.splice(j,0,temp[0]);
                }
            }
        }
        document.getElementById('complexity').innerHTML = "Time complexity > Best: O(n), Average: O(n^2), Worst: O(n^2)";
        return arr;
    // }
}

function qSort(arr){
    // document.getElementById('complexity').innerHTML = "Time complexity > Best: O(n log n), Average: O(n log n), Worst: O(n^2)";
    document.getElementById('complexity').innerHTML = "Time complexity > Best: O(n log n), Average: O(n log n)";
    for(var i = 0; i < this.top; i++){
        arr[i] = this.dataStore[i];
    }

    if(arr.length <= 1) return arr;

    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];

    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else right.push(arr[i])
    }
    return [...qSort(left), pivot, ...qSort(right)]
 }

function mSort(arr){
    document.getElementById('complexity').innerHTML = "Time complexity > Best: O(n log n), Average: O(n log n), Worst: O(n log n)";
    for(var i = 0; i < this.top; i++){
        arr[i] = this.dataStore[i];
    }
    if(arr.length < 2) return arr;
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);
    return merge(mSort(left), mSort(right));
}

function merge(left, right){
    // document.getElementById('complexity2').innerHTML = "Time complexity > Best: O(n log n), Average: O(n log n), Worst: O(n log n)";
    var result = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
}

function srtpush(element) {
    this.dataStore[this.top++] = element;
    return document.getElementById('saout').innerHTML = "Push(" + document.getElementById('sai').value +")";
 }

function srtprints() {
    var str = " ";
//Starting from the first in 
    var temp =  this.top - 1;
    for(var i = 0; i < this.top; i++){
        if(temp == i){
            str += this.dataStore[i];
        }else{
            str += this.dataStore[i] + ", ";
        }
    }        
    return document.getElementById('saout').innerHTML = str;
}

function srtclear() {   
    document.getElementById('saout').innerHTML = "";
    this.top = 0;
    this.dataStore = [];
    document.getElementById('sai').value = "";
    document.getElementById('complexity').innerHTML = "";
    return document.getElementById('saout').innerHTML = "Elements Cleared";
 }

var sa = new sortA();  

//End of sorting Algorithms