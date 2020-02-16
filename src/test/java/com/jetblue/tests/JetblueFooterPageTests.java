package com.jetblue.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class JetblueFooterPageTests extends BaseTest{
	
	public JetblueFooterPageTests() throws Exception {
		super();
	}
	
	@Test(priority=1)
	public void verifyOurCompany() throws Exception{
		Thread.sleep(3000);
		jetHomePageObj.clickLogo();
		Thread.sleep(3000);
		jetHomePageObj.clickMenuLink("Our Company");
		String actual=driver.getCurrentUrl();
		Assert.assertEquals("https://www.jetblue.com/our-company", actual);
	}
	
	@Test(priority=2)
	public void verifyOurPlanes() throws Exception{
		Thread.sleep(3000);
		jetHomePageObj.clickLogo();
		Thread.sleep(3000);
		jetHomePageObj.clickMenuLink("Our Planes");
		String actual=driver.getCurrentUrl();
		Assert.assertEquals("https://www.jetblue.com/flying-with-us/our-planes", actual);
	}
	
	@Test(priority=3)
	public void verifyPartnerAirlines() throws Exception{
		Thread.sleep(3000);
		jetHomePageObj.clickLogo();
		Thread.sleep(3000);
		jetHomePageObj.clickMenuLink("Partner Airlines");
		String actual=driver.getCurrentUrl();
		Assert.assertEquals("https://www.jetblue.com/airline-partners", actual);
	}
	
	
	
}
