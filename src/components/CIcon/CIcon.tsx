/**
 * @file: CIcon.tsx
 * @author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 25.10.2023
 * Last Modified Date: 25.10.2023
 * Last Modified By: H.Alper Tuna <halpertuna@gmail.com>
 */

import { IIconDefinition } from './IIconDefinition';

export function CIcon({
                        icon
                      }: {
  icon?: IIconDefinition;
}) {
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        maxHeight:'32px',
        maxWidth:'32px'
      }}
    >
      {icon ? (
        <svg viewBox={icon.viewBox} xmlns="http://www.w3.org/2000/svg">
          {icon.pathData.map((pathData, index) => (
            <path key={index} fill="currentColor" d={pathData} />
          ))}
        </svg>
      ) : (
        <span className="font-bold">?</span>
      )}
    </div>

  );
}
