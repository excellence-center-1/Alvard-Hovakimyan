#include<iostream>
int 
int main(){
    int n = 3;
    int arr1[n][n],arr2[2][2],arr3[n][n];
    for(int i = 0; i<n; i++ ){
        for(int j = 0; j<n; j++){
            std::cout<<"arr1["<<i<<"]["<<j<<"] = ";
            std::cin>>arr1[i][j];
            std::cout<<"arr2["<<i<<"]["<<j<<"] = ";
            std::cin>>arr2[i][j];
        }
    }
    int j = 0;
            for(int i = 0; i<n; i++){
            for(int k = 0; k<n; k++){
            for(int m =0; m< n; m++){
            arr3[i][j] += arr1[k][m] * arr2[m][k];
        }
    i++;
    }
    }
    for(int i = 0; i<n; i++)
    for(int j = 0; j<n; j++)
        std::cout<<"arr3["<<i<<"]["<<j<<"] = "<<arr3[i][j];
}
