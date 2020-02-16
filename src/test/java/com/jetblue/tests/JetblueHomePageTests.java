package com.jetblue.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class JetblueHomePageTests extends BaseTest{
	
	public JetblueHomePageTests() throws Exception {
		super();
	}
	
	@Test(priority=1)
	public void verifyLogo() throws Exception{
		Thread.sleep(3000);
		jetHomePageObj.clickLogo();
		String actual=driver.getCurrentUrl();
		Assert.assertEquals("https://www.jetblue.com/", actual);
	}
	
	@Test(priority=2)
	public void verifyBookNavigation() throws Exception{
		jetHomePageObj.clickLogo();
		Thread.sleep(3000);
		jetHomePageObj.clickMenuLink("Flight Tracker");
		Thread.sleep(2000);
		String actual=jetHomePageObj.getHeading();
		Assert.assertEquals("Flight Tracker", actual);
	}
	
	@Test(priority=3)
	public void verifyExploreNavigation() throws Exception{
		jetHomePageObj.clickLogo();
		Thread.sleep(3000);
		jetHomePageObj.clickMenuLink("Travel Alerts");
		Thread.sleep(2000);
		String actual=jetHomePageObj.getHeading();
		Assert.assertEquals("Travel Alerts", actual);
	}
	
	@Test(priority=4)
	public void verifyTravelInfoNavigation() throws Exception{
		jetHomePageObj.clickLogo();
		Thread.sleep(3000);
		jetHomePageObj.clickMenuLink("Travel Info");
		Thread.sleep(2000);
		jetHomePageObj.clickMenuLink("Flying with Us");
		Thread.sleep(3000);
		String actual=jetHomePageObj.getHeading();
		Assert.assertEquals("Flying with Us", actual);
	}
	@Test(priority=5)
	public void verifyTrueBlueNavigation() throws Exception{
		jetHomePageObj.clickLogo();
		Thread.sleep(3000);
		jetHomePageObj.clickMenuLink("TrueBlue");
		Thread.sleep(2000);
		jetHomePageObj.clickMenuLink("Reasons to Join");
		Thread.sleep(3000);
		String actual=jetHomePageObj.getHeading();
		Assert.assertEquals("Join TrueBlue. Earn points. Get rewards. ", actual);
	}
	
	@Test(priority=6)
	public void verifyMyTripNavigation() throws Exception{
		jetHomePageObj.clickLogo();
		Thread.sleep(3000);
		jetHomePageObj.clickMenuLink("My Trips");
		Thread.sleep(2000);
		jetHomePageObj.clickMenuLink("Manage Trips");
		Thread.sleep(3000);
		String actual=jetHomePageObj.getHeading();
		Assert.assertEquals("Manage your flight", actual);
	}
	

	
	
	
	
}
