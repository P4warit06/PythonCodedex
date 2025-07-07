arr1 = [10, 20, 30];
arr2 = [20, 30, 40, 50];

const transformArray = (arr1, arr2) => { 
    let result = [];  
    arr2.forEach(num => {
        if (!arr1.includes(num)) { 
            result.push(num );
        }
    });
    console.log(result);
}
transformArray(arr1, arr2); // output [40, 60]


arr3 = [1, 2, 3, 4];
arr4 = [3, 4, 5, 6];


