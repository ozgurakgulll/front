import { useRef, useState, DragEvent, ReactNode, ReactElement, RefObject, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import styles from './../../styles/components/_tab.module.scss';
import styleSpin from './../../styles/components/_buttonSpiner.module.scss';
import { CIcon } from '../CIcon/CIcon';
import { cIconAdvanced, cIconBatch, cIconDocument, cIconExport, cIconSign } from '../CIcon';

interface TabInterface {
  tabName: string,
  content: ReactNode,
  icon: string
}

export function CTab({ tabs }: { tabs: TabInterface[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs: RefObject<HTMLButtonElement>[] = tabs.map(() => useRef(null));
  useEffect(() => {
    setActiveTab(0);
  }, []);

  const handleTabClick =useCallback((index: number) =>  {
    setActiveTab(index);
  },[])
  const handleTabDragStart = (index: number, e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleTabsContainerDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTabsContainerDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedTabIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const newTabsOrder = [...tabs];
    newTabsOrder.splice(activeTab, 1);
    newTabsOrder.splice(draggedTabIndex, 0, tabs[activeTab]);
    setActiveTab(draggedTabIndex);
  };


  return (
    <div className={'w-full h-full'}>
      <div className={'h-full bg-[#FBFCFC]'}>
        {tabs.map((tab: TabInterface, index) => (
          <div key={index}
               className={classNames('tab-panel', { 'active': index === activeTab })}
          >
            {tab.content}
          </div>
        ))}
      </div>
      <div
        ref={tabsContainerRef}
        className={styles['tab-container']}
        onDragOver={handleTabsContainerDragOver}
        onDrop={handleTabsContainerDrop}
      >
        {tabs.map((tab: TabInterface, index: number) => (
          <div
            key={index}
            className={classNames(styles['tab-button'],
              {
                'text-slate-900 bg-sky-500 bg-opacity-5': index === activeTab,
                'text-black ': index !== activeTab
              })}
            onClick={() => handleTabClick(index)}
            draggable
            onDragStart={(e) => handleTabDragStart(index, e)}
          >
            <div className={styleSpin['spin-button']}>
              <button key={index} ref={buttonRefs[index]}  className={
                classNames(`${styleSpin['circle']}  ${styleSpin['spin']}`,
                  index === activeTab &&
                  styleSpin['spin_focus'],
                )}>
                <div
                  className={classNames(styles['tab-button-icon'],
                  {
                    'text-sky-500': index === activeTab,
                    'text-stone-500': index !== activeTab,
                  }

                  )}>
                  {getIconComponent(tab.icon)}
                </div>
              </button>
            </div>
            <span>{tab.tabName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


const iconMap: Record<string, ReactElement> = {
  batch: <CIcon icon={cIconBatch} />,
  sign: <CIcon icon={cIconSign} />,
  export: <CIcon icon={cIconExport} />,
  advanced: <CIcon icon={cIconAdvanced} />,
  document: <CIcon icon={cIconDocument} />
};

function getIconComponent(iconName: string) {
  return iconMap[iconName] || null;
}
