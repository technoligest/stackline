import * as React from 'react';
import ChartIcom from 'src/assets/images/chart-icon.svg';
import HomeIcon from 'src/assets/images/home-icon.svg';
import { stringResources } from 'src/assets/stringResources/stringResources';
import './ControlPaneNav.css';

interface INavItem {
  name: string;
  icon: string;
}

export const ControlPaneNav: React.FunctionComponent =  () => {
  const navItems: INavItem[] = [
    {
      icon: HomeIcon,
      name: stringResources.Overview,
    },
    {
      icon: ChartIcom,
      name: stringResources.Sales,
    }
  ];
  return (
    <div className="control-pane-nav">
      {
        navItems.map(navItem => {
          return (
            <div className="nav-item-container" key={navItem.name}>
              <img className="nav-item-icon" height={20} width={20} src={navItem.icon}/>
              <div className="nav-item-name">
                {navItem.name}
              </div>
            </div>
            );
        })
      }
    </div>
  );
}
