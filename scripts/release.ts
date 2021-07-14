import * as axios from 'axios';

(async() => {
  const response = await axios.default({
    url: process.env.DING_WEBHOOK,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    data: {
      msgtype: 'markdown',
      title: "哈哈哈哈我是标题",
      "text": {
        "content":"Release:我就是我, @XXX 是不一样的烟火"
      },
    },
  });
  console.log('notify success', response.data);
})();