let BinarySearchTree = function() {
	this.root = null;
};

let treeNode = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
	let node = new treeNode(value);
	let current = this.root;
	if (!this.root) {
		this.root = node;
		return;
	}
	while (current) {
		if (value < current.value) {
			if (current.left === null) {
				current.left = node;
				break;
			} else {
				current = current.left;
			}
		} else if (value > current.value) {
			if (current.right === null) {
				current.right = node;
				break;
			} else {
				current = current.right;
			}
		} else {
			break;
		}
	}
};

BinarySearchTree.prototype.traverse = function() {
	function inorder(node) {
		if (node) {
			if (node.left !== null) {
				inorder(node.left);
			}

			console.log(node.value);

			if (node.right !== null) {
				inorder(node.right);
			}
		}
	}

	inorder(this.root);
};
let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(18);
bst.insert(16);
bst.insert(29);
console.log(bst.traverse());
