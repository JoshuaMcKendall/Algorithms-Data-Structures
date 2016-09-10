
var QuickFind = (function() {

  var id = [];

  function QuickFind(n) {
    for (var i = 0; i < n; i++) {
      id[i] = i;
    }
  }

  QuickFind.prototype.connected = function (p, q) {
    return id[p] == id[q];
  };

  QuickFind.prototype.union = function (p, q) {
    var pid = id[p],
        qid = id[q];
        // O(N^2)
    for (var i = 0; i < id.length; i++) {
      if (id[i] == pid) id[i] = qid;
    }
  };

  return QuickFind;
})();




var QuickUnion = (function() {

  var id = [];

  function QuickUnion(n) {
    for (var i = 0; i < n; i++) {
        id[i] = i;
    }
    console.log(id);
  }

  QuickUnion.prototype.connected = function (p, q) {
    return findRoot(p) == findRoot(q);
  };

  QuickUnion.prototype.union = function (p, q) { //1,2
    var pRoot = findRoot(p),
        qRoot = findRoot(q);
    id[pRoot] = qRoot;
    console.log(id);
  };

  function findRoot (root) {
    if(id[root] == root) {
      return id[root];
    } else {
      root = id[id[root]];
      return findRoot(root);
    }
  }

  return QuickUnion;
})();
