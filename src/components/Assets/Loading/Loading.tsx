import { FC } from 'react';
import './Loading.css';

export const Loading: FC = () => (
    <div className="g-bg-primary g-wh-100 g-jc-center g-ai-center">
        <div className="loading-rounded g-shadows g-pr">
            <div className="loading-rounded--second g-center-absolute-real g-shadows-inset"></div>
        </div>
    </div>
);
