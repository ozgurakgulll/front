import styles from '../../styles/components/_contentBase.module.scss';
import { CContentInfo } from '../CContentInfo';
import { CContentAnimation } from '../CContentAnimation';
export  function CAdvanced(){

  return (
    <div className={styles['content-main']}>
    <div className={styles['content-right']}>
        <CContentAnimation type={'advanced'}/>
    </div>
    <div className={styles['content-left']}>
     <CContentInfo
       content={{header:'Advanced fılters',title:'Unique Filters',info:'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.\n'}}
     />
    </div>
  </div>
  )
}
