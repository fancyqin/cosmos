import React, { useEffect, useState } from 'react';
import {getStanding} from '@/api/BaseApi';
import {Image,Spin } from 'antd';
import { useParams } from "react-router-dom";
import Layout from '@/components/Layout';

export default function(){
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(true);
  let {id} = useParams();
  useEffect(()=>{
    getStanding(id.replace('-','.')).then(result => {
      setData(result.data);
      setLoading(false);
    },err=> {
      console.error(err)
    })
  },[]);
  return <Layout>
    <h1>{data?.name}</h1>
    {loading ? <Spin />: 
    <ol>
      {data?.standings?.map(item => {
        return (
          <li key={item?.id}>
            <Image width={100} src={item?.team?.logos?.[0]?.href} alt={item?.team?.name} />
            <h2>{item?.team.name}</h2>
          </li>
        )
      })}
    </ol>
    }
  </Layout>
}