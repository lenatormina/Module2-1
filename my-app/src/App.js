import React from 'react';
import logo from './logo.svg';
import './App.css';

// Императивный стиль
const date = new Date();

// Декларативный стиль
export const App = () => {
	const appElement = React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			// Создаем p-элемент
			React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			// Создаем a-элемент
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			// Создаем div-элемент для отображения текущего года
			React.createElement(
				'div',
				null,
				React.createElement(
					'span',
					{ id: 'Year' },
					React.createElement('code', null, date.getFullYear()),
				),
			),
		),
	);
	return appElement;
};
