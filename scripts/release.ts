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
      markdown: {
        title: '我是一个工具人',
        text: `- Feat: 哈哈哈哈哈`,
      },
    },
  });
  console.log('notify success', response.data);
})();