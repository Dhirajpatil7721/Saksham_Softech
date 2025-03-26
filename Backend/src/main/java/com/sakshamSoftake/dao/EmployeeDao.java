package com.sakshamSoftake.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sakshamSoftake.model.Employee;




@Repository

public interface EmployeeDao extends JpaRepository<Employee,Long>{

	Employee getOne(long parseLong);

}

