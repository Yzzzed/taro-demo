import React, { FC, useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import moment from 'moment'
import { AtSearchBar, AtCard, AtFab, AtCalendar } from 'taro-ui'
import './index.styl'

const DATEFORMAT = 'YYYY/MM/DD'

const Index: FC<{}> = () => {
	const cards = [
		{title: 'title1', content: 'content1'},
		{title: 'title2', content: 'content2'},
		{title: 'title3', content: 'content3'}
	]
	/* state */
	const [searchText, setSearchText] = useState('')
	const [selectedDate, setSelectedDate] = useState(moment(Date.now()).format(DATEFORMAT))
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(false)
	}, [selectedDate])

	const handleShowChange = () => {
		setShow(!show)
	}
	const handleSearchChange = (value) => {
		setSearchText(value)
	}

	const handleSelectDateChange = (date) => {
		setSelectedDate(moment(date.value).format(DATEFORMAT))
	}

	const showCalendar = () => {
		if(show) return <AtCalendar isVertical onDayClick={(date) => handleSelectDateChange(date)} />
		return null
	}

	return (
		<View className="index">
			<AtSearchBar value={searchText} onChange={handleSearchChange}></AtSearchBar>
			<View className="date-title" onClick={handleShowChange}>{selectedDate}</View>
			{showCalendar()}
			<View className="card-container">
				{cards.map(card => (
					<AtCard className="card" title={card.title} key={card.title}>{card.content}</AtCard>
				))}
			</View>
			<AtFab className="fab">
				<Text className="at-fab__icon at-icon at-icon-add"></Text>
			</AtFab>
		</View>
	)
}

export default Index
