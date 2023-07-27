class Queue {

    constructor(size) {
        this.size = size
        this.queue = [] 
    }
   
    front() {
        if(this.isEmpty()) {
            return -999999
        }
        return this.queue[0]
    }

    rear() {
        if(this.isEmpty()) {
            return -99999
        }
        return this.queue[this.queue.length - 1]
    }

    isEmpty() {
        console.log(this.queue)
        return this.queue.length === 0
    }

    isFull() {
        return this.queue.length === this.size
    }

    size() {
        return this.queue.length
    }

    enqueue(element) {
       if(this.queue.length < this.size) { 
            this.queue.push(element)
           return this.queue.length
       }
        
        return -1
        
    }
    
    dequeue(element) {
        if (this.isEmpty()) {
            return -999999
        }
        return this.queue.shift()
    }
}


let q = new Queue(4)
console.log(q.enqueue(5))

console.log(q.enqueue(25))

console.log(q.enqueue(8))
console.log(q.isFull())
console.log(q.isEmpty())
console.log(q.enqueue(4))

console.log(q.isFull())
console.log(q.isEmpty())
console.log(q.dequeue())

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.isFull())
console.log(q.isEmpty())
