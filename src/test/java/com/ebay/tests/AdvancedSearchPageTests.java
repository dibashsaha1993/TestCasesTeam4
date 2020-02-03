package com.ebay.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import com.ebay.pages.HomePage;
import com.web.common.utils.BaseTest;

import junit.framework.Assert;

public class AdvancedSearchPageTests extends BaseTest{
	
	public AdvancedSearchPageTests() throws Exception {
		super();
	}
	
	@Test
	public void verifyAdvanceSearchOption(){
		advanceSearchPageObj.clickAdvancedLink();
		boolean actual = advanceSearchPageObj.verifyOption();
		Assert.assertEquals(true, actual);
	}
	
	@Test
	public void verifyFindByItem(){
		String searchVal="Gibson 2004 USA Cherry Flying V Faded Body & Neck";
		homePageObj.clickLogo();
		advanceSearchPageObj.clickAdvancedLink();
		advanceSearchPageObj.searchByItem(searchVal);
		boolean actual=advanceSearchPageObj.getSearchResTxt(searchVal);
		Assert.assertEquals(true, actual);
	}
	
	@Test
	public void verifyFindByItemNumber() throws Exception{
		String searchVal="Champion T Shirt Crewneck Men's Double Dry Heather Tee Short Sleeve Blank Plain";
		homePageObj.clickLogo();
		advanceSearchPageObj.clickAdvancedLink();
		Thread.sleep(3000);
		advanceSearchPageObj.clickFindItemNumLink();
		Thread.sleep(3000);
		advanceSearchPageObj.searchByItemNumber("303373368368");
		WebDriverWait wait=new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h3[@class='s-item__title']")));
		Thread.sleep(3000);
		boolean actual=advanceSearchPageObj.getSearchResTxt(searchVal);
		Assert.assertEquals(true, actual);
	}
	
	@Test
	public void verifyFindBySeller() throws Exception{
		String searchVal="gibsondependable";
		homePageObj.clickLogo();
		advanceSearchPageObj.clickAdvancedLink();
		Thread.sleep(3000);
		advanceSearchPageObj.clickBySeller();
		advanceSearchPageObj.typeSeller(searchVal);
		Thread.sleep(3000);
		boolean actual=advanceSearchPageObj.getSearchResTxt(searchVal);
		Assert.assertEquals(true, actual);
	}
	
	@Test
	public void verifyOptionsinAdvancedSearch() throws Exception{
		homePageObj.clickLogo();
		advanceSearchPageObj.clickAdvancedLink();
		Thread.sleep(3000);
		
		boolean actual=advanceSearchPageObj.verifyTextPresent("Enter keywords or item number");
		Assert.assertEquals(true, actual);
		
		boolean actual1=advanceSearchPageObj.verifyTextPresent("Search including");
		Assert.assertEquals(true, actual1);
		
		boolean actual2=advanceSearchPageObj.verifyTextPresent("Price");
		Assert.assertEquals(true, actual2);
		
		boolean actual3=advanceSearchPageObj.verifyTextPresent("Buying formats");
		Assert.assertEquals(true, actual3);
		
		boolean actual4=advanceSearchPageObj.verifyTextPresent("Condition");
		Assert.assertEquals(true, actual4);
		
		boolean actual5=advanceSearchPageObj.verifyTextPresent("Show results");
		Assert.assertEquals(true, actual5);
		
	}
	
	
}
