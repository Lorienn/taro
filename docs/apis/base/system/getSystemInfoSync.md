---
title: Taro.getSystemInfoSync()
sidebar_label: getSystemInfoSync
---

获取系统信息同步接口。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html)

## 类型

```tsx
() => Result
```

## 参数

### Result

注意：**H5** 端不支持 version、statusBarHeight、fontSizeSetting、SDKVersion
小程序可以在微信和企业微信中调用此接口，但是在企业微信中调用此接口时，会额外返回一个 environment 字段（微信中不返回），如此字段值为 wxwork，则表示当前小程序运行在企业微信环境中。

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| SDKVersion | `string` | 是 | 客户端基础库版本 |
| albumAuthorized | `boolean` | 是 | 允许微信使用相册的开关（仅 iOS 有效） |
| benchmarkLevel | `number` | 是 | 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50） |
| bluetoothEnabled | `boolean` | 是 | 蓝牙的系统开关 |
| brand | `string` | 是 | 设备品牌 |
| cameraAuthorized | `boolean` | 是 | 允许微信使用摄像头的开关 |
| enableDebug | `boolean` | 是 | 是否已打开调试。可通过右上角菜单或 Taro.setEnableDebug 打开调试。 |
| fontSizeSetting | `number` | 是 | 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 |
| language | `string` | 是 | 微信设置的语言 |
| locationAuthorized | `boolean` | 是 | 允许微信使用定位的开关 |
| locationEnabled | `boolean` | 是 | 地理位置的系统开关 |
| microphoneAuthorized | `boolean` | 是 | 允许微信使用麦克风的开关 |
| model | `string` | 是 | 设备型号 |
| notificationAlertAuthorized | `boolean` | 是 | 允许微信通知带有提醒的开关（仅 iOS 有效） |
| notificationAuthorized | `boolean` | 是 | 允许微信通知的开关 |
| notificationBadgeAuthorized | `boolean` | 是 | 允许微信通知带有标记的开关（仅 iOS 有效） |
| notificationSoundAuthorized | `boolean` | 是 | 允许微信通知带有声音的开关（仅 iOS 有效） |
| pixelRatio | `number` | 是 | 设备像素比 |
| platform | `string` | 是 | 客户端平台 |
| safeArea | `TaroGeneral.SafeAreaResult` | 是 | 在竖屏正方向下的安全区域 |
| screenHeight | `number` | 是 | 屏幕高度，单位px |
| screenWidth | `number` | 是 | 屏幕宽度，单位px |
| statusBarHeight | `number` | 是 | 状态栏的高度，单位px |
| system | `string` | 是 | 操作系统及版本 |
| theme | "light" or "dark" | 否 | 系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏） |
| version | `string` | 是 | 微信版本号 |
| wifiEnabled | `boolean` | 是 | Wi-Fi 的系统开关 |
| windowHeight | `number` | 是 | 可使用窗口高度，单位px |
| windowWidth | `number` | 是 | 可使用窗口宽度，单位px |
| environment | `string` | 否 | 小程序当前运行环境 |

## 示例代码

```tsx
try {
  const res = Taro.getSystemInfoSync()
  console.log(res.model)
  console.log(res.pixelRatio)
  console.log(res.windowWidth)
  console.log(res.windowHeight)
  console.log(res.language)
  console.log(res.version)
  console.log(res.platform)
} catch (e) {
  // Do something when catch error
}
```
