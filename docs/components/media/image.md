---
title: Image
sidebar_label: Image
---

图片。支持 JPG、PNG、SVG、WEBP、GIF 等格式以及云文件ID。

**Note:** 为实现小程序的 `mode` 特性，在 H5 组件中使用一个 `div` 容器来对内部的 `img` 进行展示区域的裁剪，因此请勿使用元素选择器来重置 `img` 的样式！

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="字节跳动小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

## 类型

```tsx
ComponentType<ImageProps>
```

## 示例代码

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[
  {
    "label": "React",
    "value": "React"
  },
  {
    "label": "Vue",
    "value": "Vue"
  }
]}>
<TabItem value="React">

```tsx
export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='components-page'>
        <Image
          style='width: 300px;height: 100px;background: #fff;'
          src='nerv_logo.png'
        />
        <Image
          style='width: 300px;height: 100px;background: #fff;'
          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
        />
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="components-page">
    <image
      style="width: 300px;height: 100px;background: #fff;"
      src="nerv_logo.png"
    />
    <image
      style="width: 300px;height: 100px;background: #fff;"
      src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
    />
  </view>
</template>
```
</TabItem>
</Tabs>

## ImageProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| src | `string` |  | 是 | 图片资源地址 |
| mode | `keyof mode` | `"scaleToFill"` | 否 | 图片裁剪、缩放的模式 |
| webp | `boolean` | `false` | 否 | 默认不解析 webP 格式，只支持网络资源 |
| svg | `boolean` | `false` | 否 | 默认不解析 svg 格式，svg 图片只支持 aspectFit |
| lazyLoad | `boolean` | `false` | 否 | 图片懒加载。只针对 page 与 scroll-view 下的 image 有效 |
| showMenuByLongpress | `boolean` | `false` | 否 | 开启长按图片显示识别小程序码菜单 |
| onError | `CommonEventFunction<onErrorEventDetail>` |  | 否 | 当错误发生时，发布到 AppService 的事件名，事件对象 |
| onLoad | `CommonEventFunction<onLoadEventDetail>` |  | 否 | 当图片载入完毕时，发布到 AppService 的事件名，事件对象 |
| imgProps | `ImgHTMLAttributes<HTMLImageElement>` |  | 否 | 为 img 标签额外增加的属性 |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ImageProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ImageProps.mode | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️(部分支持 scaleToFill, aspectFit, aspectFill, widthFix) |
| ImageProps.webp | ✔️ |  |  |  |  |  |
| ImageProps.svg |  |  |  |  |  | ✔️ |
| ImageProps.lazyLoad | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| ImageProps.showMenuByLongpress | ✔️ |  |  |  |  |  |
| ImageProps.onError | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ImageProps.onLoad | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ImageProps.imgProps |  |  |  |  | ✔️ |  |
| ImageProps.nativeProps |  |  |  |  | ✔️ |  |

### mode

mode 的合法值

| 参数 | 说明 |
| --- | --- |
| scaleToFill | 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 |
| aspectFit | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 |
| aspectFill | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
| widthFix | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变 |
| heightFix | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变 |
| top | 裁剪模式，不缩放图片，只显示图片的顶部区域 |
| bottom | 裁剪模式，不缩放图片，只显示图片的底部区域 |
| center | 裁剪模式，不缩放图片，只显示图片的中间区域 |
| left | 裁剪模式，不缩放图片，只显示图片的左边区域 |
| right | 裁剪模式，不缩放图片，只显示图片的右边区域 |
| top left | 裁剪模式，不缩放图片，只显示图片的左上边区域 |
| top right | 裁剪模式，不缩放图片，只显示图片的右上边区域 |
| bottom left | 裁剪模式，不缩放图片，只显示图片的左下边区域 |
| bottom right | 裁剪模式，不缩放图片，只显示图片的右下边区域 |

### onErrorEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |

### onLoadEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| height | string or number | 图片高度 |
| width | string or number | 图片宽度 |
