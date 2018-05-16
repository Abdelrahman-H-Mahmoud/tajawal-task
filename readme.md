[![Build Status](https://travis-ci.org/abdelrahmanahmed/tajawal-task.svg?branch=master)](https://travis-ci.org/abdelrahmanahmed/tajawal-task)
<a href="https://codeclimate.com/github/abdelrahmanahmed/tajawal-task/maintainability"><img src="https://api.codeclimate.com/v1/badges/f9e10d4e020cb90f5a4c/maintainability" /></a>

# Description
This repository is created to fetch hotels data from Tajawal api and apply search and sorting on this data . 

# Requirements
- npm
- node > 9
# Installation
```
npm install && npm start
```
# Notes
- filter criterias are `name ,price,city,date(availability)`
- `price` and `date` criteria accept range format, for example : `120:150` and `10-10-2020:15-10-2020`
# Usage
- To fetch all hotels use `/hotels` endpoint
- To filter hotels with a criteria add query paramater after `/hotels` endpoint `/hotels?name=Concorde Hotel`
- To sort hotels add add query paramater `sort_by` after `/hotels`
- To search and sort `http://localhost:3000/hotels?price=50:200&sort_by=price`

### Full example 
- Get hotel details by name `http://localhost:3000/hotels?name=Concorde%20Hotel`
- Get hotel details by price and city `http://localhost:3000/hotels?price=102.2&city=dubai`
- Sort hotels by price `http://localhost:3009/hotels?sort_by=name`

### Assumptions
- If you searched a hotel by name (ex :`Dubai`) , the word Dubai will be converted to lowercase letters `dubai` (better user experience)

# Testing
```
npm test
```
# Todo
- [ ] Add better error handling
- [ ] Validation 
- [ ] Date Range search (availability)

