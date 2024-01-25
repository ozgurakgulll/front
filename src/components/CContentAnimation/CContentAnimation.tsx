import styles from './../../styles/components/_contentAnimtaion.module.scss';


export function CContentAnimation({ type }: { type: 'batch' | 'advanced' | 'export' | 'sign' | 'scanner' }) {

  return <div className={'flex justify-center items-center'}>
    <div className={styles['container-animation']}>
      <div className={styles['animate-slide-up']}>
        <div className="absolute left-0 right-0 z-50 text-white">
          {
            type === 'scanner' &&
            <img src="/src/public/scanner.png" className={'w-[270px] h-[340px] m-0 mt-[50px] mr-[31px]'}
                 alt={'scanner'}></img>

          }
          {
            type === 'sign' &&
            <>
              <div className={'space-y-20 relative'}>
                <img src="/src/public/sign.png" className={'w-[270px] h-[340px] mt-[63px] mr-[24px]'}
                     alt={'scanner'}></img>
                <div className={styles['image-one']}>
                  <img src="/src/public/sign-left.png" className={'w-[217px] h-[143px] px-14 mt-[64px] ml-[-148px]'}
                       alt={'scanner'}></img>
                </div>
                <div className={styles['image-two']}>
                  <img src="/src/public/sign-right.png"
                       className={'w-[217px] h-[143px] px-14 mt-[64px] ml-[148px]'}
                       alt={'scanner'}></img>
                </div>
              </div>
            </>
          }
          {
            type === 'batch' &&
            <div className={'space-y-20 relative images-container'}>
            <img src="/src/public/batch.png" className={'w-[270px] h-[340px] mt-[63px] mr-[24px]'}
                   alt={'scanner'}></img>
              <div className={styles['image-one']}>
                <img src="/src/public/sign-text.png" className={'w-[200px] h-[340px] px-14 mt-[64px]'}
                     alt={'scanner'}></img>
              </div>
              <div className={styles['image-two']}>
                <img src="/src/public/sign-text.png" className={'w-[220px] h-[340px] mt-[76px]  px-12'}
                     alt={'scanner'}></img>
              </div>
              <div className={styles['image-three']}>
                <img src="/src/public/sign-text.png" className={'w-[240px] h-[340px] mt-[90px] px-10'}
                     alt={'scanner'}></img>

              </div>
            </div>
          }
          {
            type === 'advanced' && <div className={'space-y-20 relative'}>

              <img src="/src/public/advanced.png" className={'w-[270px] h-[340px] mt-[63px] mr-[24px]'}
                   alt={'scanner'}></img>
              <div className={styles['image-one']}>
                <img src="/src/public/export-left.png" className={'w-[33px] h-[280px]  mt-[46px] fixed ml-[-20px]'}
                     alt={'scanner'}></img>
              </div>
              <div className={styles['image-two']}>
                <img src="/src/public/export-right.png" className={'w-[34px] h-[280px] mt-[46px]  fixed ml-[290px]'}
                     alt={'scanner'}></img>
              </div>
            </div>

          }
          {
            type === 'export' && <>
              <div className={'space-y-20 relative'}>
                <img src="/src/public/export.png" className={'w-[280px] h-[340px] mt-[57px] mr-[30px]'}
                   alt={'scanner'}></img>
              <div className={styles['image-one']}>
              <img src="/src/public/right.png" className={'w-[20px] h-[30px]  mt-[272px] fixed ml-[-41px]'}
                       alt={'scanner'}></img>
                </div>
                <div className={styles['image-two']}>
                  <img src="/src/public/pdf.png" className={'w-[115px] h-[137px]  mt-[191px] fixed ml-[-20px]'}
                       alt={'scanner'}></img>
                </div>
                <div className={styles['image-three']}>
                  <img src="/src/public/jpg.png" className={'w-[110px] h-[120px]  mt-[180px] fixed ml-[83px]'}
                       alt={'scanner'}></img>
                </div>
                <div className={styles['image-four']}>
                  <img src="/src/public/txt.png" className={'w-[115px] h-[137px]  mt-[191px] fixed ml-[210px]'}
                       alt={'scanner'}></img>
                </div>
              </div>
            </>
          }
        </div>
        <img src="/src/public/phone.png" className={'w-[340px] h-[380px] mt-8'} alt={'scanner'}></img>
      </div>
    </div>
  </div>;
}
