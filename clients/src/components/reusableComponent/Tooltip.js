import React from 'react'
import  { useRef, useEffect } from 'react';
import tippy from 'tippy.js'; // Import Tippy.js

export const ToolTip = ({ content, children }) => {
    const tooltipRef = useRef();

    useEffect(() => {
      tippy(tooltipRef.current, {
        content: content,
      });
    }, [content]);
  return (
    <div ref={tooltipRef} >
    {children}
  </div>

  )
}