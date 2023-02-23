import React, { useEffect, useState } from 'react';
import {getListData} from '@/api/BaseApi';
import { Link  } from "react-router-dom";
import {Image,Row,Col,Button } from '@cosmos/antd';
import Layout from '@/components/Layout';
import {format} from '@cosmos/business'
import './home.less';
import _ from 'lodash'

export default function(){
  const [list,setListData] = useState([]);
  useEffect(()=>{
    getListData().then(result => {
      setListData(result);
    },err=> {
      console.error(err)
    })
  },[]);
  return <Layout>

    <h1>{format(new Date())}</h1>
    <ul className="league-list">
      <Row gutter={16}>
        {list.map(item => {
          return (
          <Col key={item?.id} span={4}>
            <li>
              <Image width={100} src={item?.flickr_images[0]} alt={item?.name} />
              <Button type="primary"><Link to={`/list/${item?.id}`}>{item?.name}</Link></Button>
            </li>
          </Col>
          )
        })}
      </Row>
    </ul>
    
  </Layout>
}