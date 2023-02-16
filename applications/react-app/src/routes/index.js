import React, { Suspense, } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

import {Result,Button} from 'antd';



const Home = React.lazy(() => import(/* webpackChunkName: "home" */"@/page/Home"));
const List = React.lazy(() => import(/* webpackChunkName: "list" */"@/page/List"));


export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list/:id" element={<List />} />
          <Route path="*" element={<Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Button type="primary">Back Home</Button>} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}