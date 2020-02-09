package com.ebay.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class AddToCartPageTests extends BaseTest{
	
	public AddToCartPageTests() throws Exception {
		super();
	}
	
	@Test(priority=1)
	public void verifySignInPageOption(){
		signInPageObj.clickSignInLink();
		String actual=driver.getCurrentUrl();
		if(actual.contains("signin.ebay.com")){
			Assert.assertTrue(true);
		}else{
			Assert.assertTrue(false);

		}
	}
	
}
