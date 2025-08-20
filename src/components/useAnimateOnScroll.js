// src/hooks/useAnimateOnScroll.js

import { useEffect, useRef } from 'react';

// 接收一個 className 作為參數，用於指定要觸發動畫的 class
export const useAnimateOnScroll = (classNameToAnimate) => {
  const ref = useRef(null); // 創建一個 ref
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 在觀察器中，我們只做一件事情：
            // 為目標元素添加動畫 class
            const items = currentRef.querySelectorAll(classNameToAnimate);
            items.forEach(item => {
              item.classList.add('animate-in');
            });
            // 停止觀察
            observer.unobserve(currentRef);
          }
        });
      },
      {
        threshold: 0.1, // 觸發閾值
        rootMargin: '0px 0px -50px 0px' // 可選的提前觸發
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [classNameToAnimate]); // 依賴項為傳入的 class 名稱

  return ref; // 回傳 ref，讓元件可以將它綁定到 DOM 元素上
};