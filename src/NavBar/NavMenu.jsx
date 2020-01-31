import React, { useState } from 'react';

function MenuItems({ hoveredItem, setHoveredItem, setCurrentMousePosition }) {
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
                onMouseMove={e => { e.persist(); setCurrentMousePosition({ x: e.clientX, y: e.clientY }) }}
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

function ImageDistortion({ hoveredItem, currentMousePosition }) {
  const images = [
    {
      hoveredItem: 'Helias',
      imageHref: 'images/project-thumb-helias.jpg'
    },
    {
      hoveredItem: 'Hoboken Yogi',
      imageHref: 'images/project-thumb-hy.jpg'
    },
    {
      hoveredItem: 'Buzzworthy',
      imageHref: 'images/project-thumb-buzzworthy.jpg'
    },
    {
      hoveredItem: 'Gatto',
      imageHref: 'images/project-thumb-gatto.jpg'
    },
    {
      hoveredItem: 'Snooze',
      imageHref: 'images/project-thumb-snooze.jpg'
    },
  ];

  return (
    <div
      className="nv-NavMenu-ImageDistortion-wrapper"
    >
      <svg
        className="nv-NavMenu-ImageDistortion"
        width="600"
        height="428"
        viewBox="0 0 600 500"
        style={{
          transform: `translateX(${currentMousePosition.x}px) translateY(${currentMousePosition.y}px)`}}>
        <filter id="imageDistortionFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.003" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.29143e-13" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></feDisplacementMap>
        </filter>
        <g filter="url(#imageDistortionFilter)" x="0" y="0">
          {images.map(image => {
            const isCurrentItemHovered = hoveredItem && hoveredItem === image.hoveredItem;
            return (
              <image
                xlinkHref={ image.imageHref }
                style={{ opacity: isCurrentItemHovered ? 0.6 : 0 }}
                key={image.hovered}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

function NavMenu({ isMenuVisible }) {
  const [ hoveredItem, setHoveredItem ] = useState(false);
  const [ currentMousePosition, setCurrentMousePosition ] = useState({ x: 0, y: 0 });

  return (
    <div className={`nv-NavMenu ${ isMenuVisible && 'visible' }`}>
      <MenuItems
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
        setCurrentMousePosition={setCurrentMousePosition}
      />
      <ServiceList hoveredItem={hoveredItem} />
      <MenuItemIndex hoveredItem={hoveredItem} />
      <ImageDistortion
        hoveredItem={hoveredItem}
        currentMousePosition={currentMousePosition}
      />
    </div>
  );
}

export default NavMenu;
