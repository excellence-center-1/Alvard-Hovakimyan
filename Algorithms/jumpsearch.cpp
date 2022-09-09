#include<bits/stdc++.h>
int jump(int arr[], int x, int n);
void quickSort(int arr[], int low, int high);
void swap(int* a, int* b);
int partition(int arr[], int low, int high);
int main(){
	int arr[]={1,22,31, 55, 56, 58,63, 67, 84, 99, 110};
	int n=sizeof(arr)/sizeof(arr[0]);
	int x;
	std::cout<<"tyupe searching number : ";
	std::cin>>x;
	std::cout<<"its a "<<jump(arr, x, n)<<" ;";
}
int jump(int arr[], int x, int n){
	int qayl = sqrt(n);
	int low =0;
	while(arr[qayl] <= x && qayl < n){
		low = qayl;
		qayl += sqrt(n);
		if(qayl > n-1){
			qayl = n;
		}
	}
	for(int i = low; i < qayl; i++){
		if(arr[i] == x){
			return i;
		}
	}
	return -1;
}
void swap(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
int partition(int arr[], int low, int high){
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
void quickSort(int arr[], int low, int high){
    if (low < high) {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}
