#include <climits>
#include<iostream>
using namespace std;
int miniDist(int distance[], bool Tset[]){
    int minimum=INT_MAX,ind;
    for(int i=0;i<6;i++){
        if(Tset[i]==false && distance[i]<=minimum){
            minimum=distance[i];
            ind=i;
        }
    }
    return ind;
}
void DijkstraAlgo(int graph[6][6],int src){
    int distance[6];                            
    bool Tset[6];
    for(int i = 0; i<6; i++){
        distance[i] = INT_MAX;
        Tset[i] = false;    
    }
    distance[src] = 0;            
    for(int i = 0; i<6; i++){
        int m=miniDist(distance,Tset); 
        Tset[m]=true;
        for(int j = 0; j<6; j++){
            if(!Tset[j] && graph[m][j] && distance[m]!=INT_MAX && distance[m]+graph[m][j]<distance[j])
                distance[j]=distance[m]+graph[m][j];
        }
    }
    cout<<"Vertex          Distance from source vertex"<<endl;
    for(int i = 0; i<6; i++){ 
        char str=65+i; 
        cout<<"  "<<str<<"\t\t\t"<<distance[i]<<endl;
    }
}
int main()
{
    int graph[6][6]={
        {0, 1, 2, 0, 0, 0},
        {1, 0, 0, 5, 1, 0},
        {2, 0, 0, 2, 3, 0},
        {0, 5, 2, 0, 2, 2},
        {0, 1, 3, 2, 0, 1},
        {0, 0, 0, 2, 1, 0}};
    DijkstraAlgo(graph,0);
    return 0;                           
}
