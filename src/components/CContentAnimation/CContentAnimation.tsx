import styles from './../../styles/components/_contentAnimtaion.module.scss';


export function CContentAnimation({ type }: { type: 'batch' | 'advanced' | 'export' | 'sign' | 'scanner' }) {

  return <div className={'flex justify-center items-center'}>
    <div className={styles['container-animation']}>
      <div className={styles['animate-slide-up']}>
        <div className="absolute left-0 right-0 z-50 text-white">
          {
            type === 'scanner' &&
            <img src="/src/public/scanner.png" className={'lg:w-[270px] lg:h-[340px] w-[240px] h-[340px]  m-0 lg-[50px] mt-[55px] mr-[31px]'}
                 alt={'scanner'}></img>

          }
          {
            type === 'sign' &&
            <>
              <div className={'space-y-20 relative'}>
                <img src="/src/public/sign.png" className={'lg:w-[270px]  :w-[260px] h-[340px]  mt-[63px]   mr-[24px]'}
                     alt={'scanner'}></img>
                <div className={styles['image-one']}>
                  <img src="/src/public/sign-left.png" className={'lg:w-[217px] lg:h-[143px] w-[180px] h-[120px]  px-14 mt-[64px] lg:ml-[-148px] ml-[-90px] '}
                       alt={'scanner'}></img>
                </div>
                <div className={styles['image-two']}>
                  <img src="/src/public/sign-right.png"
                       className={'lg:w-[217px] lg:h-[143px] w-[180px] h-[120px]  px-14 mt-[64px] lg:ml-[148px] ml-[120px]'}
                       alt={'scanner'}></img>
                </div>
              </div>
            </>
          }
          {
            type === 'batch' &&
            <div className={'space-y-20 relative images-container'}>
            <img src="/src/public/batch.png" className={'lg:w-[270px] w-[260px] h-[340px] mt-[63px] mr-[24px]'}
                   alt={'scanner'}></img>
              <div className={styles['image-one']}>
                <img src="/src/public/sign-text.png" className={'lg:w-[200px]  w-[180px] h-[340px]  px-14 mt-[64px]'}
                     alt={'scanner'}></img>
              </div>
              <div className={styles['image-two']}>
                <img src="/src/public/sign-text.png" className={'lg:w-[220px]  w-[200px] h-[340px] mt-[76px]  px-12'}
                     alt={'scanner'}></img>
              </div>
              <div className={styles['image-three']}>
                <img src="/src/public/sign-text.png" className={'lg:w-[240px]  w-[220px] h-[340px] mt-[90px] px-10'}
                     alt={'scanner'}></img>

              </div>
            </div>
          }
          {
            type === 'advanced' && <div className={'space-y-20 relative'}>
              <img src="/src/public/advanced.png" className={'lgw-[270px] w-[250px] h-[340px]  mt-[63px] mr-[24px]'}
                   alt={'scanner'}></img>
              <div className={styles['image-one']}>
                <img src="/src/public/export-left.png" className={'lg:w-[33px] w-[30px] h-[280px]  mt-[46px]  ml-[-20px]'}
                     alt={'scanner'}></img>
              </div>
              <div className={styles['image-two']}>
                <img src="/src/public/export-right.png" className={'lg:w-[33px] w-[30px] h-[280px] mt-[46px]   lg:ml-[290px] ml-[270px]'}
                     alt={'scanner'}></img>
              </div>
            </div>

          }
          {
            type === 'export' && <>
              <div className={'space-y-20 relative'}>
                <img src="/src/public/export.png" className={'lg:w-[270px]  :w-[260px] h-[340px] mt-[57px] mr-[30px]'}
                   alt={'scanner'}></img>
              <div className={styles['image-one']}>
              <img src="/src/public/right.png" className={'lg:w-[20px] w-[15px] h-[30px]  mt-[272px] fixed ml-[-20px]'}
                       alt={'scanner'}></img>
                </div>
                <div className={styles['image-two']}>
                  <img src="/src/public/pdf.png" className={'lg:w-[115px] lg:h-[137px] w-[100px] h-[130px]  mt-[191px] fixed ml-[-20px]'}
                       alt={'scanner'}></img>
                </div>
                <div className={styles['image-three']}>
                  <img src="/src/public/jpg.png" className={'lg:w-[110px] lg:h-[125px] w-[100px] h-[120px] mt-[180px] fixed ml-[87px]'}
                       alt={'scanner'}></img>
                </div>
                <div className={styles['image-four']}>
                  <img src="/src/public/txt.png" className={'lg:w-[115px] lg:h-[137px] w-[100px] h-[130px]  mt-[191px] fixed ml-[210px]'}
                       alt={'scanner'}></img>
                </div>
              </div>
            </>
          }
        </div>
        <img src="/src/public/phone.png" className={'lg:w-[340px] lg:h-[380px] w-[310px] h-[380px] mt-8'} alt={'scanner'}></img>
      </div>
    </div>
  </div>;
}
