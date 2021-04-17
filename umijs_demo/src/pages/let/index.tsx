import styles from './index.less';
import { Image, ImageProps } from 'antd'
// import { bgImg,img1, img2 } from './imgs';

export default function IndexPage() {
  return (
    <div>
      {/* <h1 className={styles.title}>Page index</h1> */}
      <div className={styles.bgImg}>
      <div className={styles.content}>
          <div>
          <Image className={styles.img1} src={require('./imgs/img1.png')} alt=""/>
          <Image className={styles.img2} src={require('./imgs/img2.png')} alt=""/>
          </div>
         
    </div>
      </div>
    </div>
  );
}
