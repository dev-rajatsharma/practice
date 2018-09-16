// var express = require('express');
import express from 'express'
const router = express.Router();

// import controller modules.
import {
    all, employee_create_get, employee_create_post, employee_delete_get, employee_delete_post,
    employee_update_get, employee_update_post, employee_detail, employee_list
} from '../controllers/employeeController';

/// employee ROUTES ///

// GET employee home page.
router.get('/employee/all', all);

// GET request for creating an employee. NOTE This must come before routes that display employee (uses id).
// router.get('/employee/create', employee_create_get);

// POST request for creating employee.
router.post('/employee/add', employee_create_post);

// GET request to delete employee.
router.get('/employee/delete', employee_delete_get);

// POST request to delete employee.
// router.post('/employee/delete', employee_delete_post);

// GET request to update employee.
// router.get('/employee/update', employee_update_get);

// POST request to update employee.
router.post('/employee/update', employee_update_post);

// GET request for one employee.
router.get('/employee', employee_detail);

// GET request for list of all employee items.
// router.get('/employees', employee_list);

export default router