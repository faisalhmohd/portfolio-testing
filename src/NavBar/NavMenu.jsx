import React, { useState } from 'react';

function MenuItems({ hoveredItem, setHoveredItem }) {
  const items = [
    'Helias',
    'Hoboken Yogi',
    'Buzzworthy',
    'Gatto',
    'Snooze'
  ];

  return (
    <ul className="nv-NavMenu-items">
      {items.map(item => {
        const isAnyItemHovered = hoveredItem;
        const isCurrentItemHovered = hoveredItem && hoveredItem === item;

        let itemClassName = '';
        if (isCurrentItemHovered) {
          itemClassName = 'hovered';
        }
        else if (isAnyItemHovered) {
          itemClassName = 'faded';
        }

        return (
          <React.Fragment key={item}>
            <li>
              <a
                className={itemClassName}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(false)}
              >
                { item }
              </a>
            </li>
            <br />
          </React.Fragment>
        );
      })}
    </ul>
  );
}

function ServiceList({ hoveredItem }) {
  const serviceLists = [
    {
      key: 'one',
      hoveredItem: 'Helias',
      values: [
        'User Experience',
        'Web Design',
        'Interactive'
      ]
    },
    {
      key: 'two',
      hoveredItem: 'Hoboken Yogi',
      values: [
        'Art Direction',
        'User Experience',
        'Web Design',
        'Interactive',
        'Front-end'
      ]
    },
    {
      key: 'three',
      hoveredItem: 'Buzzworthy',
      values: [
        'Brand Strategy',
        'Brand Design',
        'Art Direction',
        'User Experience',
        'Web Design',
        'Interactive',
        'Front-end'
      ]
    },
    {
      key: 'four',
      hoveredItem: 'Gatto',
      values: [
        'Art Direction',
        'User Experience',
        'Web Design'
      ]
    },
    {
      key: 'five',
      hoveredItem: 'Snooze',
      values: [
        'Brand Strategy',
        'Brand Design',
        'Art Direction',
        'User Experience',
        'Web Design'
      ]
    }
  ];

  return (
    <div className="nv-NavMenu-ServiceList">
      <div className={`nv-NavMenu-ServiceList-default ${ hoveredItem && 'hidden' }`}>
        <span>
          Service
        </span>
      </div>
      {serviceLists.map(serviceList => {
        const isCurrentItemHovered = hoveredItem && hoveredItem === serviceList.hoveredItem;

        return (
          <div
            className={`nv-NavMenu-ServiceList-items ${serviceList.key} ${ isCurrentItemHovered && 'visible' }`}
            key={serviceList.key}
          >
            {serviceList.values.map(value => (
              <div key={value}><span>{ value }</span></div>
            ))}
          </div>
        )
      })}
    </div>
  );
}

function MenuItemIndex({ hoveredItem }) {
  const indexes = [
    {
      hoveredItem: 'Helias',
      value: '01'
    },
    {
      hoveredItem: 'Hoboken Yogi',
      value: '02'
    },
    {
      hoveredItem: 'Buzzworthy',
      value: '03'
    },
    {
      hoveredItem: 'Gatto',
      value: '04'
    },
    {
      hoveredItem: 'Snooze',
      value: '05'
    }
  ];
  return (
    <div className="nv-NavMenu-MenuItemIndex">
      <span className={`nv-NavMenu-MenuItemIndex-default ${ hoveredItem && 'fade' }`}>05</span>
      {indexes.map(index => {
        const isCurrentItemHovered = hoveredItem && hoveredItem === index.hoveredItem;

        return (
          <span key={index.hoveredItem} className={isCurrentItemHovered ? 'visible' : ''}>{ index.value }</span>
        );
      })}
    </div>
  );
}

function NavMenu({ isMenuVisible }) {
  const [ hoveredItem, setHoveredItem ] = useState(false);
  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`}>
      <MenuItems hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      <ServiceList hoveredItem={hoveredItem} />
      <MenuItemIndex hoveredItem={hoveredItem} />
    </div>
  );
}

export default NavMenu;
