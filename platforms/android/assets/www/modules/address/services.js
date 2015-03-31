field.factory('AddressDatas', function() {
  return [
          {id:'1',pid:'0',title:"上海稲盛电子科技股份有限公司",hasChild:"true"},
          {id:'2',pid:'0',title:"青岛时代黄河",hasChild:"true"},
          {id:'3',pid:'0',title:"哈尔滨美禾公司",hasChild:"true"},
          {id:'4',pid:'0',title:"思达美禾公司",hasChild:"true"},
          {id:'5',pid:'0',title:"上海磐谷电子科技有限公司",hasChild:"true"},
          //---上海稲盛电子科技股份有限公司--//
          {id:'6',pid:'1',title:"人事行政部门",hasChild:"true"},
          {id:'7',pid:'1',title:"销售部",hasChild:"true"},
          {id:'8',pid:'1',title:"总经理办公室",hasChild:"true"},
          {id:'9',pid:'1',title:"技术部",hasChild:"true"},
          {id:'10',pid:'1',title:"财务部",hasChild:"true"},
          //-----人事行政部门--//
          {id:'11',pid:'6',title:"杨青",hasChild:"false"},
          //-----人事行政部门--//
          
          //-----销售部--//
          {id:'12',pid:'7',title:"李明",hasChild:"false"},
          //-----销售部--//
          
          //-----总经理办公室--//
          {id:'13',pid:'8',title:"翟毓民",hasChild:"false"},
          {id:'14',pid:'8',title:"翟君",hasChild:"false"},
          //-----总经理办公室--//

          //-----总经理办公室--//
          {id:'16',pid:'9',title:"移动事业部",hasChild:"true"},
          {id:'17',pid:'9',title:"软件事业部",hasChild:"ture"},
          {id:'18',pid:'9',title:"莫宾江",hasChild:"false"},
          //-----总经理办公室--//

          //-----移动事业部--//
          {id:'19',pid:'16',title:"闫酉龙",hasChild:"false"},
          {id:'20',pid:'16',title:"孟令超",hasChild:"false"},
          {id:'21',pid:'16',title:"陈海龙",hasChild:"false"},
          {id:'22',pid:'16',title:"王光华",hasChild:"false"},
          {id:'23',pid:'16',title:"王斌",hasChild:"false"},
          {id:'24',pid:'16',title:"胡世斌",hasChild:"false"},
          {id:'25',pid:'16',title:"赵麒祥",hasChild:"false"},
          {id:'26',pid:'16',title:"顾胜学",hasChild:"false"},
          {id:'27',pid:'16',title:"李哲",hasChild:"false"},
          {id:'28',pid:'16',title:"王劲夫",hasChild:"false"},
          {id:'29',pid:'16',title:"刘德红",hasChild:"false"},
          {id:'30',pid:'16',title:"倪瑞",hasChild:"false"},
          {id:'31',pid:'16',title:"白群伟",hasChild:"false"},
          //-----移动事业部--//
          
          //-----软件事业部--//
          {id:'32',pid:'17',title:"杜首举",hasChild:"false"},
          {id:'33',pid:'17',title:"孙亮",hasChild:"false"},
          {id:'34',pid:'17',title:"蔡喜明",hasChild:"false"},
          {id:'35',pid:'17',title:"高秀红",hasChild:"false"},
          {id:'36',pid:'17',title:"周辉",hasChild:"false"},
          {id:'37',pid:'17',title:"李啊兵",hasChild:"false"},
          //-----软件事业部--//
          
          //-----财务部--//
          {id:'38',pid:'10',title:"耿慧颖",hasChild:"false"},
          {id:'39',pid:'10',title:"施敏",hasChild:"false"},
          //-----财务部--//
          //---上海稲盛电子科技股份有限公司--//          
          ];
})
;
