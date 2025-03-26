package com.sakshamSoftake.service;

import java.util.List;

import com.sakshamSoftake.model.Employee;



public interface EmployeeService {

	public Employee saveEmployee(Employee employee);
	public List<Employee> getEmployee();
	public Employee updateEmployee(Employee employee);
	void deleteEmployee(long parseLong);
	

}
