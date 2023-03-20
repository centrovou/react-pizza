import React from 'react';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriyId, setCategoriyId] = React.useState(0);
  const [cuPage, setCuPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sort: 'rating',
  });

  React.useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : '';
    setIsLoading(true);
    fetch(
      `https://6405f9b140597b65de46da0e.mockapi.io/items?page=${cuPage}&limit=4&${
        categoriyId > 0 ? `category=${categoriyId}` : ''
      }${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriyId, sortType, searchValue, cuPage]);
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoriyId} onClickCategories={(i) => setCategoriyId(i)} />
        <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChaPage={(Number) => setCuPage(Number)} />
    </div>
  );
};

export default Home;
