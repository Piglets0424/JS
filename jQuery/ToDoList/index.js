$(function () {
  // 加载页面
  load();

  // 添加todolist
  $('#title').on('keydown', function (e) {
    if ($(this).val() == '') {
      return;
    } else {
      // 回车键编码值13
      if (e.keyCode === 13) {
        // 读取存储数据
        var data = getData();
        // 追加数据 将新数据添加进数组
        data.push({ title: $(this).val(), done: false });
        // 将数组存储在本地存储
        saveData(data);
        // 页面加载
        load();
        // 将输入空清空
        $(this).val('');
      }
    }
  });

  // 删除 todolist      删除的是存储中的数据 然后从新渲染页面
  $('#todolist,#donelist').on('click', 'a', function () {
    // 获取本地存储
    var data = getData();
    // 修改数据
    //获取索引号
    var index = $(this).attr('index');
    // 从第index开始删除 删除1个
    data.splice(index, 1);
    // 保存到本地存储
    saveData(data);
    // 从新渲染页面
    load();
  });

  // 勾选复选框
  $('#todolist,#donelist').on('click', 'input', function () {
    // 获取本地存储
    var data = getData();
    // 修改数据
    // 通过a获取索引号
    var index = $(this).siblings('a').attr('index');
    // 将done值取反
    data[index].done = !data[index].done;
    // 保存到本地存储
    saveData(data);
    // 从新渲染页面
    load();
  });

  // 先读取本地数据
  function getData() {
    var data = localStorage.getItem('todolist');
    if (data != null) {
      // 本地存储为字符串类型要转换为数组
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  // 存储本地数据
  function saveData(data) {
    localStorage.setItem('todolist', JSON.stringify(data));
  }

  // 渲染加载页面
  function load() {
    var data = getData();
    // 遍历之前先将ol ul清空 否则每调用一次就会渲染一次
    $('#todolist,#donelist').empty();
    // 遍历数据
    $.each(data, function (i, n) {
      if (n.done) {
        $('#donelist').prepend(
          // i 用于删除当前数据
          `<li><input type="checkbox" checked><p>${n.title}</p><a href="javascript:;" index = ${i}></a></li>`
        );
      } else {
        $('#todolist').prepend(
          // i 用于删除当前数据
          `<li><input type="checkbox"><p>${n.title}</p><a href="javascript:;" index = ${i}></a></li>`
        );
      }
    });
    // 事件数量
    $('#todocount').text($('#todolist li').length);
    $('#donecount').text($('#donelist li').length);
  }
});
