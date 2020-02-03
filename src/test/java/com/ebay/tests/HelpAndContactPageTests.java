package com.ebay.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class HelpAndContactPageTests extends BaseTest{
	
	public HelpAndContactPageTests() throws Exception {
		super();
	}
	
	@Test(priority=1)
	public void verifyHelpPageUrl(){
		helpPageObj.clickHelpLink();
		String actual = driver.getCurrentUrl();
		Assert.assertEquals("https://www.ebay.com/help/home", actual);
	}
	
	@Test(priority=2)
	public void verifyHelpPageHeading(){
		helpPageObj.clickHelpLink();
		String actual = helpPageObj.getHelpHeading();
		Assert.assertEquals("Customer Service", actual);
	}
	
	@Test(priority=3)
	public void verifyHelpSearch() throws Exception{
		helpPageObj.enterHelp("Seller");
		Thread.sleep(3000);
		helpPageObj.clickSearchIcon();
		String actual = helpPageObj.getSearchTitle();
		Assert.assertEquals("Seller Help", actual);
	}
	
	@Test(priority=4)
	public void verifyHelpBreadCrum() throws Exception{
		String actual = helpPageObj.getHelpBreadcrum();
		System.out.println(actual);
		Assert.assertEquals("Home\nHelp\nSelling\nSeller Help", actual);
	}
		
	@Test(priority=5)
	public void verifyDailyDealsUrl(){
		helpPageObj.clickDailyDeal();
		String actual = driver.getCurrentUrl();
		Assert.assertEquals("https://www.ebay.com/globaldeals", actual);
	}
	
}
