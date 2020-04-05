import {DetailsList, IColumn, SelectionMode} from '@fluentui/react'
import * as React from 'react';
import { stringResources } from 'src/assets/stringResources/stringResources';
import { ISale } from 'src/Models/ISale';
import './SalesSummary.css';

export interface ISalesSummaryProps {
  sales?: ISale[];
}

export const SalesSummary: React.FunctionComponent<ISalesSummaryProps> =  (props: ISalesSummaryProps) => {
  const defaultMinWidth = 200;
  const defaultMaxWidth = 200;
  const columns: IColumn[] = [
    {
      fieldName: "weekEnding",
      isResizable: true,
      key: "weekEnding",
      maxWidth: defaultMaxWidth,
      minWidth: defaultMinWidth,
      name: stringResources.TableHeaders.WeekEnding,
    },
    {
      fieldName: "retailSales",
      isResizable: true,
      key: "retailSales",
      maxWidth: defaultMaxWidth,
      minWidth: defaultMinWidth,
      name: stringResources.TableHeaders.RetailSales,
    },
    {
      fieldName: "wholesaleSales",
      isResizable: true,
      key: "wholesaleSales",
      maxWidth: defaultMaxWidth,
      minWidth: defaultMinWidth,
      name: stringResources.TableHeaders.WholeSaleSales,
    },
    {
      fieldName: "unitsSold",
      isResizable: true,
      key: "unitsSold",
      maxWidth: defaultMaxWidth,
      minWidth: defaultMinWidth,
      name: stringResources.TableHeaders.UnitsSold,
    },
    {
      fieldName: "retailerMargin",
      isResizable: true,
      key: "retailerMargin",
      maxWidth: defaultMaxWidth,
      minWidth: defaultMinWidth,
      name: stringResources.TableHeaders.RetailMargin,
    }
  ];

  return (
    <div className="sales-summary">
      {
        props.sales && <DetailsList
          items={props.sales}
          compact={true}
          columns={columns}
          selectionMode={SelectionMode.none}
          isHeaderVisible={true}
        />
      }
    </div>
  );
}
