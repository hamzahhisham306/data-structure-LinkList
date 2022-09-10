"use strict";


const LinkenList=require('../ll');

describe('Testing Linked List',()=>{
    it('Testing LinkedList' ,()=>{
        const ll = new LinkenList();
        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkenList);
        expect(ll.head).toBeNull();
    })
});

describe('Insert ot the begining of the Linked list',()=>{
    it('Add to an Empty LL ',()=>{
        const ll =new LinkenList();
        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    });
    it('Add to a non-empty LL',()=>{
        const ll=new LinkenList();
        ll.insert('a');
        ll.insert('b');
        // ll.insert('c');
       expect(ll.head.value).toEqual('b');
       expect(ll.head.next.value).toEqual('a');
       expect(ll.head.next.next).toBeNull();

    })
})

describe('Append to the end of the linked list',()=>{
    it('Append to an empty Linked list',()=>{
        const ll=new LinkenList();
        ll.append('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    });
    it('Append to non-empty LL',()=>{
        const ll=new LinkenList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
        
    })
})
describe('insert At postion', ()=>{
    it('insert At pos 1',()=>{
        const ll=new LinkenList();
        ll.insert(30);
        ll.insert(10);
        ll.insertAtPos(1,20);
        expect(ll.head.next.value).toEqual(20);
        expect(ll.head.next.next.value).toEqual(30);
        expect(ll.head.next.next.next).toBeNull();
    });
});

describe('Delete First Element',()=>{
    it('Delete first element',()=>{
        const ll=new LinkenList();
        ll.insert(20);
        ll.insert(10);
        ll.append(30);
        ll.DeleteFirstEl();
        expect(ll.head.value).toEqual(20);
        expect(ll.head.next.value).toEqual(30);
        expect(ll.head.next.next).toBeNull();
    })
});

describe('Delete At middle', ()=>{
    it('Delete any element in middle',()=>{
        const ll=new LinkenList();
        ll.insert(20);
        ll.insert(10);
        ll.append(30);
        ll.append(40);
        ll.DeltetMiddle(30);
        expect(ll.head.next.value).toEqual(20);
        expect(ll.head.next.next.value).toEqual(40);
        expect(ll.head.next.next.next).toBeNull();
    })
})

