// 第一种方法
var maxDepth = function (root) {
  // 新建变量记录层级
  var deep = 0;
  // 深度优先遍历 dfs函数
  var dfs = function (n, l) {
    if (!n) {
      return;
    }
    // 先访问当前节点
    // console.log(n.val,l)
    // 拿到层级比较大的结果
    //判断一下 叶子节点才计算最大深度 节省性能
    if (!n.left && !n.right) {
      deep = Math.max(deep, l);
    }
    //访问左节点
    dfs(n.left, l + 1);
    //访问右节点
    dfs(n.right, l + 1);
  };
  // 1 表示传入的默认层级 初始化 层级是 1
  dfs(root, 1); // 调用根节点
  return deep;
};

// 第二种方法
var maxDepth = function (root) {
  // 递归更简单的版本 一句解决问题
  // 注意 使用 root.left root.right
  return root == null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
