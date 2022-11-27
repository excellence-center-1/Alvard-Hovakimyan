#include<iostream>
int binarySearch(int array[], int start, int end, int key);
int exponentialSearch(int array[], int start, int end, int key);
int main() {
   int n, Key, l;
   std::cout << "Enter number of elements: ";
   std::cin >> n;
   int arr[n];
   std::cout << "Tupe element: " << std::endl;
   for(int i = 0; i< n; i++) {
      std::cin >> arr[i];
   }
   std::cout << "Enter search key to search in the list: ";
   std::cin >> Key;
   if((l = exponentialSearch(arr, 0, n, Key)) >= 0){
      std::cout << "Element found at lation: " << l << std::endl;}
   else{
      std::cout << "Element is not found in the list." << std::endl;
}}
int binarySearch(int array[], int start, int end, int key) {
   if(start <= end) {
      int mid = (start + (end - start) /2);
      if(array[mid] == key){
         return mid;}
      if(array[mid] > key){
         return binarySearch(array, start, mid-1, key);}
         return binarySearch(array, mid+1, end, key);
   }
   return -1;
}

int exponentialSearch(int array[], int start, int end, int key){
   if((end - start) <= 0){
      return -1;}
      int i = 1;
      while(i < (end - start)){
         if(array[i] < key){
            i *= 2;}
         else{
            break;}
   return binarySearch(array, i/2, i, key); 
}
