import React from 'react';

interface ColorSwitcherItemProps {
  color: string;
  img: string;
  changeColor: (color: string) => void;
}

const ColorSwitcherItem: React.FC<ColorSwitcherItemProps> = ({ color, img, changeColor }) => {
  return (
    <>
      <img
        src={img}
        alt="color-img"
        className="color__img"
        onClick={() => changeColor(color)}
      />
    </>
  );
};

export default ColorSwitcherItem;