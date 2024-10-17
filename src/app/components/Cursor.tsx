// components/Cursor.tsx
"use client"
import { useEffect, useRef } from 'react';

const Cursor = () => {
  const bigBallRef = useRef<HTMLDivElement | null>(null);
  const smallBallRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (!bigBall || !smallBall) return;

    let mouseX = 0;
    let mouseY = 0;

    const updateCursorPosition = () => {
      // Define the radius values
      const bigBallRadius = 15; // Large ball radius (half of its diameter 30)
      const smallBallOffset = 20; // Offset for small ball to move outside of the large ball

      // Update the position of the big ball
      bigBall.style.transform = `translate(${mouseX - bigBallRadius}px, ${mouseY - bigBallRadius}px)`;
      // Update the position of the small ball to be offset from the big ball
      smallBall.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`; // Center small ball on cursor

      requestAnimationFrame(updateCursorPosition);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    const onMouseHover = () => {
      bigBall.style.transform += ' scale(4)';
      // Adjust small ball scale when hovering
      smallBall.style.transform += ' scale(0.5)'; // Scale down for visual effect
    };

    const onMouseHoverOut = () => {
      bigBall.style.transform = bigBall.style.transform.replace(/ scale\(4\)/, '');
      smallBall.style.transform = smallBall.style.transform.replace(/ scale\(0.5\)/, ''); // Reset small ball scale
    };

    document.body.addEventListener('mousemove', onMouseMove);

    const hoverables = document.querySelectorAll('.hoverable');
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener('mouseenter', onMouseHover);
      hoverable.addEventListener('mouseleave', onMouseHoverOut);
    });

    requestAnimationFrame(updateCursorPosition);

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener('mouseenter', onMouseHover);
        hoverable.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" />
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
