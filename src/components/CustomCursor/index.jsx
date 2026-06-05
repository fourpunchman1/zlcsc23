import React from 'react';
import './customcursor.scss';

const CustomCursor = () => {
  const cursorSm = React.useRef(null);
  const cursorLg = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      if (!cursorSm.current || !cursorLg.current) return;

      const { clientX, clientY } = event;
      const mouseX = clientX - cursorSm.current.clientWidth / 2;
      const mouseY = clientY - cursorSm.current.clientHeight / 2;

      positionRef.current.mouseX = mouseX;
      positionRef.current.mouseY = mouseY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const sm = cursorSm.current;
      const lg = cursorLg.current;
      if (!sm || !lg) return;

      const pos = positionRef.current;
      const { mouseX, mouseY } = pos;

      if (!pos.destinationX && !pos.destinationY) {
        pos.destinationX = mouseX;
        pos.destinationY = mouseY;
      } else {
        pos.distanceX = (mouseX - pos.destinationX) * 0.1;
        pos.distanceY = (mouseY - pos.destinationY) * 0.1;
        if (Math.abs(pos.distanceX) + Math.abs(pos.distanceY) < 0.1) {
          pos.destinationX = mouseX;
          pos.destinationY = mouseY;
        } else {
          pos.destinationX += pos.distanceX;
          pos.destinationY += pos.distanceY;
        }
      }

      const transform = `translate3d(${pos.destinationX}px, ${pos.destinationY}px, 0)`;
      sm.style.transform = transform;
      lg.style.transform = transform;
    };

    positionRef.current.key = requestAnimationFrame(followMouse);

    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <>
      <div className="cs-cursor_lg" ref={cursorLg}></div>
      <div className="cs-cursor_sm" ref={cursorSm}></div>
    </>
  );
};

export default CustomCursor;
