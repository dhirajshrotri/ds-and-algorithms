class Item {
    constructor(val, priority) {
        this.value = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(size) {
        this.queue = []
        this.size = size
    }
    
   sortItems = (a, b) => a.priority > b.priority ? 
        1 : -1

    enqueue (item) {
        this.queue.push(item)
        this.queue.sort(this.sortItems)
    }

    dequeue () {
        return this.queue.shift()
    }

    print() {
        console.log(this.queue)
    }

}

let a = new Item(5, 2)
let b = new Item(4, 7)
let c = new Item(6, 1)

let q = new PriorityQueue(4)
q.enqueue(a)
q.enqueue(b)
q.enqueue(c)

q.print()
