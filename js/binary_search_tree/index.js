class Node {
    left = null
    right = null

    constructor (val) {
        this.value = val
    }
}

export class BinarySearchTree {
    constructor () {
      this.root = null 
    }

    insert (data, node=this.root) {

        if ( this.root === null ) {
            this.root = new Node(data)
            
        }
        else {
            this.insertNode(this.root, new Node(data))
        }

    }

    insertNode(node, newNode) {
        if(newNode.value < node.value) {
            if(node.left === null) {
                node.left = newNode
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
        else {
        
            if(node.right === null) {
                node.right = newNode
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    search(data, node=this.root) {
        if (this.root === null) {
            return null
        }
        else if (node.value === data) {
            return node
        }
        else if(data < node.value) {
            return this.search(data, node.left)
        }
        else {
            return this.search(data, node.right)
        }
    }

    findMin (node=this.root) {
        let current = node
        while(current.left !== null) {
            current = current.left
        }
        return current
    }
    
    remove (root, data) {
        if(root === null) {
            return root
        }
        
        if(data < root.value) {
            root.left = this.remove(root.left, data)
        }
        else if(data > root.value) {
            root.right = this.remove(root.right, data)
        }

        else {
            //root has just one child
            if(root.left === null) {
                let temp = root.right
                root = null
                return temp
            }
            else if (root.right === null) {
                let temp = root.left
                root = null
                return temp
            }
            let temp = this.findMin(root.right)
            root.value = temp.value
            root.right = this.remove(root.right, temp.value)
        }

        return root
    }
}
