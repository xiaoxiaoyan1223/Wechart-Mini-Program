Page({
    data:{
        showIcon:true,
        swiperList:[],
        courses:[],
        searchList:null,
        type:'recommend',
        tabs:[
            {name:'推荐',type:'recommend'},
            {name:'路径',type:'path'},
            {name:'实战',type:'project'},
            {name:'活动',type:'activity'}
        ],
        activity:[]
    },
    onLoad(){
        wx.request({
          url: 'https://www.fastmock.site/mock/a4165d7645ae6f40d5570698d581b2b6/weixin/api/getData',
          success:(res)=>{
              const {data:{data}}=res;
              const {swiperList,courses,activity}=data;
            //   console.log(data);
              this.setData({
                  swiperList,
                  courses,
                  activity
              })
          }
        })
    },
    handleClickChange(e){
        const value=e.detail.value;
        let searchList=null;
        if(value){
            searchList=this.data.courses.filter(item=>item.title.indexOf(value)>-1)
        }
        this.setData({showIcon:value?false:true,searchList})
    },
    changeType(e){
        const type=e.currentTarget.dataset.type;
        this.setData({type})
    },
    handleRecommendTap(){
        wx.navigateTo({
          url: '/pages/hot/hot',
        })
    }
})
 