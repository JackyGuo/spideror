var postsData = [
  {
    title: '你好，郭家齐',
    url: 'http://www.jackyguo.com'
  },
  {
    title: '今天天气不错啊',
    url: 'http://www.google.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});