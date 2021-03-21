import React, { useState } from 'react';
import Header from '../components/header'
import Table from '../components/table'
import Form from '../components/form'
import heading from '../components/data/stock-heading'
import stocks from '../components/data/stocks'
import socials from '../components/data/socials'
import { getMinDate,
         getDatesBetween,
         stockPriceGenerator,
         socialMediaCountGenerator,
         recommendationAlgorithm } from '../components/common/functions'

const StockRecommender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateRange, setDateRange] = useState([]);
  const [selectedStock, setSelectedStock] = useState('');
  const [selectedSocial, setSelectedSocial] = useState('');
  const [newStock, setNewStock] = useState([]);

  const mockData = [
    {
      data: stocks,
      type: 'Stock',
    },
    {
      data: socials,
      type:'Social Media',
    }
  ];

  const handleDate = (e) => {
    setSelectedDate(e);
    setDateRange(getDatesBetween(getMinDate(9), e));
  };

  const handleSelected = (e) => {
    switch(e.target.name) {
      case 'Stock':
        setSelectedStock(e.target.value);
        break;
      case 'Social Media':
        setSelectedSocial(e.target.value);
        break;
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newData = dateRange.map(date => {
      return {
        date: date,
        symbol: selectedStock,
        price: stockPriceGenerator(),
        socials: socialMediaCountGenerator(),
      };
    });
    handleRating(newData);
  };

  const handleRating = async (data) => {
    const addRating = await data.map(item => {
      return {
        ...item,
        rating: recommendationAlgorithm(item.price, item.socials),
      }
    })
    setNewStock(addRating);
  };

  return (
    <section className="my-5 w-75 mx-auto" role="contentinfo">
      <Header />
      <Form
        minDate={0}
        selectedDate={selectedDate}
        dropdown={mockData}
        handleDate={handleDate}
        handleSelected={handleSelected}
        handleSubmitForm={handleSubmitForm}
      />
      <Table header={heading} data={newStock} />
    </section>
  );
};

export default StockRecommender;
