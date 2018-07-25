var binaryTree = function() {
	this.root = null;
};

var treeNode = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};

binaryTree.prototype.insert = function(value) {
	var node = new treeNode(value);
	var current = this.root;

	if (!this.root) {
		this.root = node;
		return;
	}

	while (current) {
		if (value < current.value) {
			if (current.left == null) {
				current.left = node;
				break;
			}
			current = current.left;
		} else if (value > current.value) {
			if (current.right == null) {
				current.right = node;
				break;
			}
			current = current.right;
		}
	}
};

binaryTree.prototype.minValue = function() {
	var current = this.root;

	if (!this.root) {
		return null;
	}

	if (!this.root.left) {
		return root.value;
	}

	var min = current.value;
	while (current) {
		if (min > current.value) {
			min = current.value;
		}

		if (current.left == null) {
			return min;
		}

		current = current.left;
	}
};

binaryTree.prototype.maxValue = function() {
	var current = this.root;

	if (!this.root) {
		return null;
	}

	if (!this.root.right) {
		return root.value;
	}

	var max = current.value;
	while (current) {
		if (max < current.value) {
			max = current.value;
		}

		if (current.right == null) {
			return max;
		}
		current = current.right;
	}
};
var print = function(node) {
	if (node) {
		print(node.left);
		print(node.right);
		console.log(node.value);
	}
};
var bt = new binaryTree();
bt.insert(40);
bt.insert(25);
bt.insert(25);
bt.insert(10);
bt.insert(32);
bt.insert(78);


