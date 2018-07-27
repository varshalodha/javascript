var node = function(val) {
	this.val = val;
	this.next = null;
};

var LinkedList = function() {};

LinkedList.prototype.push = function(val) {
	var newNode = new node(val);
	var current = this.head;

	if (!this.head) {
		this.head = newNode;
		return;
	}

	while (current.next) {
		current = current.next;
	}

	current.next = newNode;
};

LinkedList.prototype.remove = function(val) {
	if (this.head.val == val) {
		this.head = this.head.next;
		return;
	} else {
		var current = this.head;
		var prev = this.head;
		while (current) {
			if (current.val == val) {
				prev.next = current.next;
				break;
			}
			prev = current;
			current = current.next;
		}
	}
};

var reverse = function(ll) {
	if (!ll.head || !ll.head.next) {
		return ll;
	}

	var nodes = [];
	var current = ll.head;
	var node = current;
	var reverseLL = new LinkedList();

	while (current) {
		nodes.push(current);
		current = current.next;
	}

	for (let i = nodes.length - 1; i >= 0; i--) {
		reverseLL.push(nodes[i].val);
	}

	console.log(reverseLL);
};

var ll = new LinkedList();
ll.push(12);
ll.push(1);
ll.push(4);
//ll.remove(10);
//console.log(ll);
reverse(ll);

/**********Double Linked List **************/

var node = function(val) {
	this.val = val;
	this.next = null;
	this.prev = null;
};

var DoubleLinkedList = function() {};

DoubleLinkedList.prototype.push = function(val) {
	var newNode = new node(val);
	var current = this.head;

	if (!this.head) {
		this.head = newNode;
		return;
	}

	while (current.next) {
		if (current != this.head) current.prev = current;
		current = current.next;
	}

	newNode.prev = current;
	current.next = newNode;
};

// var dll = new DoubleLinkedList();
// ll.push(12);
// ll.push(1);
// ll.push(4);
