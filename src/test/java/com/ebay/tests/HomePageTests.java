package com.ebay.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class HomePageTests extends BaseTest{
	
	public HomePageTests() throws Exception {
		super();
	}
	
	@Test
	public void verifyLogo(){
		homePageObj.clickLogo();
		String actual=driver.getCurrentUrl();
		Assert.assertEquals("https://www.ebay.com/", actual);
	}
	
	@Test
	public void validateSearch(){
		homePageObj.searchTxt("watches");
		homePageObj.clickSearchBtn();
		String autual=homePageObj.getSearchTxt();
		if(autual.contains("results for watches")){
			Assert.assertTrue(true);
		}else{
			Assert.assertTrue(false);
		}
	}
	
	@Test
	public void validateCategoryOption(){
		homePageObj.clickSearchCat();
		boolean actual=homePageObj.verifyCatOption();
		Assert.assertEquals(true, actual);
	}
	
	@Test
	public void validatelinkBySearchCat(){
		homePageObj.clickSearchCat();
		homePageObj.clickCatLink();
		WebDriverWait wait=new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[@class='b-pageheader']")));
		String actual= homePageObj.getPageHeadingTxt();
		Assert.assertEquals("Electronics", actual);
	}
	
	@Test
	public void validateBreadCrum(){
		homePageObj.clickSearchCat();
		homePageObj.clickCatLink();
		WebDriverWait wait=new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[@class='b-pageheader']")));
		String actual= homePageObj.getBreadCrum();
		Assert.assertEquals("eBayElectronics", actual);
	}
	
	
}
