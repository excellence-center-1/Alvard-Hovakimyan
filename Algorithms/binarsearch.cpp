#include<iostream>
int binarySearch(int arr[], int p, int r, int num);
void swap(int* a, int* b);
int part(int arr[], int low, int high);
void quickSort(int arr[], int low, int high);

int main(void){
   int arr[] = {1, 33, 7, 155, 18, 20, 2, 313, 36, 40};
   int n = sizeof(arr)/ sizeof(arr[0]);
   int num;
   quickSort(arr, 0, n - 1);
   std::cout << "Enter search number : ";
   std::cin >> num;
   int index = binarySearch (arr, 0, n-1, num);
   if(index == -1){
      std::cout<< num <<" is not present in  arr";
   }
   else{
      std::cout<< num <<" is present in index "<< index <<" in arr";
   }
   return 0;
}
void swap(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
void quickSort(int arr[], int low, int high){
    if (low < high) {
        int p = part(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}
int part(int arr[], int low, int high){
    int pivot = arr[high];
    int i
        = (low- 1); 
        for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}
int binarySearch(int arr[], int p, int r, int num){
      int mid = (p + r)/2;
      if (arr[mid] == num){
         return mid ;
      }
      if (arr[mid] > num){
         return binarySearch(arr, p, mid-1, num);
      }
      else {
         return binarySearch(arr, mid+1, r, num);
      }
   
   return -1;
}
