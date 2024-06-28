import React, { useEffect, useState } from 'react';
import {  Table  } from 'antd';
import type { TableProps } from 'antd';



interface DataType {
  key: string;
  title: string;
  release_date: number;
  description: string;

}



const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Movie Name',
    dataIndex: 'title',
    key: 'title',
    
  },
  {
    title: 'Realease Date',
    dataIndex: 'release_date',
    key: 'release_date',
  },
  {
    title: 'Overview',
    dataIndex: 'overview',
    key: 'overview',
  },

];







function HistoryTable() {
    
    const [history, setHistory] = useState<DataType[]>([]);

    useEffect(() => {
      chrome.storage.local.get(['movieHistory'], (result) => {
        setHistory(result.movieHistory || []);
      });

      console.log("History Data==>",history);
      
    }, []);
    return (

        <Table columns={columns} dataSource={history}/>
        
    )
}

export default HistoryTable
