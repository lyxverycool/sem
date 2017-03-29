(function(window, angular, undefined) {
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.cores = [{
      title: '权限管理',
      img: 'images/u104.png'
    }, {
      title: '公司组织架构搭建',
      img: 'images/u108.png'
    }, {
      title: '员工管理',
      img: 'images/u112.png'
    }, {
      title: '全国各大城市社保方案',
      img: 'images/u116.png'
    }, {
      title: '薪资方案管理',
      img: 'images/u120.png'
    }, {
      title: '薪资核算',
      img: 'images/u124.png'
    }, {
      title: '工资报表',
      img: 'images/u128.png'
    }, {
      title: '考勤管理',
      img: 'images/u560.png'
    }];
    $scope.lists = [{
      title: '权限管理',
      img: 'images/1.png',
      title2s: [{
        line: '权限分配'
      }],
      title3s: [{
        line: '灵活快捷设置权限，多角色账户自由切换'
      }, {
        line: '提供角色模板，规则简单易操作'
      }]
    }, {
      title: '组织架构',
      img: 'images/2.png',
      title2s: [{
        line: '公司信息'
      }, {
        line: '行政架构'
      }, {
        line: '成本中心'
      }],
      title3s: [{
        line: '公司组织架构快速搭建'
      }, {
        line: '总公司分公司多部门组织架构清晰展现，配置灵活'
      }]
    }, {
      title: '员工管理',
      img: 'images/3.png',
      title2s: [{
        line: '职位管理'
      }, {
        line: '试用到期管理'
      }, {
        line: '合同到期管理'
      }, {
        line: '员工异动管理'
      }],
      title3s: [{
        line: '员工信息随时完善，批量导入方便快捷'
      }, {
        line: '晋升/调动/入离职准时提醒，人员异动管理尽在掌中'
      }]
    }, {
      title: '社保方案',
      img: 'images/4.png',
      title3s: [{
        line: '支持不同城市的社保公积金搭配使用'
      }, {
        line: '自主定义自己的社保公积金方案'
      }, {
        line: '年度基数调整自动调整'
      }, {
        line: '社保方案量身定，政策数据实时掌握'
      }, ]
    }, {
      title: '薪资方案管理',
      img: 'images/5.png',
      title3s: [{
        line: '按需定制薪酬方案'
      }, {
        line: '一个企业可多个薪资方案'
      }, {
        line: '薪酬方案随心配，薪酬核算无死角'
      }]
    }, {
      title: '薪资核算',
      img: 'images/6.png',
      title2s: [{
        line: '多次发放'
      }, {
        line: '分批发放'
      }, {
        line: '工资单查看'
      }],
      title3s: [{
        line: '薪酬核算准确高效，银行导盘自动生成'
      }, {
        line: '多批次发放功能全，工资单发布只在一瞬间'
      }]
    }, {
      title: '工资报表',
      img: 'images/7.png',
      title3s: [{
        line: '各类数据分析报表按需定义'
      }, {
        line: '多维度员工信息实时统计分析'
      }, {
        line: '数据报表一键生成，统计分析一目了然'
      }]
    }, {
      title: '考勤管理',
      img: 'images/8.png',
      title3s: [{
        line: '支持多种考勤方案，加班、请假、工时规则全'
      }, {
        line: '自动统计考勤数据，智能同步工资表'
      }, {
        line: '考勤规则方案灵活配置，自动同步计算更省心'
      }]
    }];
    $scope.works = [{
      title1: '工厂员工排班复杂',
      title2: '考勤数据复杂',
      title3: '提供智能化考勤系统',
      title4: '考勤数据自动导入',
      img: 'images/u104.png'
    }, {
      title1: '异地员工考勤数据搜集复杂',
      title2: '多地员工各地社保政策不一',
      title3: '提供智能化考勤系统',
      title4: '考勤数据自动导入',
      title5: '实现智能化排班',
      img: 'images/u108.png'
    }, {
      title1: '不同工时制度',
      title2: '薪资计算多元化',
      title3: '支持多种考勤方案',
      title4: '加班 请假 工时规则设置全',
      title5: '自动统计考勤数据',
      title6: '智能同步工资表',
      img: 'images/u112.png'
    }, {
      title1: '绩效奖金多元化 薪资计算复杂',
      title2: '组织架构复杂 成本分摊耗精力',
      title6: '提供全面的绩效奖金方案',
      img: 'images/u116.png'
    }];
    $scope.goLogin = function() {
      window.open("http://www.cnbexpress.com/#/regist/");
    };
    $scope.goRegist = function() {
      window.open("http://www.cnbexpress.com/#/login/");
    };
    $scope.goTrial = function() {
      window.open("http://www.cnbexpress.com/#/demo/");
    };
    $scope.goTalent = function() {
      window.open("http://www.talentspotgroup.com/cn/");
    };
    $scope.videoPlay1 = function() {
      var MV = document.getElementById("myVideo1");
      MV.play();
      MV.controls = true;
      $(".sem-containers-1 .btn1").hide();
    };
    $scope.videoPlay2 = function() {
      var MV = document.getElementById("myVideo2");
      MV.play();
      MV.controls = true;
      $(".sem-containers-1 .btn2").hide();
    };
    $scope.firstScroll = function() {
      $("html,body").animate({
        scrollTop: $(".sem-container-4").offset().top + "px"
      }, {
        duration: 500,
        easing: "swing"
      });
    };
    $scope.secondScroll = function() {
      $("html,body").animate({
        scrollTop: $(".sem-container-6").offset().top + "px"
      }, {
        duration: 500,
        easing: "swing"
      });
    };
    $scope.coreClick = function(e) {
      $(".sem-container-4 .bottom").eq(e).show().siblings(".sem-container-4 .bottom").hide();
      $(".sem-container-4 .bottom").eq(e).find(".bottom-left").animate({
        "top": "45px",
        "opacity": "1"
      }, "slow");
      $(".sem-container-4 .bottom").eq(e).find(".bottom-right").animate({
        "right": "0px",
        "opacity": "1"
      }, "slow");
      $(".sem-container-4 .bottom").eq(e).siblings().find(".bottom-left").css({
        "top": "0px",
        "opacity": "0"
      });
      $(".sem-container-4 .bottom").eq(e).siblings().find(".bottom-right").css({
        "right": "-45px",
        "opacity": "0"
      });
      $(".sem-container-4 .center .text").eq(e).css("border-bottom", "3px solid #fff").siblings(".sem-container-4 .center .text").css("border", "0");
    };
    $scope.hov = function(e) {
      $(".sem-container-5 .list-1").eq(e).hide().stop().animate({
        "opacity": "0"
      });
      $(".sem-container-5 .list-2").eq(e).show().stop().animate({
        "top": "0px"
      }, 500);
    };
    $scope.leave = function(e) {
      $(".sem-container-5 .list-2").eq(e).stop().animate({
        "top": "300px"
      }, 200, function() {
        $(".sem-container-5 .list-1").eq(e).show().stop().animate({
          "opacity": "1"
        });
      });
    };
    $scope.partners = [];
    for (var i = 0; i < 5; i++) {
      var partnerArray = [];
      for (var j = 0; j < 8; j++) {
        partnerArray.push(j);
      }
      $scope.partners.push(partnerArray);
    }
    $scope.getImagePosition = function(row, column) {
      var xUnit = 875 / 7;
      var yUnit = 482.5 / 7;
      var x = 0,
        y = 0;
      if (column > 6 - row) {
        column = (column - 6 + row) - 1;
        row += 1;
      } else {
        column += row;
      }
      x = -Math.ceil(column * xUnit) - column;
      y = -Math.floor(row * yUnit) - row;
      return {
        'background-position': x + 'px ' + y + 'px'
      };
    }
  });
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: 10000,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });
})(window, window.angular)