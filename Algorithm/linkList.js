class LinkedList {
    constructor (){
        this.head = null // this is first elelment of list
        this.tail = null // this is last element of list
    }

    append(value) {
        const newNode = {value:value, next: null } 

        // if the tail is empty
        if(this.tail) {
            this.tail.next = newNode
        }
        this.tail = newNode

        // if head is empty
        if(!this.head) {
            this.head = newNode
        }
    }

    /**
     * always prepend at first
     *  
     * */

    prepend(value) {
        const newNode = {value:value, next: this.head } 
        
        this.head = newNode
        if(!this.tail)
        this.tail= newNode
    }
    toArray() {
        const elements = []

        let curNode = this.head
        while (curNode){
            elements.push(curNode)
            curNode = curNode.next
        }

        return elements
    }

    delete(value) {
        if(!this.head)
         return 

        while (this.head && this.head.value === value){
            this.head=this.head.next;
        } 

        let curNode = this.head
        while (curNode.next){
            if(curNode.next.value === value){
                curNode.next = curNode.next.next
            }
            else{
            curNode = curNode.next
            }
        }

        //if delete last node
        if (this.tail.value === value)
        this.tail = curNode
    }

    find (value) {
        if(!this.head)
        return null
        let curNode = this.head
        while (curNode){
            if(curNode.value === value){
                return curNode
            }
            curNode = curNode.next
        }
        return null 
    }


    insertAfter (value, afterValue) {
        const existingNode = this.find(afterValue)
       
            if(existingNode){
                const newNode = {value: value, next: existingNode.next}
                existingNode.next = newNode
                if(existingNode.value === this.tail.value)
                this.tail = newNode
            }
        }  
      


    insertAt (value, beforeValue) {
        const existingNode = this.find(beforeValue)
        if(existingNode){
            const newNode = {value: value, next: existingNode}

            if(this.head.value === value)
            this.head = newNode 
        }
        
    }
  

}

const linkedList1 = new LinkedList()
linkedList1.append("pankaj")
linkedList1.append("seema")
linkedList1.append("akshara")
linkedList1.append("Ishaan")
linkedList1.prepend ("Dimble")
linkedList1.prepend ("Pune")


console.log(linkedList1.toArray())
linkedList1.delete ("Pune")
console.log(linkedList1.toArray())
linkedList1.delete ("Ishaan")
console.log(linkedList1.toArray())
linkedList1.append("Ishaan1")
console.log(linkedList1.toArray())
console.log(linkedList1.find("seema"))
console.log(linkedList1.find("Pune"))
linkedList1.insertAfter ("shara","Ishaan1")

console.log(linkedList1.toArray())
linkedList1.append("Ishaan2")
console.log(linkedList1.toArray())
linkedList1.insertBefore ("Vishal","pankaj")
console.log(linkedList1.toArray())