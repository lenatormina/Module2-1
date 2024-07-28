import React from 'react';
import styles from './app.module.css';
import './App.css';
import { useState } from 'react';

export const App = () => {
	// для ввода значения
	const [value, setValue] = useState('');
	// для элементов списка
	const [list, setList] = useState([]);
	// для текста ошибки
	const [error, setError] = useState('');

	const [isValueValid, setisValueValid] = useState(true);

	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение');
		if (promptValue === null) {
			return; // пользователь нажал "Отмена"
		}
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setisValueValid(false);
			setValue('');
			return;
		} else {
			setValue(promptValue);
			setError('');
			setisValueValid(true);
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid && value) {
			const id = Date.now();
			const updateList = [...list, { id, value, date: new Date() }];
			setList(updateList);
			setValue('');
			setError('');
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error && <div className={styles['error']}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button onClick={onInputButtonClick} className={styles.button}>
					Ввести новое
				</button>
				<button
					onClick={onAddButtonClick}
					className={styles.button}
					disabled={!isValueValid}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 ? (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{list.map(({ id, value, date }) => (
							<li key={id} className={styles['list-item']}>
								{value}
								<br />
								(Дата добавления: {date.toLocaleString()})
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
