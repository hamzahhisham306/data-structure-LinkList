"use strict";
const Node=require('./node');

class LinkedList{
  constructor(){
      this.head=null;
      this.length=0;
      this.current=null;
      this.print=null;
      this.prev=null;
      this.curr=null;
  }
  insert(val){
   const node =new Node(val);
    if(!this.head){ // means ll is empty
      this.head=node;
    }
    else{ // LL not empty
     node.next=this.head;
     this.head=node;
    }
    this.length++;
  }
 append(val){
  const node =new Node(val);
  if(!this.head){
      this.head=node;
  }
  else{
    let currentNode=this.head;
    while(currentNode.next){
      currentNode=currentNode.next
    }
    currentNode.next=node;
  }
  this.length++;
}
  isEmpty(){
    return  this.head==null;
  }
  insertAtPos(pos, element){
    if(pos<0||pos>this.length){
      console.log('Out Of Range Array');
    }
    else{
      const node=new Node(element);
      if(pos==0){
        this.insert(element);
      }
      else if(pos==this.length){
        this.append(element);
      }
      else{
        this.current=this.head;
        for(let i=1;i<pos;i++){
          this.current=this.current.next;
        } 
        node.next=this.current.next;
        this.current.next=node;
        this.length++;  
      }
    }
  }
  printAll(){
    this.print=this.head;
     while(this.print!=null){
      console.log(this.print.value);
       this.print=this.print.next;
     }
    
  }
  DeleteFirstEl(){
    if(this.length==0){
      return;
    }
    else if(this.length==1)
    {
      this.head=null;
      this.length--;
    }
    else{
    this.head=this.head.next;
    this.length--;
  }
}

DeltetMiddle(element){
  if(this.isEmpty()){
    return ;
  }
  else{
this.curr=this.head.next;
this.prev=this.head;
while(this.curr!=null){
  if(this.curr.value==element){
    this.prev.next=this.curr.next;
    this.length--;
    break;
  }    
  else{
    console.log('Not Found')
  }
  this.prev=this.curr;
  this.curr=this.curr.next;

  
}
  }
}
}



module.exports=LinkedList