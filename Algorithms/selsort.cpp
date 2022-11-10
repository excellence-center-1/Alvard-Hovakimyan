#include <bits/stdc++.h>
#include<iostream>
void poxel(int *a1, int *a2){
	int temp = *a1;
	*a1 = *a2;
	*a2 = temp;
}
void sort(int arr[], int n){
	int i, j, minidx;
	for (i = 0; i < n-1; i++)
	{
		minidx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[minidx])
			minidx = j;

		if(minidx!=i)
			poxel(&arr[minidx], &arr[i]);
	}
}
void tpel(int arr[], int chap){
	int i;
	for (i=0; i < chap; i++)
		std::cout << arr[i] << " ";
    std::cout<<std::endl;
}
int main(){
	int arr[] = {64, 25, 2, 55, 5};
	int n = 5;
	sort(arr, n);
	std::cout << "Sorted array: \n";
	tpel(arr, n);
	return 0;
}
