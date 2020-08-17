(function () {

    var mychar = echarts.init(document.querySelector('.pie'))

    var option = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [{
            name: '面积模式',
            type: 'pie',
            radius: ['10%', '80%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
                fontSize: 10
            },
            labelLine: {
                length: 8,
                length2: 10
            },
            data: [{
                    value: 20,
                    name: '云南'
                },
                {
                    value: 26,
                    name: '北京'
                },
                {
                    value: 24,
                    name: '山东'
                },
                {
                    value: 25,
                    name: '河北'
                },
                {
                    value: 20,
                    name: '江苏'
                },
                {
                    value: 25,
                    name: '浙江'
                },
                {
                    value: 30,
                    name: '四川'
                },
                {
                    value: 42,
                    name: '湖北'
                }
            ]
        }]
    };
    mychar.setOption(option);
    window.addEventListener("resize", function () {
        mychar.resize();
    });
})();
(function () {
    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        },
    }
    var myChart = echarts.init(document.querySelector(".bar"));
    var option = {
        // 颜色
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'rgba(0, 240, 255, 0.7)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'blue' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'item',
            // 轴触发提示才有效
            // axisPointer: {
            //     // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
            //     type: 'shadow'
            // }
        },
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            left: '0%',
            right: '4%',
            bottom: '3%',
            top: '4%',
            // 是否包含文本
            containLabel: true,
            show: true,
            // borderColor: 'rgba(0, 240, 255, .9)'
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['上海', '广州', '北京', '深圳', '合肥', "", "......",
                "", '杭州', '厦门', '济南', '成都', '重庆'
            ],
            // 刻度设置
            axisTick: {
                // true意思：图形在刻度中间
                // false意思：图形在刻度之间
                alignWithLabel: false
            },
            // nameTextStyle. backgroundColor = 'transparent'
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        }],
        // 控制y轴
        yAxis: [{
            // 使用类目，必须有data属性
            type: 'value',
            // 使用 data 中的数据设为刻度文字
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            // 刻度设置
            axisTick: {
                // 不显示刻度
                show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',

                },
                // show: false
            }
        }],
        // 控制x轴
        series: [{
            // 图表数据名称
            name: '用户统计',
            // 图表类型
            type: 'bar',
            // 柱子宽度
            barWidth: '60%',
            // 数据
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
        }]
    };

    // 3. 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    // 2. 指定配置和数据
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }

        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                // 折线修饰为圆滑
                smooth: true,
            }, {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                smooth: true,
            }

        ]
    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
    // 切换
    $('.sales').on('click', '.caption a', function () {
        // 样式
        $(this).addClass('active').siblings().removeClass('active')
        // currData 当前对应的数据  
        // this.dataset.type 标签上的data-type属性值，对应data中的属性                  
        var currData = data[this.dataset.type]
        // 修改图表1的数据
        option.series[0].data = currData[0]
        // 修改图表2的数据                  
        option.series[1].data = currData[1]
        // 重新设置数据  让图标重新渲染                  
        index = $(this).index()
        // console.log(index);
        myChart.setOption(option)

    })
    var as = $(".sales .caption a");
    var index = 0;
    var timer = setInterval(function () {
        // index++;
        if (index >= 4) index = 0;
        console.log(index);
        as.eq(index).click();
    }, 5000);
    // 鼠标经过sales，关闭定时器，离开开启定时器
    $(".sales").hover(
        function () {
            clearInterval(timer);
        },
        function () {
            clearInterval(timer);
            timer = setInterval(function () {
                // index++;
                if (index >= 4) index = 0;
                as.eq(index).click();
            }, 5000);
        }
    );
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
(function () {
    var date = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8]
    ]
    // var as = document.querySelectorAll('.filter a');
    var ss = $('.filter a')
    ss.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        var index = $(this).index()
        $('.order .item h4').eq(0).html(date[index][1])
        $('.order .item h4').eq(1).html(date[index][0])

    })
    var ind = 0
    setInterval(function () {
        ss.eq(ind).click()
        ind++;
        if (ind == ss.length) {
            ind = 0
        }
    }, 3000)
})();
(function () {
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置
    var dataBJ = [
        [55, 100, 56, 5, 45, 61, 51]
    ];

    var option = {
        tooltip: {
            show: true,
            // trigger: 'item',
            // 控制提示框组件的显示位置
            position: ["60%", "10%"]
        },
        radar: {
            radius: '60%',
            center: ['50%', '50%'],

            indicator: [{
                    name: "机场",
                    max: 100
                },

                {
                    name: "商场",
                    max: 100
                },
                {
                    name: "火车站",
                    max: 100
                },
                {
                    name: "汽车站",
                    max: 100
                },
                {
                    name: "地铁",
                    max: 100
                }
            ],
            shape: "circle",
            splitNumber: 3,
            name: {
                // 修饰雷达图文本颜色
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [{

            name: "北京",
            type: "radar",
            // 填充区域的线条颜色
            lineStyle: {
                normal: {
                    color: "#fff",
                    width: 1,
                    opacity: 0.5
                }
            },
            data: [
                [90, 19, 56, 11, 34]
            ],
            // 设置图形标记 （拐点）
            symbol: "circle",
            // 这个是设置小圆点大小
            symbolSize: 5,
            // 设置小圆点颜色
            itemStyle: {
                color: "#fff"
            },
            // 让小圆点显示数据
            label: {
                show: true,
                fontSize: 10
            },
            // 修饰我们区域填充的背景颜色
            areaStyle: {
                color: "rgba(238, 197, 102, 0.6)"
            }

        }]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });

})();
// 销售模块 饼形图 半圆形 设置方式
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    // 2. 指定数据和配置
    var option = {
        series: [{
            name: "销售进度",
            type: "pie",
            radius: ['130%', '150%'],
            center: ['50%', '75%'],
            //是否启用防止标签重叠策略
            // avoidLabelOverlap: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            hoverOffset: 0,
            // 起始角度，支持范围[0, 360]
            startAngle: 180,
            data: [{
                value: 100,
                itemStyle: {
                    // 颜色渐变#00c9e0->#005fc1
                    color: new echarts.graphic.LinearGradient(
                        // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "#00c9e0"
                            }, // 0 起始颜色
                            {
                                offset: 1,
                                color: "#005fc1"
                            } // 1 结束颜色
                        ]
                    )
                }
            }, {
                value: 100,
                itemStyle:
                // 颜色渐变#00c9e0->#005fc1
                {
                    color: '#12274d'
                }

            }, {
                value: 200,
                itemStyle: {
                    color: 'transparent'
                }
            }]
        }]
    };
    // 3. 把数据和配置给实例对象
    myChart.setOption(option);
})();
(function () {
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                {
                    name: '可爱多',
                    num: '9,086',
                    flag: true
                },
                {
                    name: '娃哈哈',
                    num: '8,341',
                    flag: true
                },
                {
                    name: '喜之郎',
                    num: '7,407',
                    flag: false
                },
                {
                    name: '八喜',
                    num: '6,080',
                    flag: false
                },
                {
                    name: '小洋人',
                    num: '6,724',
                    flag: false
                },
                {
                    name: '好多鱼',
                    num: '2,170',
                    flag: true
                },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [{
                    name: '可爱多',
                    num: '3,457',
                    flag: false
                },
                {
                    name: '娃哈哈',
                    num: '2,124',
                    flag: true
                },
                {
                    name: '喜之郎',
                    num: '8,907',
                    flag: false
                },
                {
                    name: '八喜',
                    num: '6,080',
                    flag: true
                },
                {
                    name: '小洋人',
                    num: '1,724',
                    flag: false
                },
                {
                    name: '好多鱼',
                    num: '1,170',
                    flag: false
                },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [{
                    name: '可爱多',
                    num: '2,345',
                    flag: true
                },
                {
                    name: '娃哈哈',
                    num: '7,109',
                    flag: true
                },
                {
                    name: '喜之郎',
                    num: '3,701',
                    flag: false
                },
                {
                    name: '八喜',
                    num: '6,080',
                    flag: false
                },
                {
                    name: '小洋人',
                    num: '2,724',
                    flag: false
                },
                {
                    name: '好多鱼',
                    num: '2,998',
                    flag: true
                },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [{
                    name: '可爱多',
                    num: '2,156',
                    flag: false
                },
                {
                    name: '娃哈哈',
                    num: '2,456',
                    flag: true
                },
                {
                    name: '喜之郎',
                    num: '9,737',
                    flag: true
                },
                {
                    name: '八喜',
                    num: '2,080',
                    flag: true
                },
                {
                    name: '小洋人',
                    num: '8,724',
                    flag: true
                },
                {
                    name: '好多鱼',
                    num: '1,770',
                    flag: false
                },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [{
                    name: '可爱多',
                    num: '9,567',
                    flag: true
                },
                {
                    name: '娃哈哈',
                    num: '2,345',
                    flag: false
                },
                {
                    name: '喜之郎',
                    num: '9,037',
                    flag: false
                },
                {
                    name: '八喜',
                    num: '1,080',
                    flag: true
                },
                {
                    name: '小洋人',
                    num: '4,724',
                    flag: false
                },
                {
                    name: '好多鱼',
                    num: '9,999',
                    flag: true
                },
            ]
        }
    ]
    var str = ''
    $.each(hotData, function (i, e) {
        str += `<li><span>${e.city}</span>
        <span>${e.sales}<s class="${
            e.flag ? 'icon-up' : 'icon-down'
            }"></s></span>
      </li>`

    })
    $(".sup").html(str);
    $(".sup").on('mouseenter', 'li', function () {
        // clearInterval(timer)
        index = $(this).index()
        getLi($(this))
    })

    var index = 0;
    $('.sup li').eq(index).mouseenter()

    var timer = setInterval(function () {
        if (index == 5) {
            index = 0
        }
        index++;
        getLi($('.sup li').eq(index))
    }, 2000)

    $('.province .sup').hover(function () {
            clearInterval(timer)
        },
        function () {
            clearInterval(timer)
            timer = setInterval(function () {
                if (index == 5) {
                    index = 0
                }
                // console.log(index);
                // $('.sup li').eq(index).mouseenter()
                getLi($('.sup li').eq(index))
                index++;
            }, 2000)
            // return false
        })

    function getLi(that) {
        that.addClass('active').siblings().removeClass('active')
        var index = that.index()
        var brand = hotData[index].brands

        var brandstr = ''
        $.each(brand, function (index, items) {
            brandstr += `<li>
            <span>${items.name}</span>
            <span>${items.num} <s class="${items.flag ? 'icon-up' : 'icon-down'}">
            </s>
            </span>
            </li>`
        })
        $(".sub").html(brandstr);
    }
})();