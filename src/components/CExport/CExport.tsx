import styles from '../../styles/components/_contentBase.module.scss';
import { CContentInfo } from '../CContentInfo';
import { CContentAnimation } from '../CContentAnimation';
export  function CExport(){

  return (
    <div className={styles['content-main']}>
    <div className={styles['content-right']}>
        <CContentAnimation type={'export'}/>
    </div>
    <div className={styles['content-left']}>
     <CContentInfo
       content={{header:'Document Scanner',title:'Scan with Ease',info:'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.'}}
     />
    </div>
  </div>
  )
}
