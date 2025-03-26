package com.sakshamSoftake.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sakshamSoftake.dao.EmployeeDao;
import com.sakshamSoftake.model.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public Employee saveEmployee(Employee employee) {
	
		return employeeDao.save(employee);
	}

	@Override
	public List<Employee> getEmployee() {
		// TODO Auto-generated method stub
		return employeeDao.findAll();
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		
		return employeeDao.save(employee);
	}

	@Override
	public void deleteEmployee(long parseLong) {
		// TODO Auto-generated method stub
		Employee employee=employeeDao.getOne(parseLong);
		employeeDao.delete(employee);
		
	}}
