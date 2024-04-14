import React from 'react';

const List = () => {
  const listItems = [
    {
      title: 'Payment Screening',
      description: 'Screen counterparties against sanctions lists in real-time',
    },
    {
      title: 'Customer Screening',
      description: 'Screen your customers (Country & sanction, PEP lists)',
    },
    {
      title: 'AML Transaction Monitoring',
      description: 'Alert to and investigate suspicious transactions based on ready-to-use or customized rules sets',
    },
    {
      title: 'Fraud Transaction Monitoring',
      description: 'Monitor transaction behavior to detect fraudulent patterns across all channels and payment methods',
    },
    {
      title: 'Customer Risk Rating',
      description: 'Flexible scoring of customers across multiple data points',
    },
  ];

  return (
    <ul className="list-disc">
      {listItems.map((item, index) => (
        <li key={index}>
          <a href="#" className="hover:underline focus:underline focus:border-b-2 focus:border-white active:underline cursor-pointer" style={{color:"#35ADF4"}}>
            {item.title}
          </a>
          - {item.description}
        </li>
      ))}
    </ul>
  );
};

export default List;

