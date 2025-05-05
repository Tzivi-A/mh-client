// import React from 'react';
// import './summary-results.css';
// import type { SummaryResultData } from '~/types/publish-summary-result';
// import { BaseRow } from './base-row';

// interface SummaryResultProps {
//   items: SummaryResultData[];
// }

// export const SummaryResults: React.FC<SummaryResultProps> = ({ items }) => (
//   <div className="summary-results">
//     <BaseRow
//       items={items}
//       renderItem={({ title, count, sum, iconSrc }) => (
//         <div className="summary-results__item">
//           <div className="summary-results__info">
//             <div className="summary-results__title">
//               {count != null ? `${count} ${title}` : title}
//             </div>
//             <div className="summary-results__sum">
//               ₪ {sum.toLocaleString(undefined, { minimumFractionDigits: 2 })}
//             </div>
//           </div>
//           <div className="summary-results__icon">
//             <img src={iconSrc} alt={`${title} icon`} />
//           </div>
//         </div>
//       )}
//     />
//   </div>
// );
// 
import React from 'react';
import './summary-results.css';
import type { SummaryResultData } from '~/types/publish-summary-result';

interface SummaryResultProps {
    items: SummaryResultData[];
}

export const SummaryResults: React.FC<SummaryResultProps> = ({ items }) => (
    <div className="summary-results">
        {items.map(({ title, count, sum, iconSrc }) => (
            <div key={title} className="summary-results__item">
                <div className="summary-results__info">
                    <div className="summary-results__title">
                        {count != null
                            ? `${count} ${title}`
                            : title
                        }
                    </div>
                    <div className="summary-results__sum">
                        ₪ {sum.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                </div>
                <div className="summary-results__icon">
                    <img src={iconSrc} alt={`${title} icon`} />
                </div>
            </div>
        ))}
    </div>
)
