import Employee from '../models/employeeModel'
import url from 'url'

const data = [{
    id: 1,
    name: 'xyz',
    dateOfBirth: '2015-03-25',
    salary: 100,
    skills: ['a', 'b', 'c']
},
{
    id: 2,
    name: 'pqr',
    dateOfBirth: '2015-03-25',
    salary: 500,
    skills: ['a', 'b', 'c']
},
{
    id: 3,
    name: 'xye',
    dateOfBirth: '2015-03-25',
    salary: 300,
    skills: ['r', 'g', 'b']
}]
let createRecord = {
    id: 3,
    name: 'xye',
    dateOfBirth: '2015-03-25',
    salary: 300,
    skills: ['r', 'g', 'b']
}

export const all = (req, res) => {
    // res.json(Employee.find())
    res.json(data)
};

// export const employee_create_get = function(req, res) {
// };

export const employee_create_post = function (req, res) {
    // Employee.create(req.body,(err, result) => res.send('record created'))
    Employee.create(createRecord, (err, result) => res.send('record created'))
};

export const employee_delete_get = function (req, res) {
    let q = url.parse(req.url, true)
    let qdata = q.query
    Employee.findByIdAndDelete(qdata.id, (err, result) => res.send('record deleted'))
};

// export const employee_delete_post = function(req, res) {
// };

// export const employee_update_get = function(req, res) {
// };

export const employee_update_post = function (req, res) {
    let q = url.parse(req.url, true)
    let qdata = q.query
    Employee.findByIdAndUpdate(qdata.id, req.body, (err, result) => res.send('record updated'))

};

export const employee_detail = function (req, res) {
    let q = url.parse(req.url, true)
    let qdata = q.query
    res.json(Employee.findById(qdata.id))
};

// export const employee_list = function(req, res) {
// };