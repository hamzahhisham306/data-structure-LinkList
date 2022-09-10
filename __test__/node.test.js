"use strict";


const Node = require('../node');

describe("Testing Node Class", () => {
    it('Testing create a new node', () => {

        const val = 'Wlla';
        const node = new Node(val);

        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual('Wlla'); // Check the value
        expect(node.next).toBeNull(); // next property it should be null


    })


});