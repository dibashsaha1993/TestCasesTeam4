package com.medicaid.tests;

import com.medicaid.FAQpage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class Medicaid_FAQpageTest {
    WebDriver driver;

    public FAQpage FaqPageobj;

    @BeforeTest
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "/Users/dibashsaha/Desktop/LearnSetupMaven/DriverHere/chromedriver");
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        driver.get("https://www.medicaid.gov/faq/index.html");

        FaqPageobj = new FAQpage(driver);
    }

    @AfterTest
    public void tearDown() {
        driver.quit();
    }

    @Test(priority = 1)
    public void Validate_SearchUserInput() throws InterruptedException {
        FaqPageobj.Validate_searchInput();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 2)
    public void Validate_SortBox() throws InterruptedException {
        FaqPageobj.Validate_SortBox();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 3)
    public void DateBox_Validation() throws InterruptedException {
        FaqPageobj.DateBoxTab();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 4)
    public void ShareResultTab() throws InterruptedException {
        FaqPageobj.ShareResult_Validation();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html?sl=yes&fcf=&fd=05%2F22%2F2012&td=02%2F15%2F2020&f1=0&f2=0&f3=0&f4=0&f5=0&f6=0&sb=-published");
        Thread.sleep(4000);
    }
    @Test(priority = 5)
    public void CloseTab(){
        FaqPageobj.Closetab();
    }

    @Test(priority = 6)
    public void FirstPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton1();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 7)
    public void SecondPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton2();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 8)
    public void ThirdPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton3();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 9)
    public void FourthPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton4();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 10)
    public void FifthPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton5();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 11)
    public void SixthPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton6();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }
    @Test(priority = 12)
    public void SeventhPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton7();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }
    @Test(priority = 12)
    public void EightPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton8();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }
    @Test(priority = 13)
    public void NinthPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton9();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }
    @Test(priority = 13)
    public void TenthPlusButton() throws InterruptedException {
        FaqPageobj.Validate_PlusButton10();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 15)
    public void ResetAllButton() throws InterruptedException {
        FaqPageobj.ValidateResetButton();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(4000);
    }
}