

// 
// ============================================
//  Node Class
// "The Node class represents a single node in the linked list"
// ============================================

class Node {
    constructor(data) {
        // "The data property is used to store the actual data of the node"
        this.data = data;
        
        // "The next property is a reference to the next node in the list"
        // Initially set to null because new node is not connected yet
        this.next = null;
    }
}

// ============================================
// LinkedList Class
// "The LinkedList class is a representation of the linked list itself"
// ============================================

class LinkedList {
    constructor() {
        // "head property that refers to the first node in the list"
        this.head = null;
        
        //  tail property
        this.tail = null;
        
        // length property
        this.length = 0;
    }

    // =============================================== 
    // METHOD 1: printAll() -
    // "You can print the elements of a linked list by traversing through 
    //  the list and printing the data of each node"
    // ============================================
    
    printAll() {
        // "let current = this.head" - Start from the first node
        let current = this.head;
        
        // "while (current)" - Continue as long as current node exists
        while (current) {
            // "console.log(current.data)" - Print the data
            console.log(current.data);
            
            // "current = current.next" - Move to next node
            current = current.next;
        }
    }

    // ============================================
    // METHOD 2: add(data) 
    // "Adding node to the end of the linked list"
    // "This is also known as Insertion at the tail of the linked list"
    // ============================================
    
    add(data) {
        // "const newNode = newNode(data)" - Create new node
        const newNode = new Node(data);
        
        // "if (!this.head)" - Check if list is empty
        if (!this.head) {
            // "this.head = newNode" - New node becomes head
            this.head = newNode;
            // "this.tail = newNode" - New node also becomes tail
            this.tail = newNode;
        } else {
            // "this.tail.next = newNode" - Link current tail to new node
            this.tail.next = newNode;
            // "this.tail = newNode" - New node becomes tail
            this.tail = newNode;
        }
        // "this.length++" - Increase length counter
        this.length++;
        // "return this" - Allow method chaining
        return this;
    }

    // ============================================
    // METHOD 3: addToTail(data) 
    // "To add node/element at the end of a linked list, we need to traverse 
    //  the list and find the last node"
    // ============================================
    
    addToTail(data) {
        // Create new node with the data
        let newNode = new Node(data);
        
        // "if (this.head === null)" - Check if list is empty
        if (this.head === null) {
            // Empty list - new node becomes head
            this.head = newNode;
            return;
        }
        
        // "let current = this.head" - Start from beginning
        let current = this.head;
        
        // "while (current.next !== null)" - Traverse until last node
        while (current.next !== null) {
            // Move to next node
            current = current.next;
        }
        
        // "current.next = newNode" - Link last node to new node
        current.next = newNode;
    }

    // ============================================
    // METHOD 4: addAtPosition(data, position) 
    // "Adding node at a specific position"
    // ============================================
    
    addAtPosition(data, position) {
        // Create new node
        let newNode = new Node(data);
        
        // "if (position === 1)" - Adding at the beginning
        if (position === 1) {
            // New node points to current head
            newNode.next = this.head;
            // Head becomes new node
            this.head = newNode;
            return;
        }
        
        // "let current = this.head" - Start traversal
        let current = this.head;
        // "let i = 1" - Position counter
        let i = 1;
        
        // "while (i < position - 1 && current)" - Find node before target position
        while (i < position - 1 && current) {
            // Move to next node
            current = current.next;
            // Increment counter
            i++;
        }
        
        // "if (current)" - If position exists
        if (current) {
            // New node points to whatever was at this position
            newNode.next = current.next;
            // Previous node points to new node
            current.next = newNode;
        }
    }

    // ============================================
    // METHOD 5: remove(data)
    // "Removing a specific node"
    // ============================================
    
    remove(data) {
        // "if (!this.head)" - Check if list is empty
        if (!this.head) {
            return null;
        }
        
        // "if (this.head.data === data)" - Removing the head node
        if (this.head.data === data) {
            // Head becomes the next node
            this.head = this.head.next;
            this.length--;
            return this;
        }
        
        // "let current = this.head" - Start traversal
        let current = this.head;
        
        // "while (current.next)" - Search for node to remove
        while (current.next) {
            // "if (current.next.data === data)" - Found the node to remove
            if (current.next.data === data) {
                // Bypass the node to remove
                current.next = current.next.next;
                this.length--;
                return this;
            }
            // Move to next node
            current = current.next;
        }
        return null;
    }

    // ============================================
    // METHOD 6: removeAt(index) 
    // "Removing a node at a Specific Position"
    // ============================================
    
    removeAt(index) {
        // "if (index < 0 || index >= this.length)" - Validate index
        if (index < 0 || index >= this.length) return null;
        
        // "if (index === 0)" - Removing first element
        if (index === 0) {
            // Remove using existing remove method
            return this.remove();
        }
        
        // "let current = this.head" - Start traversal
        let current = this.head;
        
        // "for (let i = 0; i < index - 1; i++)" - Find node before target
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        // "current.next = current.next.next" - Bypass the target node
        current.next = current.next.next;
        this.length--;
        return this;
    }
}

// ============================================
// "In the below example, we implement adding nodes at beginning, 
//  at end and at a specific position"
// ============================================

const list = new LinkedList();

// Add elements to the linkedlist
list.add("node1");
list.add("node2");
list.add("node3");
list.add("node4");

console.log("Initial List:");
list.printAll();
// Output: node1 node2 node3 node4

console.log("List after adding nodex at position 2");
list.addAtPosition("nodex", 2);
list.printAll();
// Output: node1 nodex node2 node3 node4

console.log("List after adding nodey to tail");
list.addToTail("nodey");
list.printAll();
// Output: node1 nodex node2 node3 node4 nodey

// ============================================
// REMOVAL EXAMPLE FROM YOUR TEXTBOOK (Page 156)
// ============================================

console.log("List after removing node2");
list.remove("node2");
list.printAll();
// Output: node1 nodex node3 node4 nodey

console.log("List after removing node at index 2");
list.removeAt(2);
list.printAll();
// Output: node1 nodex node4 nodey