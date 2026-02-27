import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

interface ScheduleItem {
  time: string;
  activity: string;
  detail: string;
  icon: string;
}

interface PriceItem {
  name: string;
  unit: string;
  adultPrice: number;
  childPrice: number;
  adultQty: number;
  childQty: number;
}

interface NoticeGroup {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-travel-plan',
  imports: [DecimalPipe],
  templateUrl: './travel-plan.html',
  styleUrl: './travel-plan.css',
})
export class TravelPlan {
  tripInfo = {
    destination: '黄山风景区',
    duration: '2天1晚',
    adults: 4,
    children: 2,
    childAge: '6岁以上',
    transport: '自驾',
  };

  day1Schedule: ScheduleItem[] = [
    { time: '06:00', activity: '出发', detail: '自驾前往黄山风景区，建议提前规划路线，避开高峰时段', icon: '🚗' },
    { time: '10:00', activity: '抵达汤口镇', detail: '到达黄山脚下汤口镇，办理酒店入住，稍作休整', icon: '🏨' },
    { time: '11:00', activity: '午餐', detail: '在汤口镇品尝当地徽菜，推荐毛豆腐、臭鳜鱼等特色美食', icon: '🍜' },
    { time: '12:30', activity: '换乘中心出发', detail: '前往黄山南大门换乘中心，乘坐景区大巴至云谷寺', icon: '🚌' },
    { time: '13:00', activity: '云谷索道上山', detail: '乘坐云谷索道上山，沿途欣赏山景', icon: '🚡' },
    { time: '13:30', activity: '游览始信峰', detail: '观赏黑虎松、连理松、龙爪松等名松，远眺石笋矼', icon: '🌲' },
    { time: '15:00', activity: '北海景区', detail: '游览梦笔生花、猴子观海等经典景点', icon: '⛰️' },
    { time: '16:30', activity: '入住山顶酒店', detail: '前往西海饭店或北海宾馆办理入住', icon: '🏠' },
    { time: '17:30', activity: '光明顶观日落', detail: '前往光明顶观赏黄山日落，拍摄壮丽晚霞', icon: '🌅' },
    { time: '19:00', activity: '晚餐及休息', detail: '在酒店用晚餐，早些休息为第二天看日出做准备', icon: '🌙' },
  ];

  day2Schedule: ScheduleItem[] = [
    { time: '05:00', activity: '光明顶观日出', detail: '早起前往光明顶或丹霞峰观赏黄山日出', icon: '🌄' },
    { time: '06:30', activity: '早餐', detail: '返回酒店享用早餐，收拾行李退房', icon: '☕' },
    { time: '07:30', activity: '西海大峡谷', detail: '游览西海大峡谷，欣赏绝美的峡谷风光（约2-3小时）', icon: '🏞️' },
    { time: '10:30', activity: '鳌鱼峰-百步云梯', detail: '经鳌鱼峰、百步云梯前往莲花峰方向', icon: '🧗' },
    { time: '11:30', activity: '迎客松', detail: '到达玉屏楼，观赏标志性景点迎客松，合影留念', icon: '📸' },
    { time: '12:30', activity: '玉屏索道下山', detail: '乘坐玉屏索道下山至慈光阁', icon: '🚡' },
    { time: '13:00', activity: '午餐', detail: '在汤口镇用午餐，品尝黄山烧饼等特产', icon: '🍜' },
    { time: '14:30', activity: '宏村（可选）', detail: '如时间充裕，可前往宏村古村落游览（车程约30分钟）', icon: '🏘️' },
    { time: '17:00', activity: '返程', detail: '自驾返回，注意行车安全', icon: '🚗' },
  ];

  priceList: PriceItem[] = [
    { name: '黄山门票（旺季）', unit: '人', adultPrice: 190, childPrice: 95, adultQty: 4, childQty: 2 },
    { name: '云谷索道（上行）', unit: '人', adultPrice: 80, childPrice: 40, adultQty: 4, childQty: 2 },
    { name: '玉屏索道（下行）', unit: '人', adultPrice: 90, childPrice: 45, adultQty: 4, childQty: 2 },
    { name: '景区交通大巴（往返）', unit: '人', adultPrice: 38, childPrice: 19, adultQty: 4, childQty: 2 },
    { name: '山顶住宿（标间）', unit: '间/晚', adultPrice: 1080, childPrice: 0, adultQty: 3, childQty: 0 },
    { name: '山下住宿（标间）', unit: '间/晚', adultPrice: 380, childPrice: 0, adultQty: 3, childQty: 0 },
    { name: '高速过路费（往返预估）', unit: '车', adultPrice: 300, childPrice: 0, adultQty: 1, childQty: 0 },
    { name: '油费（往返预估）', unit: '车', adultPrice: 500, childPrice: 0, adultQty: 1, childQty: 0 },
    { name: '餐饮（预估/人/天）', unit: '人/天', adultPrice: 150, childPrice: 100, adultQty: 4, childQty: 2 },
    { name: '宏村门票（可选）', unit: '人', adultPrice: 104, childPrice: 52, adultQty: 4, childQty: 2 },
  ];

