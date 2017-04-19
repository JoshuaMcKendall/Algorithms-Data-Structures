// List Data Structure

'strict mode';

var List = (function() {
	
	function List() {

		this.listSize = 0;
		this.pos = 0;
		this.dataStore = [];

		this.clear = this.clear.bind(this);
		this.find = this.find.bind(this);
		this.insert = this.insert.bind(this);
		this.append = this.append.bind(this);
		this.remove = this.remove.bind(this);
		this.front = this.front.bind(this);
		this.end = this.end.bind(this);
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.currPos = currPos;
		this.moveTo = moveTo;
		this.getElement = getElement;
		this.length = this.length.bind(this);
		this.contains = this.contains.bind(this);
		this.toString = this.toString.bind(this);
	}

	List.prototype.clear = function() {
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = this.pos = 0;
	};

	List.prototype.find = function(element) {
		for (var i = 0; i < this.dataStore.length; ++i) {
			if (this.dataStore[i] == element) {
				return i;
			}
		}
		return -1;
	};

	List.prototype.insert = function(element, after) {
		var insertPos = this.find(after);
		if (insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	};

	List.prototype.append = function(element) {
		this.dataStore[this.listSize++] = element;
	};

	List.prototype.remove = function(element) {
		var foundAt = this.find(element);
		if(foundAt > -1) {
			this.dataStore.splice(foundAt, 1);
			--this.listSize;
			return true;
		}
		return false;
	};

	List.prototype.length = function() {
		return this.listSize;
	};

	List.prototype.toString = function() {
		return this.dataStore;
	};

	List.prototype.contains = function(element) {
		for(var = 0; i < this.dataStore.length; ++i) {
			if(this.dataStore[i] == element) {
				return true;
			}
		}
		return false;
	};

	List.prototype.front = function() {
		this.pos = 0;
	};

	List.prototype.end = function() {
		this.pos = this.listSize - 1;
	};

	List.prototype.prev = function() {
		if(this.pos > 0) {
			--this.pos;
		}
	};

	List.prototype.next = function() {
		if(this.pos < this.listSize - 1) {
			++this.pos;
		}
	};

	List.prototype.currPos = function() {
		return this.pos;
	};
	
	List.prototype.moveTo = function(position) {
		this.pos = position;
	};

	List.prototype.getElement = function() {
		return this.dataStore[this.pos];
	};

	return List;

})();

var test = new List();

test.append("Joshua");
test.append("Michael");