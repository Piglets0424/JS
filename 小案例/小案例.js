// 数组去重
// var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
// var newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (newArr.indexOf(arr[i]) == -1) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// function unique(arr) {
//   var newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) == -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
// console.log(unique(arr));

// 查找字符串'abcoefoxyozzopp'中o出现的位置及次数
// function fn(str) {
//   var arr = [];
//   for (let i = 0; i < str.length; i = str.indexOf('o', i) + 1) {
//     if (str.indexOf('o', i) != -1) {
//       arr.push(str.indexOf('o', i));
//     } else {
//       break;
//     }
//   }
//   return arr;
// }

// var arr = [];
// function fn() {
//   var index = str.indexOf('o');
//   while (index !== -1) {
//     arr.push(index);
//     index = str.indexOf('o', index + 1);
//   }
//   console.log(arr);
//   return arr;
// }
// var str = 'abcoefoxyozzopp';
// var result = fn(str);
// console.log(result);
// console.log(
//   '字符串' +
//     str +
//     '中o出现的位置依次是' +
//     result +
//     '出现的次数为' +
//     result.length
// );

// 判断字符串'abcoefoxyozzopp'中出现次数最多的字符，并统计次数
// var str = 'abcoefoxyozzopp';
// var obj = {};
// function count(str) {
//   for (let i = 0; i < str.length; i++) {
//     var letter = str.charAt(i);
//     if (obj[letter]) {
//       obj[letter]++;
//     } else {
//       obj[letter] = 1;
//     }
//   }
//   // 对象遍历
//   var max = 0;
//   var key = '';
//   for (const k in obj) {
//     if (obj[k] > max) {
//       max = obj[k];
//       key = k;
//     }
//   }
//   return [key, max];
// }
// console.log(count(str));



// 替换字符串中的字符 .replace('被替换的字符','替换为的字符') 只替换第一个字符
// 如果想全部替换采用循环 借助.indeexOf判断字符还是否存在


// 字符串转化成数组 .split('分隔符') 分隔符取决于字符串用什么隔开的
// toUpperCase() 转换为大写
// toLowerCase() 转换为小写 