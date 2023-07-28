import {BinarySearchTree} from '../../binary_search_tree/index.js'

class PriorityQueue {
    constructor () {
        this.queue = new BinarySearchTree()
    }
    enqueue ({data, priority}) {
        this.queue.insert({val=priority, key=data});
    }
}
