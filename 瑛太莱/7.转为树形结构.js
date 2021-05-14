/**
 * 该方法用于将有父子关系的数组转换成树形结构的数组
 * 接收一个具有父子关系的数组作为参数
 * 返回一个树形结构的数组
 */
function translateDataToTree(data) {
  //没有父节点的数据
  let parents = data.filter(
    (value) => value.parentId == "undefined" || value.parentId == null
  );

  //有父节点的数据
  let children = data.filter(
    (value) => value.parentId !== "undefined" && value.parentId != null
  );

  //定义转换方法的具体实现
  let translator = (parents, children) => {
    //遍历父节点数据
    parents.forEach((parent) => {
      //遍历子节点数据
      children.forEach((current, index) => {
        //此时找到父节点对应的一个子节点
        if (current.parentId === parent.id) {
          //对子节点数据进行深复制，这里只支持部分类型的数据深复制，对深复制不了解的童靴可以先去了解下深复制
          let temp = JSON.parse(JSON.stringify(children));
          //让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
          temp.splice(index, 1);
          //让当前子节点作为唯一的父节点，去递归查找其对应的子节点
          translator([current], temp);
          //把找到子节点放入父节点的children属性中
          typeof parent.children !== "undefined"
            ? parent.children.push(current)
            : (parent.children = [current]);
        }
      });
    });
  };

  //调用转换方法
  translator(parents, children);

  //返回最终的结果
  return parents;
}

// test
var data = [
  { id: 1, name: "1" },

  { id: 2, name: "1-1", parentId: 1 },

  { id: 3, name: "1-1-1", parentId: 2 },

  { id: 4, name: "1-2", parentId: 1 },

  { id: 5, name: "1-2-2", parentId: 4 },

  { id: 6, name: "1-1-1-1", parentId: 3 },

  { id: 7, name: "2" },
];

var res = translateDataToTree(data);
console.log(data);
// [ { id: 1, name: '1', children: [ [Object], [Object] ] },
//   { id: 2, name: '1-1', parentId: 1, children: [ [Object] ] },
//   { id: 3, name: '1-1-1', parentId: 2 },
//   { id: 4, name: '1-2', parentId: 1, children: [ [Object] ] },
//   { id: 5, name: '1-2-2', parentId: 4 },
//   { id: 6, name: '1-1-1-1', parentId: 3 },
//   { id: 7, name: '2' } ]
