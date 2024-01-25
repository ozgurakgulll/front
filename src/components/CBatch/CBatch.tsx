import styles from '../../styles/components/_contentBase.module.scss';
import { CContentInfo } from '../CContentInfo';
import { CContentAnimation } from '../CContentAnimation';
export  function CBatch(){

  return (
    <div className={styles['content-main']}>
    <div className={styles['content-right']}>
        <CContentAnimation type={'batch'}/>
    </div>
    <div className={styles['content-left']}>
     <CContentInfo
       content={{header:'Batch Scanning',title:'Multiple Page Scan',info:'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.'}}
     />
    </div>
  </div>
  )
}
