import * as React from 'react';
import { IProduct } from '../../Models/IProduct';
import './ControlPane.css';
import { ControlPaneHeader } from './ControlPaneHeader/ControlPaneHeader';
import { ControlPaneNav } from './ControlPaneNav/ControlPaneNav';
import { ControlPaneTags } from './ControlPaneTags/ControlPangeTags';

export interface IControlPaneProps {
  productDetails: Pick<IProduct, 'image' | 'title' | 'subtitle' | 'tags'> | undefined;
}

export const ControlPane: React.FunctionComponent<IControlPaneProps> =  (props: IControlPaneProps) => {

  return (
    <div className="control-pane">
      {
        props.productDetails === undefined
        ? undefined
        : <>
            <ControlPaneHeader
              imageUrl={props.productDetails.image}
              title={props.productDetails.title}
              subTitle={props.productDetails.subtitle}
            />
            <ControlPaneTags tags={props.productDetails.tags}/>
            <ControlPaneNav />
          </>
      }
    </div>
  );
}
