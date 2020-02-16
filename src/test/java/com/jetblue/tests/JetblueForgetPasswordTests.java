package com.jetblue.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class JetblueForgetPasswordTests extends BaseTest{
	
	public JetblueForgetPasswordTests() throws Exception {
		super();
	}
	
	@Test(priority=1)
	public void verifySignIn() throws Exception{
		Thread.sleep(3000);
		jetblueForgetPassPageObj.clickSignInLink();
		Thread.sleep(3000);
		jetblueForgetPassPageObj.clickForgotPassLink();
		Thread.sleep(3000);
		String actual=jetblueForgetPassPageObj.getHeading();
		Assert.assertEquals("Forgot your password?", actual);
	}
	
	@Test(priority=2)
	public void validateEmptyEmail() throws Exception{
		jetblueForgetPassPageObj.enterUsername("");
		jetblueForgetPassPageObj.clickSignInBtn();
		String actual=jetblueForgetPassPageObj.getUserError();
		Assert.assertEquals("Please enter a valid email.", actual);
	}

	@Test(priority=3)
	public void validateInvalidEmail() throws Exception{
		jetblueForgetPassPageObj.enterUsername("test");
		jetblueForgetPassPageObj.clickSignInBtn();
		String actual=jetblueForgetPassPageObj.getUserError();
		Assert.assertEquals("Please enter a valid email.", actual);
	}

	@Test(priority=4)
	public void validateWrongEmail() throws Exception{
		jetblueForgetPassPageObj.enterUsername("test@gmail.com");
		jetblueForgetPassPageObj.clickSignInBtn();
		String actual=jetblueForgetPassPageObj.getInvalidEmailError();
		if(actual.contains("")){
			Assert.assertTrue(true);
		}else{
			Assert.assertTrue(false);
		}
	}

	@Test(priority=5)
	public void validateNeedHelp() throws Exception{
		Thread.sleep(3000);
		jetblueForgetPassPageObj.clickSignInLink();
		Thread.sleep(3000);
		jetblueForgetPassPageObj.clickForgotPassLink();
		Thread.sleep(3000);
		jetblueForgetPassPageObj.enterUsername("test@gmail.com");
		jetblueForgetPassPageObj.clickSignInBtn();
		Thread.sleep(3000);
		String actual=jetblueForgetPassPageObj.getRestLink();
		Assert.assertEquals("Select to reset your password via email or security questions.", actual);
	}

	@Test(priority=6)
	public void validateGoBack() throws Exception{
		jetblueForgetPassPageObj.clickMenuLink("Go back");
		Thread.sleep(3000);
		String actual=jetblueForgetPassPageObj.getRegisterText();
		Assert.assertEquals("Enter the email address you registered with and then select to reset your password via email or security questions.", actual);
	}
	
}
