import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText = ({ text, className = '' }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100); // Speed of typing each letter

      return () => clearTimeout(timeout);
    } else {
      // Show blinking cursor for 5 seconds, then restart
      const restartTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 5000);

      return () => clearTimeout(restartTimeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-0.5 h-8 md:h-12 lg:h-14 bg-primary ml-1 animate-pulse" />
    </span>
  );
};

export default TypewriterText;
