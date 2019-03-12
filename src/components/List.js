import React, { PureComponent } from 'react';

class List extends PureComponent {
  render() {
    const {
      show,
      prods,
      handleBuy,
      handleSeeList,
      handleReset
    } = this.props
    const productions = ['雞肉鍋', '牛肉鍋', '豬肉鍋', '海鮮鍋']
    return (
      <div>
        <h1>{prods.length}</h1>
        <hr />
        <ul>
          {productions.map((ele, idx) => (
            <li key={idx}>{ele}
              <button type="button" onClick={() => handleBuy(ele)}>+</button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleReset}
        >
          reset
        </button>
        <button
          type="button"
          onClick={handleSeeList}
        >
          See List
        </button>
        {show ? <div>{prods}</div> : null}
      </div>
    );
  }
}

export default List;