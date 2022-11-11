#include<iostream>
class Node{
    public:
    int val;
    Node* next=NULL;
    Node* prav=NULL;
};
class list{
    public:
    int count = 0;
    Node* head=NULL;
    Node* last=NULL;
    void pushfront(int );
    void pushback(int );
    void popfront();
    void popback();
    void insert(int , int );
    void clear();
    Node* find(int );
    void print();
};
void list :: popfront(){
    if (count < 1){
        std::cout << std::endl << "List is empty!!!!!" << std::endl;
    }
    else if(count = 1){
        delete(head);
        head = NULL;
        last = NULL;
        count --;
    }
    else {
        Node* swap;
        swap = head->next;
        delete(head);
        swap->prav = NULL;
        head = swap;
        count --;
    }
}
void list :: pushfront(int valeu){
    if(head == NULL){
        head = new Node();
        head->val = valeu;
    }
    else{
        Node* swap;
        swap = new Node();
        swap->val = valeu;
        swap->next = head;
        head = swap;
        }
        count++;
}
void list :: popback(){
    if(last == NULL or count < 1){
        std::cout<<"empty ?\n Yessssssssssssssss!!!!!!\n ";
    }
    else if(count = 1){
        delete(last);
        last = NULL;
        head = NULL;
        count --;
    }
    else{
        Node* swap;
        swap = last->prav;
        delete(last);
        swap->next = NULL;
        last = swap;
        count --;
    }
}
void list:: pushback(int valeu){
    if(last == NULL){
        last = new Node();
        last->val = valeu;
    }
    else{
        Node* swap;
        swap = new Node();
        swap->prav = last;
        last = swap;
    }
    count++;
} 
void list:: clear(){
    if(count = 0){
        std::cout<<"";
        return;
    }
    else{
        count = 0;
        Node* swap;
        while(head != last){
            swap = last->prav;
            delete last;
            last = swap;
        }
        delete head;
        head = NULL;
        last = NULL;
    }
}
Node* list::find(int index){
    Node* swap = head;
    for(int i = 0; i < index; i++){
        swap = swap->next;
    }
    return swap;
}
void list:: insert(int index, int valeu){
    if((count == 0 & index < 1) or (index > count + 1 )){
        std::cout<<"Eror 40000000000000000...";
        return;
    }
    else if(index == 1){
	pushfront(valeu);
	count++;
    }
    else if(index == count + 1){
	pushback(valeu);
    }
    else{
	Node* swap_last = list::find(index-1);
        Node* swap_right = list::find(index);
        Node* swap = new Node();
        swap_last->next = swap;
        swap_right->prav = swap;
        count++;
    }    
}
void list:: print(){
    Node* swap = head;
    for(int i = 0; i < count; i++){
	    std::cout << swap->val<< " ";
        swap = swap->next;
    }
    std::cout<<std::endl;
}
int main(){
    list first;
    first.popback();
    first.pushfront(55);
    first.pushback(21);
    first.pushback(35);
    first.insert(2, 29);
}
