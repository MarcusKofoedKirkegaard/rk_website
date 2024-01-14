import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLines = 3 }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const style: React.CSSProperties = {
    overflow: 'hidden',
    position: 'relative',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    maxHeight: expanded ? 'none' : maxLines * 1.2 + 'em', // Adjust the lineHeight based on your font size
  };

  const gradientStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2em', // Adjust the fade height based on your design
    background: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 90%)`,
  };

  return (
    <div>
      <Typography variant="body1" style={style}>
        {text}
        {!expanded && <div style={gradientStyle}></div>}
      </Typography>
      {!expanded && (
        <Button onClick={toggleExpanded} color="primary">
          Read More
        </Button>
      )}
      {expanded && (
        <Button onClick={toggleExpanded} color="secondary">
          Read Less
        </Button>
      )}
    </div>
  );
};

export default ExpandableText;
