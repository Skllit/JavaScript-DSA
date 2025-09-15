let arr=[1,2,3,4,5,6,7,8];
target=9

for(l=0,r=arr.length-1;l<r;){
    sum=arr[l]+arr[r];
    if(sum===target){
        console.log(arr[l],arr[r])
        l++;
        r--;
        
    }else if(sum<target){
        l++;
    }
    else{
        r--;

    }
}
