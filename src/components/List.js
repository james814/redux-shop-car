import React, { PureComponent } from 'react';

class List extends PureComponent {
  render() {
    const {
      price,
      handleBuy,
      handleReset
    } = this.props
    const productions = [
      {
        name: '雞肉鍋',
        price: 90
      },
      {
        name: '牛肉鍋',
        price: 120
      },
      {
        name: '豬肉鍋',
        price: 100
      },
      {
        name: '海鮮鍋',
        price: 140
      }
    ]
    return (
      <div>
        <h1>$: {price}</h1>
        <hr />
        <ul>
          {productions.map((ele) => (
            <li key={ele.name}>{ele.name}: {ele.price}
              <button type="button" onClick={() => handleBuy(ele.price)}>+</button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleReset}
        >
          reset
        </button>
      </div>
    );
  }
}

export default List;