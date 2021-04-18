import styles from './index.less';
import { Image, ImageProps } from 'antd'
// import { bgImg,img1, img2 } from './imgs';

export default function IndexPage() {
  let defaultImgProps: ImageProps = {
    preview: false,
    placeholder: false,
  };
  
  return (
    <div>
      {/* <h1 className={styles.title}>Page index</h1> */}
      <div className={styles.bgImg}>
      <div className={styles.content}>
          <div className={styles.Img}>
          <Image className={styles.img2} src={require('./imgs/img2.png')}{...defaultImgProps} alt=""/>
          <Image className={styles.img1} src={require('./imgs/img1.png')}{...defaultImgProps} alt=""/>
          </div>
         <div className={styles.text}>
           <p>区域经理</p>
           <p>技术支持</p>
           <p>数字化专员</p>
         </div>

         <div className={styles.Img2}>
        <a href="https://sc.hotjob.cn/wt/heygears/mobweb/v8/position/list?openid=onBoQw2zzFCUSgkmSSNY0X-qebkI&recruitType=2&channelId=&brandCode=1"> <Image className={styles.img2} src={require('./imgs/toudi.png')}{...defaultImgProps} alt=""/></a> 
         <a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2MzAzNjc1NQ==&action=getalbum&album_id=1821989265807851524&scene=173&subscene=91&sessionid=1618191811&enterid=1618191818&from_msgid=2650336331&from_itemidx=1&count=3&nolastread=1#wechat_redirect">  <Image className={styles.img1} src={require('./imgs/production.png')}{...defaultImgProps} alt=""/></a>
         </div>
    </div>
      </div>
    </div>
  );
}
