// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    red: [], //推荐数据数组
    dataList: [
      {
        aid: 1,
        pic: '../../images/home/summer1.jpeg',
        //  attribute :'林深见鹿',
        // duration:20,
        title: "Spring",
        desc: " &nbsp;&nbsp;决策疲劳就是持续地做决定让人的生理和心理产生的不舒适感。简单地说，一个人做的决定越多，损失的意志力、自律和自控力也就越多。\n&nbsp;&nbsp;在决策疲劳期大脑会停止对远景的长期关注，而开始关注即刻的回报，大脑就会开始寻找捷径。\n &nbsp;&nbsp;例如，在婚礼采购的最后阶段，你感到非常疲惫，于是同意了销售的所有推荐；网购了一天对比了好几个平台，最后随便选了一个既不是最好也不是最便宜的。\n &nbsp;&nbsp;这些行为看似没有来由，但它们都有可能是由“决策疲劳”导致的：当你已经连续地做了太多的选择，就会在精神上疲惫不堪，而不愿去权衡利弊，导致决策质量的下降"
      },
      {
        aid: 2,
        pic: '../../images/home/summer2.jpeg',
        attribute: 'ninininini',
        duration: 20,
        title: "summer",
        desc: "&nbsp;&nbsp;根据《美国传统词典》解释，黑羊是指群体中最不受待见、最不受尊重的成员，被认为是群体的一种耻辱。\n &nbsp;&nbsp;这个比喻的基础是，黑羊的市场价值远不如白羊，因为黑羊毛相对于白羊毛更不容易染成其他颜色。在16世纪，黑色被认为是邪恶之色。到18世纪，这个习语普遍被视作是群体中的另类。而在心理学上，“黑羊效应”，通常用来指群体成员评价同群体中不受欢迎的成员的倾向——同群体成员对群体中不受欢迎的个体的攻击更甚于群体外成员的同类攻击.一群好人欺负一个好人，其他好人却坐视不管的诡谲现象被称为“黑羊效应”。\n&nbsp;&nbsp;生活中，大家或多或少都曾目睹、听闻甚至涉入过排挤或欺凌他人的事件。如果对这些事件进行深入分析，就会发现其起因竟是如此荒唐——只是因为一些无关痛痒的小事，比如“他很胖”“他成绩很差”“他性格过于内向”“他太引人注目了”等，就引发众人对某一个人发起攻击。而不想成为加害者和受害者的人，宁愿选择冷眼旁观，也不愿向有能力改善这种现象的人反映，直到最后受害者被迫离开，荒唐的闹剧才得以画上句号。"
      },
      {
        aid: 3,
        pic: '../../images/home/summer3.jpeg',
        attribute: 'ninininini',
        duration: 20,
        title: "fall",
        desc: "&nbsp;&nbsp;费曼学习法的灵感源于诺贝尔物理奖获得者理查德•费曼（Richard Feynman），运用费曼技巧,你只需花上20分钟就能深入理解知识点,而且记忆深刻,难以遗忘。知识有两种类型，我们绝大多数人关注的都是错误的那类。\n  &nbsp;&nbsp;第一类知识注重了解某个事物的名称。第二类知识注重了解某件事物。这可不是一回事儿。著名的诺贝尔物理学家理查德·费曼（Richard Feynman）能够理解这二者间的差别，这也是他成功最重要的原因之一。事实上，他创造了一种学习方法，确保他会比别人对事物了解的更透彻。\n &nbsp;&nbsp;费曼学习法可以简化为四个单词：Concept （概念）、Teach （教给别人）、Review （评价）、Simplify （简化）。"
      },
      {
        aid: 4,
        pic: '../../images/home/weding1.jpg',
        attribute: 'ninininini',
        duration: 20,
        title: "weding",
        desc: "&nbsp;&nbsp;垃圾人定律，来自于某明星对于网络媒体人的回应，形容本身存在很多负面垃圾缠身，需要找个地方倾倒垃圾的人。世界上存在很多负面垃圾缠身的人，他们需要找个地方倾倒，有时候被人刚好碰上了，垃圾就往人身上丢。"
      }
      ,
      {
        aid:5,
        pic: '../../images/home/winter1.jpeg',
        attribute: 'ninininini',
        duration: 20,
        title: "winter",
        desc: "&nbsp;&nbsp;重商主义是资产阶级最初的经济学说。\n &nbsp;&nbsp;出现在西欧封建制度向资本主义制度过渡时期（资本原始积累时期），反映这个时期商业资本的利益和要求。它对资本主义生产方式进行了最初的理论考察，是15—18世纪初受到普遍推崇的一种经济哲学。\n&nbsp;&nbsp;重商主义又分为早期的重商主义和晚期的重商主义两种。历史上对国际贸易的研究和理论在最早的时候几乎都是出自重商学派的著作。早期重商主义以“货币差额论”为中心，代表人物英国的威廉·斯塔福。晚期重商主义以“贸易差额论”为中心，代表人物英国的托马斯·孟(Thomas Mun) 。"
      },
      {
        aid: 6,
        pic: '../../images/home/lonly.jpg',
        attribute: 'ninininini',
        duration: 20,
        title: "lonly",
        desc: "&nbsp;&nbsp;兜底条款是指作为一项立法技术，它将所有其他条款没有包括的、或者难以包括的、或者目前预测不到的，都包括在这个条款中。"
      }
    ],
  },


  getCurrentVideo(videoId) {
    let that = this;
    for (var index in that.data.dataList){
      if (that.data.dataList[index].aid === parseInt(videoId)) {
            that.setData({
              detail: that.data.dataList[index]
            })
      }
    }
    },

  getRecommend() {
    let that = this;
    wx.request({
      url: 'https://www.bilibili.com/index/catalogy/5-3day.json',
      success(res) {
        // console.log(res, '<-res->');
        if (res.statusCode === 200) {
          let list = res.data.hot.list
          that.setData({
            red: list
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);

  },

})