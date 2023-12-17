import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },

                {
                    key: 'Gucci',
                    name: 'Gucci'
                },

                {
                    key: 'Louis Vuitton',
                    name: 'Louis Vuitton'
                },
                {
                    key: 'Albione',
                    name: 'Albione'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el =>(
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories