import React, { useState } from 'react';

interface ListProps {
  list: string[];
  filterItems: (category: string) => void;
}

const List: React.FC<ListProps> = ({ list, filterItems }: ListProps) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="portfolio__list">
        {list.map((category: any, index: any) => (
          <button
            className={`${active === index ? 'active-work' : ''} portfolio__list-item text-cs`}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default List;
