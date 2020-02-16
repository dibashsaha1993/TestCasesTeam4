package com.jetblue.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class JetblueSigninPageTests extends BaseTest{
	
	public JetblueSigninPageTests() throws Exception {
		super();
	}
	
	@Test(priority=1)
	public void verifySignIn() throws Exception{
		Thread.sleep(3000);
		jetSigninPageObj.clickMenuLink("Sign in");
		Thread.sleep(3000);
		String actual=jetSigninPageObj.getHeading();
		Assert.assertEquals("Sign In", actual);
	}
	
	@Test(priority=2)
	public void validateEmptyEmail() throws Exception{
		jetSigninPageObj.enterUsername("");
		jetSigninPageObj.enterPassword("");
		jetSigninPageObj.clickSignInBtn();
		String actual=jetSigninPageObj.getUserError();
		Assert.assertEquals("Please enter your email to get started.", actual);
	}
	
	@Test(priority=3)
	public void validateInvalidEmail() throws Exception{
		jetSigninPageObj.enterUsername("test");
		jetSigninPageObj.enterPassword("");
		jetSigninPageObj.clickSignInBtn();
		String actual=jetSigninPageObj.getUserError();
		Assert.assertEquals("We need a valid email address.", actual);
	}
	
	@Test(priority=4)
	public void validateEmptyPassword() throws Exception{
		jetSigninPageObj.enterUsername("test@gmail.com");
		jetSigninPageObj.enterPassword("");
		jetSigninPageObj.clickSignInBtn();
		String actual=jetSigninPageObj.getPassError();
		Assert.assertEquals("Please enter your password", actual);
	}
	
	@Test(priority=5)
	public void validateInvalidEmailAndPass() throws Exception{
		jetSigninPageObj.enterUsername("test@gmail.com");
		jetSigninPageObj.enterPassword("test");
		jetSigninPageObj.clickSignInBtn();
		String actual=jetSigninPageObj.getEmailAndPassError();
		Assert.assertEquals("Either your username or password isn't right", actual);
	}
	
	
	
	
}
