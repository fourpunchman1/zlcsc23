import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: '資研社的優勢？',
      answer: '除了豐富的學習歷程以外，在Study for hour的課程中還會教導許多實用的小技巧，讓學習事半功倍！'
    },
    {
      question: '零基礎可以加入資研社嗎？',
      answer: '可以喔!課程中除了nodeJS組要有一些基礎，其他都是專為新手而開發的課程，很多學長姊也都是加入資研社才接觸程式的。'
    },
    {
      question: '資研社是由學校電腦老師帶領嗎？',
      answer: '不是喔，是由就讀高師大的陳彥宇老師以及教學組共同帶領的！'
    },
    {
      question: '會有回家作業嗎？',
      answer: '在課程安排上會盡量讓各位在上課期間把題目完成，若想要回家練習的可以跟教學組拿題目喔！'
    },
    {
      question: '我該如何加入資研社？',
      answer: '只要在徵選時(9/5)到社團教室(電腦教室四)進行面試或是在田社團志願表時填上資研社就可以囉！'
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
