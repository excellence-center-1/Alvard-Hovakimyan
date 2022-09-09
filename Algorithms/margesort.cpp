#include <iostream>
using namespace std;
void merge(int *arr, int l, int h, int m){
    int i, j, k, c[50];
    i = l;
    k = l;
    j = m + 1;
    while (i <= m && j <= h){
        if (arr[i] < arr[j]) {
            c[k] = arr[i];
            k++;
            i++;
        }
        else {
            c[k] = arr[j];
            k++;
            j++;
        }
    }
    while (i <= m) {
        c[k] = arr[i];
        k++;
        i++;
    }
    while (j <= h) {
        c[k] = arr[j];
        k++;
        j++;
    }
    for (i = l; i < k; i++){
        arr[i] = c[i];
    }
}
void merge_sort(int *arr, int low, int high)
{
    int m;
    if (low < high){
        m=(low+high)/2;
        merge_sort(arr,low,m);
        merge_sort(arr,m+1,high);
        //merge or conquer sorted arrays
        merge(arr,low,high,m);
    }
}
int main()
{
    int n;
    cout<<"Enter number of  sorted:";
    cin>>n;
    cout<<"Enter "<<n<<" elements to be sorted:";
    int array[n];
    for (int i = 0; i < n; i++) { cin>>array[i];
    }
    merge_sort(array, 0, n-1);
    cout<<"Sorted array are :";
    for (int i = 0; i < n; i++)
    {
        cout<<array[i]<<"\t";
    }
}
