import React, { useEffect } from 'react';

import LRT from '@jd/ling-distribute-sdk-h5'

// 内容分发 SDK 接入文档：http://tls-pre.jd.com/distribute-sdk-docs/docs/
function Index() {
  const newsStyle = {
    width: '100%',
    height: '400px',
    cursor: 'pointer',
  };

  useEffect(() => {
    // 创建 LRT 实例
    const lrt = new LRT({
      zoneId: '1480870218102263809',
      debug: true,  // 发布时应关闭debug模式
    });

    // 注册资源位
    lrt?.register({
      positionId: '1480873921702068225', // 必传参数，资源位id
      type: 'img', // 资源位类型
      containerId: 'news', // 注册资源位成功后，资源位预览图的 DOM 节点
      backupUrl: 'https://img20.360buyimg.com/img/jfs/t1/220737/13/10934/81315/61dd7009Ead9f1ca0/81f28ce8f80dce8e.jpg',  // 兜底图
      // onComplete (res) {
      //   // 加载完的回调
      //   console.log('complete', res)
      // },
      onClick (e, { url }) {
        // 点击时的回调
        window.open(url);
      },
    });
  }, []);

  return (
    <div id="news" style={newsStyle}></div>
  );
}

export default Index
