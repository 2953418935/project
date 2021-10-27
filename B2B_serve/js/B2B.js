$(function() {

	/* 地图 */

	// 全国省份列表
	var dataMap = [{
			"name": "新疆",
			"color": "#62C7FC",
			"num": "3"
		},
		{
			"name": "西藏",
			"color": "#62C7FC",
			"num": "1"
		},
		{
			"name": "上海",
			"color": "#62C7FC",
			"num": "6"
		},
		{
			"name": "吉林",
			"color": "#62C7FC",
			"num": "1"
		},
		{
			"name": "辽宁",
			"color": "#62C7FC",
			"num": "8"
		},
		{
			"name": "广西",
			"color": "#62C7FC",
			"num": "4"
		},

		{
			"name": "青海",
			"color": "#FCCB34",
			"num": "1"
		},
		{
			"name": "天津",
			"color": "#FCCB34",
			"num": "2"
		},
		{
			"name": "山东",
			"color": "#FCCB34",
			"num": "7"
		},
		{
			"name": "云南",
			"color": "#FCCB34",
			"num": "15"
		},
		{
			"name": "台湾",
			"color": "#FCCB34"
		},
		{
			"name": "湖北",
			"color": "#FCCB34",
			"num": "11"
		},
		{
			"name": "陕西",
			"color": "#FCCB34",
			"num": "4"
		},
		{
			"name": "内蒙古",
			"color": "#63C982",
			"num": "3"
		},
		{
			"name": "海南",
			"color": "#63C982",
			"num": "3"
		},
		{
			"name": "北京",
			"color": "#63C982",
			"num": "7"
		},
		{
			"name": "河南",
			"color": "#63C982",
			"num": "4"
		},
		{
			"name": "安徽",
			"color": "#63C982",
			"num": "2"
		},
		{
			"name": "江西",
			"color": "#63C982",
			"num": "4"
		},
		{
			"name": "广东",
			"color": "#63C982",
			"num": "17"
		},
		{
			"name": "甘肃",
			"color": "#F67D7E",
			"num": "1"
		},
		{
			"name": "四川",
			"color": "#F67D7E",
			"num": "5"
		},
		{
			"name": "重庆",
			"color": "#F67D7E",
			"num": "1"
		},
		{
			"name": "福建",
			"color": "#F67D7E",
			"num": "4"
		},
		{
			"name": "江苏",
			"color": "#F67D7E",
			"num": "4"
		},
		{
			"name": "黑龙江",
			"color": "#F67D7E",
			"num": "3"
		},
		{
			"name": "河北",
			"color": "#A599FD",
			"num": "1"
		},
		{
			"name": "山西",
			"color": "#A599FD",
			"num": "8"
		},
		{
			"name": "宁夏",
			"color": "#A599FD",
			"num": "1"
		},
		{
			"name": "浙江",
			"color": "#A599FD",
			"num": "3"
		},
		{
			"name": "湖南",
			"color": "#A599FD",
			"num": "5"
		},
		{
			"name": "贵州",
			"color": "#A599FD",
			"num": "6"
		}
	]
	// 绘制图表，准备数据
	var option = {
		tooltip: {
			formatter: function(params) {
				console.log(params)
				if (params.data.num) {
					var info = '<p style="font-size:18px">' + params.name +
						'</p><p style="font-size:14px">仓：' + params.data.num + '个 (更多仓建设中)</p>'
					return info;
				} else {
					var info = '<p style="font-size:18px">' + params.name +
						'</p><p style="font-size:14px">(更多仓建设中)</p>'
					return info;
				}

			},
			borderColor: "red",
			borderWidth: 1,
			backgroundColor: "#fff", //提示标签背景颜色
			textStyle: {
				color: "#444"
			} //提示标签字体颜色
		},
		series: [{
			name: '中国',
			type: 'map',
			mapType: 'china',
			selectedMode: 'multiple',
			label: {
				normal: {
					show: true, //显示省份标签
					textStyle: {
						color: "#666666"
					} //省份标签字体颜色
				},
				emphasis: {
					show: true, //对应的鼠标悬浮效果
					textStyle: {
						color: "#fff"
					}
				}
			},
			itemStyle: {
				normal: {
					borderWidth: 1, //区域边框宽度
					borderColor: '#F2F2F2', //区域边框颜色
					areaColor: "#FFFFFF", //区域颜色
				},
				emphasis: {
					borderWidth: .5,
					borderColor: '#F2F2F2',
					areaColor: "#62C7FC",
				}
			},
			data: dataMap
		}]
	};
	//初始化echarts实例
	var myChart = echarts.init(document.getElementById('container'));
	//使用制定的配置项和数据显示图表
	myChart.setOption(option);


	/* 专业的服务团队tab标签 */
	$(".section-9>ul>li,.section-9 .item3-left p").mouseover(function() {
		var $idnex = $(this).index()
		$(this).addClass("active").siblings().removeClass("active")
		$(this).parent().next().children().eq($idnex).addClass("active").siblings().removeClass(
			"active")
	})


	/* 众多服务客户部分 */
	$.getJSON("../json/logoImg.json", function(data) {
		$.each(data, function(i, k) {
			$.each(k.B2B, function(i, v) {
				var $liObj = $("<li></li>")
				var $imgBg = $("<div class='imgBg'><span>" + v.name +
					"</span></div>")
				var $logo = $("<div class='logo'></div>")
				var $logoImg = $("<img src=" + v.img + " />")
				$(".section-10 ul").append($liObj)
				$liObj.append($imgBg)
				$liObj.append($logo)
				$logo.append($logoImg)
				if (i < 8) {
					var $aObj = $("<a href='#'></a>")
					$liObj.append($aObj)
				}

			})
		})
	})



})
