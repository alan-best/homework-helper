import { useState } from 'react'
import {Alert, Image, Layout, Tabs} from "antd";
const config:{[index:string]:string[]} = {
  "今日":["历史/2.png"],
  "语文":Array(40).fill(0).map((_,i)=>`语文/${i+2}.png`),
  "数学":Array(35).fill(0).map((_,i)=>`数学/${i+2}.png`),
  "英语":Array(33).fill(0).map((_,i)=>`英语/${i+2}.png`),
  "政治":Array(28).fill(0).map((_,i)=>`政治/${i+2}.png`),
  "历史":Array(28).fill(0).map((_,i)=>`历史/${i+2}.png`),
  "物理":Array(20).fill(0).map((_,i)=>`物理/${i+2}.png`),
  "化学":Array(29).fill(0).map((_,i)=>`化学/${i+2}.png`)
}
function App() {

  return (
    <Layout style={{height:"100%"}}>
      <Layout.Content>
        <Alert message={"点击图片查看大图"}/>
        <Tabs style={{position:"sticky"}} items={Object.keys(config).map(k=>(
          {label:k,key:k,children:(
              <Image.PreviewGroup>
                {config[k].map((fn,i)=><Image key={i} src={"/images/"+fn} width={"100%"}/>)}

              </Image.PreviewGroup>
            )}
        ))}/>
      </Layout.Content>
    </Layout>
  )
}

export default App
