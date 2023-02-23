import React, { useEffect, useState } from 'react';
import {getStanding} from '@/api/BaseApi';
import {Image,Spin } from '@cosmos/antd';
import { useParams } from "react-router-dom";
import Layout from '@/components/Layout';

export default function(){
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(true);
  let {id} = useParams();
  useEffect(()=>{
    getStanding(id).then(result => {
      setData(result);
      setLoading(false);
    },err=> {
      console.error(err)
    })
  },[]);
  return <Layout>
    <h1>{data?.name}</h1>
    {loading ? <Spin />: 
    <ul>
      {data?.flickr_images?.map((item,index) => {
        return (
          <li key={index}>
            <Image width={200} src={item} alt={data?.name} />
          </li>
        )
      })}
    </ul>
    }
  </Layout>
}