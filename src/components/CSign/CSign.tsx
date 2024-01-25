import styles from '../../styles/components/_contentBase.module.scss';
import { CContentInfo } from '../CContentInfo';
import { CContentAnimation } from '../CContentAnimation';
export  function CSign(){

  return (
    <div className={styles['content-main']}>
    <div className={styles['content-right']}>
        <CContentAnimation type={'sign'}/>
    </div>
    <div className={styles['content-left']}>
     <CContentInfo
       content={{header:'Sign & Stamp',title:'One-Tap Focus',info:'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!'}}
     />
    </div>
  </div>
  )
}
