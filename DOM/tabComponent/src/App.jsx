import React, { useState } from 'react'

import './App.css'

function Tab({ children }) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <div>
      <div className='tab-list'>
        {React.Children.map(children, (child, index) => {
          const isActive = index === activeTab
          return (
            <>
              <div
                onClick={() => handleTabClick(index)}
                className={isActive ? 'active' : ''}
              >
                {child.props.label}
              </div>
            </>
          )
        })}
      </div>
      <div className='tab-content'>
        {React.Children.map(children, (child, index) => {
          const isActive = index === activeTab
          return (
            <>
              <div>{isActive && child}</div>
            </>
          )
        })}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Tab>
        <div label='Tab 1'>Content for Tab 1</div>
        <div label='Tab 2'>Content for Tab 2</div>
        <div label='Tab 3'>Content for Tab 3</div>
      </Tab>
    </>
  )
}

export default App
