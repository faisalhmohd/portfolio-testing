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

function ServiceList() {
  return (
    <div className="nv-NavMenu-ServiceList">
      <div className="nv-NavMenu-ServiceList-default">
        <span>
          Service
        </span>
      </div>
    </div>
  );
}

function NavMenu({ isMenuVisible }) {
  const [ hoveredItem, setHoveredItem ] = useState(false);
  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`}>
      <MenuItems hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      <ServiceList />
    </div>
  );
}

export default NavMenu;
