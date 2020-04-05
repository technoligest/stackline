import * as React from 'react';
import './ControlPaneTags.css';

export interface IControlPaneTagsProps {
  tags: string[];
}

export const ControlPaneTags: React.FunctionComponent<IControlPaneTagsProps> =  (props: IControlPaneTagsProps) => {
  return (
    <div className="control-pane-tags">
      {props.tags.map(tag => (
        <div
          key={tag}
          className="tag"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
