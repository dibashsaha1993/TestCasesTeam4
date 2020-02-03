package com.amazon.tests.home;

import org.testng.annotations.Test;

import com.amazon.pages.login.HomePage;
import com.web.common.utils.BaseTest;

public  class MenuTests extends BaseTest{
	

	public MenuTests() throws Exception {
		super();
		// TODO Auto-generated constructor stub
	}

	HomePage homePageObj;
	
	@Test
	public void validateHeader(){
		homePageObj=new HomePage(driver);
		homePageObj.clickHeader();
	}

}
