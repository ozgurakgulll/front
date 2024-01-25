import { CTab } from '../../../components/CTab';
import { CScanner } from '../../../components/CScanner';
import { CSign } from '../../../components/CSign';
import { CBatch } from '../../../components/CBatch';
import { CAdvanced } from '../../../components/CAdvanced';
import { CExport } from '../../../components/CExport';

export function PAccHome() {
  const tabsData = [
    { tabName: 'Document Scanner', content: <CScanner />, icon: 'document' },
    { tabName: 'Sign & Stamp', content: <CSign />, icon: 'sign' },
    { tabName: 'Batch Scanning', content: <CBatch />, icon: 'batch' },
    { tabName: 'Advanced Filters', content: <CAdvanced />, icon: 'advanced' },
    { tabName: 'Export & Share', content: <CExport />, icon: 'export' }
  ];
  return (
    <div className="flex  lg:items-center lg:justify-items-center    h-full w-full">
      <div className={'h-[87vh] lg:h-2/4 w-full'}>
        <div className="progress-bar" role="progressbar"></div>
        <CTab tabs={tabsData} />
      </div>
    </div>
  );
}
