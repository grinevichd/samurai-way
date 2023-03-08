import React from "react";

type RepairComponentPropsType = {
  className?: string
  text: string
}

export const RepairComponent = (props: RepairComponentPropsType) => {
  return <div style={{textAlign: 'center'}} className={props.className}>
    <p>{props.text}
      <br/>
      <a style={{color: '_black'}}
         target="_blank"
         href={'https://github.com/xxxGaDxxx/samurai-way-main'}
      >Read more on GitHub</a>
    </p>
  </div>
}