  notices: NoticeGroup[] = [
    {
      title: '出行准备',
      icon: '🎒',
      items: [
        '提前查看天气预报，黄山山顶温度比山下低10-15度，即使夏天也需携带外套',
        '穿着防滑登山鞋，山路多为石阶，雨天湿滑',
        '携带雨衣（非雨伞），山顶风大，雨伞容易被吹翻且不方便行走',
        '准备登山杖，对膝盖有保护作用，特别适合带小朋友使用',
        '携带防晒霜、遮阳帽，高海拔紫外线较强',
        '备好足够的水和高能量零食（如巧克力、牛肉干）',
      ],
    },
    {
      title: '儿童安全',
      icon: '👶',
      items: [
        '6岁以上儿童可以登山，但要注意控制行程节奏，适当休息',
        '危险路段（如百步云梯、一线天）必须牵好孩子的手',
        '不要让孩子攀爬护栏或在悬崖边嬉戏打闹',
        '准备晕车药，景区盘山公路弯道较多',
        '建议给孩子穿颜色鲜艳的衣服，方便辨认',
        '山顶信号可能不好，提前约好集合点和紧急联络方式',
      ],
    },
    {
      title: '自驾注意',
      icon: '🚗',
      items: [
        '导航设定"黄山风景区南大门换乘中心"，自驾车不能直接上山',
        '汤口镇有较多停车场，建议选择酒店自带停车场',
        '山区道路弯多路窄，注意控制车速，转弯鸣笛',
        '旺季期间换乘中心排队较长，建议早到',
        '返程时注意疲劳驾驶，可安排中途休息',
        '检查车辆状况，确保备胎、工具齐全',
      ],
    },
    {
      title: '景区须知',
      icon: '⛰️',
      items: [
        '黄山门票可在官方公众号或携程等平台提前预约购买',
        '旺季（3月-11月）建议提前预订山顶住宿，房间紧张',
        '山上物价较高，矿泉水约10-15元/瓶，建议自带',
        '垃圾请随身带走，景区内严禁吸烟和使用明火',
        '遇到猴子不要挑逗投喂，保管好食物和随身物品',
        '雷雨天气不要前往高处和空旷地带',
      ],
    },
    {
      title: '健康提示',
      icon: '🏥',
      items: [
        '随身携带常用药品：创可贴、跌打药、感冒药、肠胃药',
        '有心脏病、高血压等疾病的人群需量力而行',
        '登山过程中出现身体不适应及时休息或下山',
        '注意防蚊虫叮咬，携带驱蚊液',
        '山上早晚温差大，及时增减衣物防止着凉',
        '建议购买旅游意外险，特别是带小朋友出行',
      ],
    },
    {
      title: '实用贴士',
      icon: '💡',
      items: [
        '手机充满电并携带充电宝，山顶充电不便',
        '建议携带现金，部分山上商店网络信号差',
        '拍照时注意安全，不要为了取景冒险',
        '旺季周末人多，建议避开或选择工作日出行',
        '西海大峡谷和天都峰冬季封闭，注意开放时间',
        '可携带望远镜，方便远眺观赏云海和远山',
      ],
    },
  ];

  getItemTotal(item: PriceItem): number {
    return item.adultPrice * item.adultQty + item.childPrice * item.childQty;
  }

  get totalPrice(): number {
    return this.priceList.reduce((sum, item) => sum + this.getItemTotal(item), 0);
  }

  get requiredTotal(): number {
    return this.priceList
      .filter(item => !item.name.includes('可选'))
      .reduce((sum, item) => sum + this.getItemTotal(item), 0);
  }

  get perPersonAvg(): number {
    return Math.round(this.totalPrice / (this.tripInfo.adults + this.tripInfo.children));
  }
}
