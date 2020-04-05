import * as React from 'react';
import './ControlPaneHeader.css';

export interface IControlPaneHeaderProps {
  title: string;
  subTitle: string;
  imageUrl: string
}

export const ControlPaneHeader: React.FunctionComponent<IControlPaneHeaderProps> =  (props: IControlPaneHeaderProps) => {
  return (
    <div className="control-pane-header">
      <div className="product-image-container">
        <img className="product-image" height={200} width={200} src={props.imageUrl}/>
      </div>
      <div className="product-title-container">
        <div className="product-title">
          {props.title}
        </div>
        <div className="product-subtitle">
          {props.subTitle}
        </div>
      </div>
    </div>
  );
}
