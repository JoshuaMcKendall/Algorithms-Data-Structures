
// Quick Find
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



// Weighted Quick Union
var QuickUnion = (function() {

  var id = [],
      sz = [],
      count;

  function QuickUnion(n) {
    count = n;
    for (var i = 0; i < n; i++) {
      id[i] = i;
    }

    for (var i = 0; i < n; i++) {
      sz[i] = 1;
    }
    console.log(id);
  }

  QuickUnion.prototype.count = function () {
    return count;
  };

  QuickUnion.prototype.connected = function (p, q) {
    return findRoot(p) == findRoot(q);
  };

  QuickUnion.prototype.union = function (p, q) { //1,2
    var pRoot = findRoot(p),
        qRoot = findRoot(q);
    if (pRoot == qRoot) return;

    if (sz[pRoot] < sz[qRoot]) { id[pRoot] = qRoot; sz[qRoot] += sz[pRoot]; }
    else                       { id[qRoot] = pRoot; sz[pRoot] += sz[qRoot]; }
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
