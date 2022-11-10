#include<iostream>  
int main (){    
    int arr[6] = { 12,4,3,1,15,45};       
    for(int i=1; i<6; i++){  
        int temp = arr[i];  
        int j= i-1;  
        while(j>=0 && temp <= arr[j]){  
            arr[j+1] = arr[j];   
            j = j-1;  
        }  
        arr[j+1] = temp;  
    }
    std::cout<<"\nSorted list is \n";
    for(int i=0;i<6;i++){  
        std::cout <<arr[i]<<"\t";  
    }  
}
