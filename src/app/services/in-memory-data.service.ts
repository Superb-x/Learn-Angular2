import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 1, name: '亚索', alias:　'疾风剑豪'},
            {id: 2, name: '劫', alias:　'影流之主'},
            {id: 3, name: '伊泽瑞尔', alias:　'探险家'},
            {id: 4, name: '崔丝塔娜', alias:　'麦林炮手'},
            {id: 5, name: '布隆', alias:　'弗雷尔卓德之心'},
            {id: 6, name: '布里茨', alias:　'蒸汽机器人'},
            {id: 7, name: '卢锡安', alias:　'圣枪游侠'},
            {id: 8, name: '提莫', alias:　'迅捷斥候'},
            {id: 9, name: '李青', alias:　'盲僧'},
            {id: 10, name: '赵信', alias:　'德邦总管'},
            {id: 11, name: '盖伦', alias:　'德玛西亚之力'},
            {id: 12, name: '锤石', alias:　'魂锁典狱长'},
            {id: 13, name: '泰达米尔', alias:　'蛮族之王'},
            {id: 14, name: '崔斯特', alias:　'卡牌大师'},
            {id: 15, name: '图奇', alias:　'瘟疫之源'},
            {id: 16, name: '泽拉斯', alias:　'远古巫灵'},
            {id: 17, name: '潘森', alias:　'战争之王'},
            {id: 18, name: '易大师', alias:　'无极剑圣'},
            {id: 19, name: '卡兹克', alias:　'虚空掠夺者'},
            {id: 20, name: '乐芙兰', alias:　'诡术妖姬'},
            ];
        return {heroes};
    }
}