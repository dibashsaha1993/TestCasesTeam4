package com.ebay.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class SignInPageTests extends BaseTest{
	
	public SignInPageTests() throws Exception {
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
	
	@Test(priority=2)
	public void verifyFbAndGoogleBtn() throws Exception{
		Thread.sleep(5000);
		try{
			WebDriverWait wait=new WebDriverWait(driver, 20);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[text()='Click to verify']")));
			driver.findElement(By.xpath("//*[text()='Click to verify']")).click();
		}catch(Exception e){
			
		}
		boolean actual=signInPageObj.verifyFbAndGoogleBtn();
		Assert.assertEquals(true, actual);
	}
	
	@Test(priority=3)
	public void verifyFbPopup() throws Exception{
		String parent=driver.getWindowHandle();
		signInPageObj.clickFbBtn();
		for(String child:driver.getWindowHandles()){
			driver.switchTo().window(child);
		}
		String actual=driver.getCurrentUrl();
		driver.switchTo().window(parent);
		if(actual.contains("www.facebook.com")){
			Assert.assertTrue(true);
		}else{
			Assert.assertTrue(false);
		}
	}
	
	@Test(priority=4)
	public void verifyGooglePopup() throws Exception{
		String parent=driver.getWindowHandle();
		signInPageObj.clickGoogleBtn();
		for(String child:driver.getWindowHandles()){
			driver.switchTo().window(child);
		}
		String actual=driver.getCurrentUrl();
		driver.switchTo().window(parent);
		if(actual.contains("www.facebook.com")){
			Assert.assertTrue(true);
		}else{
			Assert.assertTrue(false);
		}
	}

	@Test(priority=5)
	public void verifyUserAgreement() throws Exception{
		Thread.sleep(3000);
		signInPageObj.clickLogo();
		signInPageObj.clickSignInLink();
		Thread.sleep(3000);
		String parent=driver.getWindowHandle();
		signInPageObj.clickUserAgreement();
		for(String child:driver.getWindowHandles()){
			driver.switchTo().window(child);
		}
		Thread.sleep(3000);
		String actual=signInPageObj.getAgreementHeading();
		driver.switchTo().window(parent);
		Assert.assertEquals("User Agreement", actual);
	}
	
	@Test(priority=6)
	public void verifyUserPolicy() throws Exception{
		Thread.sleep(3000);
		signInPageObj.clickLogo();
		signInPageObj.clickSignInLink();
		Thread.sleep(3000);
		String parent=driver.getWindowHandle();
		signInPageObj.clickUserPolicy();
		for(String child:driver.getWindowHandles()){
			driver.switchTo().window(child);
		}
		Thread.sleep(3000);
		String actual=signInPageObj.getPolicyHeading();
		driver.switchTo().window(parent);
		Assert.assertEquals("User Privacy Notice", actual);
	}
	
}
