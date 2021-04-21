Promise.resolve({ name: "winty" });
Promise.reject({ name: "winty" });
// 等价于
new Promise((resolve) => resolve({ name: "winty" }));
new Promise((resolve, reject) => reject({ name: "winty" }));
