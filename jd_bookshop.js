# IOS Loon Task&Cookies配置 
# TG通知频道 (https://t.me/jdfruit)
# 使用方法:打开APP，顶部的配置 -> 脚本 -> 订阅脚本- > 点击右上角+号 -> 添加url链接

hostname = me-api.jd.com, draw.jdfcloud.com, jdjoy.jd.com, account.huami.com

# 京东资产变动通知
cron "2 9 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_bean_change.js, tag=京东资产变动通知

# 领京豆额外奖励
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_bean_home.js, tag=领京豆额外奖励

# 省钱大赢家之翻翻乐
cron "20 * * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_big_winner.js,tag=省钱大赢家之翻翻乐

# 东东超市兑换奖品
cron "0 0 0 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_blueCoin.js,tag=东东超市兑换奖品

# 口袋书店
cron "1 8,12,18 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_bookshop.js,tag=口袋书店

# 京东汽车
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_car.js, tag=京东汽车

# 京东汽车兑换
cron "0 0 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_car_exchange.js, tag=京东汽车兑换

# 京东手机狂欢城
cron "0 0-18/6 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_carnivalcity.js, tag=京东手机狂欢城

# 签到领现金
cron "2 0-23/4 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_cash.js,tag=签到领现金

# 京喜财富岛
cron "5 8,13,19 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_cfd.js,tag=京喜财富岛

# 摇京豆
cron "5 0,23 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_club_lottery.js,tag=摇京豆

# crazyJoy任务
cron "10 9 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_crazy_joy.js,tag=crazyJoy任务

# 监控crazyJoy分红
cron "10 12 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_crazy_joy_bonus.js,tag=监控crazyJoy分红

# crazyJoy挂机
cron "10 1,12 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_crazy_joy_coin.js,tag=crazyJoy挂机

# 天天提鹅
cron "10 * * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_daily_egg.js,tag=天天提鹅

# 小鸽有礼-每日抽奖
cron "13 1,22,23 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_daily_lottery.js, tag=每日抽奖

# 京喜工厂
cron "10 * * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_dreamFactory.js,tag=京喜工厂

# 获取多账号京东Cookie
http-request https:\/\/me-api\.jd\.com\/user_new\/info\/GetJDUserInfoUnion script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/JD_extra_cookie.js, tag=获取多账号京东Cookie

# 京东家庭号
cron "1 12,23 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_family.js,tag=京东家庭号

# 东东农场
cron "5 6-18/6 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_fruit.js,tag=东东农场

# 获取互助码
cron "20 13 * * 6" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_get_share_code.js, tag=获取互助码

# 金榜创造营
cron "13 1,22 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_gold_creator.js, tag=金榜创造营

# 东东健康社区
cron "13 1,6,22 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_health.js, tag=东东健康社区

# 东东健康社区收集能量收集
cron "5-45/20 * * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_health_collect.js, tag=东东健康社区收集能量

# 东东工厂
cron "10 * * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_jdfactory.js,tag=东东工厂

# 京东赚赚
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_jdzz.js,tag=京东赚赚

# 领金贴
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_jin_tie.js,tag=领金贴

# 宠汪汪
cron "15 0-23/2 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_joy.js,tag=京东宠汪汪

# 宠汪汪🐕喂食
cron "15 0-23/1 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_joy_feedPets.js,tag=京东宠汪汪喂食

# 宠汪汪强制为别人助力
http-request ^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力

# 宠汪汪积分兑换奖品
cron "0 0-16/8 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_joy_reward.js,tag=宠汪汪积分兑换奖品

# 宠汪汪赛跑
cron "15 10 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_joy_run.js, tag=宠汪汪邀请助力与赛跑助力

# 宠汪汪助力更新Token
http-response ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/addUser\?code= script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_joy_run.js, requires-body=true, timeout=10, tag=宠汪汪助力更新Token

# 宠汪汪助力获取Token
http-request ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/user\/detail\?openId= script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_joy_run.js, timeout=3600, tag=宠汪汪助力获取Token

# 宠汪汪偷好友积分与狗粮
cron "10 0-21/3 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_joy_steal.js,tag=宠汪汪偷好友积分与狗粮

# 跳跳乐瓜分京豆
cron "1 0,11,21 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_jump.js, tag=跳跳乐瓜分京豆

# 京喜领88元红包
cron "4 10 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_jxlhb.js,tag=京喜领88元红包

# 惊喜牧场
cron "20 0-23/3 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_jxmc.js,tag=惊喜牧场

# 京喜农场
cron "0 9,12,18 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_jxnc.js,tag=京喜农场

# 京东快递签到
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_kd.js, tag=京东快递签到

# 京东直播
cron "10-20/5 12 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_live.js,tag=京东直播

# 超级直播间红包雨
cron "0,30 0-23/1 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_live_redrain.js,tag=超级直播间红包雨

# 幸运大转盘
cron "4 10 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_market_lottery.js,tag=幸运大转盘

# 新潮品牌狂欢
cron "4 10 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_mcxhd.js,tag=新潮品牌狂欢

# 5G超级盲盒
cron "0 0,1-23/3 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_mohe.js,tag=5G超级盲盒

# 京东摇钱树
cron "3 0-23/2 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_moneyTree.js,tag=京东摇钱树

# 京东秒秒币
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_ms.js,tag=京东秒秒币

# 点点券
cron "10 0,20 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_necklace.js,tag=点点券

# 女装盲盒抽京豆
cron "35 1,23 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_nzmh.js,tag=女装盲盒

# 东东萌宠
cron "15 6-18/6 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_pet.js,tag=东东萌宠

# 金融养猪
cron "12 0-23/6 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_pigPet.js, tag=京东金融养猪猪

# 京东种豆得豆
cron "1 7-21/2 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_plantBean.js,tag=京东种豆得豆

# 京东保价
cron "0 2 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_price.js,tag=京东保价

# 京东全民开红包
cron "1 1,2,23 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_redPacket.js, tag=京东全民开红包

# 闪购盲盒
cron "20 8 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_sgmh.js, tag=闪购盲盒

# 进店领豆
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_shop.js,tag=进店领豆

# 东东小窝
cron "16 22 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_small_home.js, tag=东东小窝

# ✈️天天加速
cron "8 0-23/3 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_speed.js,tag=京东天天加速

# 京东极速版红包
cron "20 0,22 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_speed_redpocke.js,tag=京东极速版红包

# 京东极速版
cron "0 7 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_speed_sign.js,tag=京东极速版

# 明星小店
cron "0 1,21 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_star_shop.js,tag=明星小店

# 东东超市
cron "11 * * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_superMarket.js,tag=东东超市

# 赚京豆
cron "10 0,7,23 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_syj.js, tag=赚京豆

# 取关京东店铺和商品
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_unsubscribe.js,tag=取关京东店铺商品

# 家电星推官
cron "0 0 0 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_xtg.js,tag=家电星推官

# 家电星推官好友互助
cron "0 0 0 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_xtg_help.js,tag=家电星推官好友互助

# 618动物联萌
cron "33 0,6-23/2 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_zoo.js, tag=618动物联萌

# 618动物联萌收集金币
cron "0-59/30 * * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/jd_zooCollect.js,tag=618动物联萌收集金币

# 小米运动
cron "15 17 * * *" script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/backUp/xmSports.js, tag=小米运动

# 小米运动获取Token
http-response ^https:\/\/account\.huami\.com\/v2\/client\/login script-path=https://raw.githubusercontent.com/kloseli/jdscripts/main/backUp/xmSports.js, requires-body=true, timeout=3600, tag=小米运动获取Token
