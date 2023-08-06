import React from 'react'
import '../Block/Block.css'
function Block({ value, currency, onChangeValue, onChangeCurrency }) {
    const defaultCurrencies = ['AMD', 'RUB', 'EUR', 'USD', 'GBP'];
    return (
        <div className='block'>
            <ul className='currencies'>
                {
                    defaultCurrencies.map((cur) => (
                        <li
                            onClick={() => onChangeCurrency(cur)}
                            className={currency === cur ? 'active' : ''}
                            key={cur}>
                            {cur}

                        </li>
                    ))
                }
            </ul>
            <input
                onChange={(e) => onChangeValue(e.target.value)}
                value={value}
                type='number'
                placeholder={0} />

        </div>
    )
}

export default Block