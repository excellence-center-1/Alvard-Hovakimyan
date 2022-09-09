#include <bits/stdc++.h>
using namespace std;
void swap(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
int partition(int arr[], int low, int high){
    int pivot = arr[high]; // pivot
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
void quickSort(int arr[], int low, int high){
    if (low < high) {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}
void print(int arr[], int size){
    int i;
    for (i = 0; i < size; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main(){
    int arr[] = { 10, 7, 8, 9, 1, 5 };
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    cout << "Sorted array: \n";
    print(arr, n);
    return 0;
}
