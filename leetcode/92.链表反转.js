// 第一种方法  这个东西有点绕呀   不好写 不好想
var reverseBetween = function (head, left, right) {
  // 边界条件
  if (left == right) {
    return head;
  }

  // head之前增加 -1
  var zero = new ListNode(-1);
  zero.next = head; // [-1,1,2,3,4,5]

  // left
  let pre = zero; // [-1,1,2,3,4,5]
  for (var i = 0; i < left - 1; i++) {
    pre = pre.next; //[1,2,3,4,5]
  }

  // right
  let cur = pre.next; //[2,3,4,5]
  for (var j = 0; j < right - left; j++) {
    let next = cur.next;
    cur.next = next.next; //互换位置 第一次 3 2 4 5互换 第二次1 4 3 2 5
    next.next = pre.next;
    pre.next = next;
  }
  return zero.next;
};

// 这个题目 暂时 就写这一种解决方法吧
// 后续补上
