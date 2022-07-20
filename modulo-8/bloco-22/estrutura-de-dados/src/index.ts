class LinkedListNode {
    constructor (
    public value: any,
    public next: LinkedListNode | null = null
    ) {}
}

class LinkedList {
  constructor(public head?: LinkedListNode) {}

  public add(value: number) {
    if (!this.head) {
      this.head = new LinkedListNode(value);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new LinkedListNode(value);
    }
  }
}

const myList = new LinkedList();

    myList.add(1);
    myList.add(2);
    myList.add(3);
    myList.add(4);

// console.log(myList);

class stack {
  constructor(
    public items: any[] = [],
    public length: number = 0
  ) { }

  public push(item: any){
    this.items.push(item);
    this.length++;
  }

  public pop(){
    if (this.length === 0) {
      return undefined;
    }
    this.length--;
    return this.items.pop();
  }

  public peek(){
    if (this.length === 0) {
      return console.log(undefined);
    }
    return console.log(this.items[this.length - 1]);
  }

  public isEmpty(){
    return this.length === 0;
  }

  public print(){
    console.log(this.items);
  }
}

const myStack = new stack();

// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.print()

// myStack.pop();
// myStack.print()


class Queue {
  constructor(
    public items: any[] = []
  ) { }

  public enqueue(item: any){
    this.items.push(item);
  }

  public dequeue(){
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  }

  public peek(){
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[0];
  }

  public isEmpty(){
    return this.items.length === 0;
  }	

  public print(){
    console.log(this.items);
  }

}

const myQueue = new Queue();

    // myQueue.enqueue(1);
    // myQueue.enqueue(2);
    // myQueue.enqueue(3);
    // myQueue.print();

    // myQueue.dequeue();
    // myQueue.print();

    // myQueue.peek();
    // myQueue.print();

    // myQueue.isEmpty();
    // myQueue.print();