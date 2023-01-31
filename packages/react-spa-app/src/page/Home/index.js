import React, { useEffect, useState } from 'react';
import {getListData} from '@/api/BaseApi';
import { Link  } from "react-router-dom";
import {Image,Row,Col,Button } from 'antd';
import Layout from '@/components/Layout';

import './home.less';

export default function(){
  const [list,setListData] = useState([]);
  useEffect(()=>{
    getListData().then(result => {
      setListData(result.data);
    },err=> {
      console.error(err)
    })
  },[]);
  return <Layout>
    <ol className="league-list">
      <Row gutter={16}>
        {list.map(item => {
          return (
          <Col key={item?.id} span={6}>
            <li>
              <Image width={100} src={item?.logos?.light} alt={item?.name} />
              <Button type="primary"><Link to={`/list/${item?.id.replace('.','-')}`}>{item?.name}</Link></Button>
            </li>
          </Col>
          )
        })}
      </Row>
    </ol>
    
  </Layout>
}