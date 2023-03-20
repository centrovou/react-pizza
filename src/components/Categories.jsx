import React from 'react';

const Catagories = ({ value, onClickCategories }) => {
  const сategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {сategories.map((categoriyName, i) => (
          <li key={i} onClick={() => onClickCategories(i)} className={value === i ? 'active' : ''}>
            {categoriyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catagories;
