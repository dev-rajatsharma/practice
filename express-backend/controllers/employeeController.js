import Employee from '../models/employeeModel'
// import mongoose from 'mongoose'
// let Employee = mongoose.model('Employee')
import url from 'url'

// const data = [{
//     id: 1,
//     name: 'xyz',
//     dateOfBirth: '2015-03-25',
//     salary: 100,
//     skills: ['a', 'b', 'c']
// },
// {
//     id: 2,
//     name: 'pqr',
//     dateOfBirth: '2015-03-25',
//     salary: 500,
//     skills: ['a', 'b', 'c']
// },
// {
//     id: 3,
//     name: 'xye',
//     dateOfBirth: '2015-03-25',
//     salary: 300,
//     skills: ['r', 'g', 'b']
// }]
let createRecord = {
    name: 'xye',
    dateOfBirth: '2015-03-25',
    salary: 300,
    skills: ['skill1']
}

export const all = (req, res) => {
    Employee.find({}, (err,result)=>{
        res.send(result)
    })
    // res.json(data)
};

// export const employee_create_get = function(req, res) {
// };

export const employee_create_post = (req, res) => {
    // Employee.create(req.body,(err, result) => res.send('record created'))
    let user = new Employee(req.body)
    user.save((err, result) => {
        if(err) res.send(err)
        res.send(result)
    })
};

export const employee_delete_get = (req, res) => {
    let q = url.parse(req.url, true)
    let qdata = q.query
    Employee.findByIdAndDelete(qdata.id, (err, result) => {
        if(err) res.send(err)
        res.send(result)
    })
};

export const employee_update_post = (req, res) => {
    let q = url.parse(req.url, true)
    let qdata = q.query
    console.log(qdata)
    Employee.findByIdAndUpdate(qdata.id, req.body, (err, result) => {
        if(err) res.send(err)
        res.send(result)
    })

};

export const employee_detail = (req, res) => {
    let q = url.parse(req.url, true)
    let qdata = q.query
    Employee.findById(qdata.id, (err,result)=>{
        if(err) res.send(err)
        res.send(result)
    })
};