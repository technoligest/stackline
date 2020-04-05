import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import './App.css';

import * as React from 'react';

import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { IDataWithStatus, IStoreModel } from 'src/Models/Store/IStoreModel';
import { initializeApp } from 'src/State/Actions/AppActions';
import { IProduct } from '../Models/IProduct';
import { ControlPane } from './ControlPane/ControlPane';
import { Header } from './Header/Header';
import { SalesSummary } from './SalesSummary/SalesSummary';

interface IAppContainerPropsConnected {
  product: IDataWithStatus<IProduct>;
}

interface IAppContainerPropsActions {
  initializeApp: () => void;
}

interface IAppContainerProps extends IAppContainerPropsConnected, IAppContainerPropsActions {}

class App extends React.Component<IAppContainerProps> {
  public componentDidMount(): void {
    this.props.initializeApp();
  }

  public render() {
    return (
      <div id="app">
        <Header/>
        <div className='app-body'>
          <ControlPane productDetails={this.props.product.data}/>
          <SalesSummary sales={this.props.product.data?.sales} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IStoreModel): IAppContainerPropsConnected {
  return {
      product: state.app
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>): IAppContainerPropsActions {
  return {
      initializeApp: () => initializeApp()(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
