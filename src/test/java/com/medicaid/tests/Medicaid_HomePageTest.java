package com.medicaid.tests;

import com.medicaid.HomePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class Medicaid_HomePageTest {
    public WebDriver driver;

    public HomePage homePageObj;


    @BeforeTest
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "/Users/dibashsaha/Desktop/LearnSetupMaven/DriverHere/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.medicaid.gov/index.html");

        homePageObj = new HomePage(driver);

    }

    @AfterTest
    public void tearDown() {
        driver.quit();
    }


    @Test(priority = 1)
    public void ValidateLogo() throws InterruptedException {
        homePageObj.Validate_Logo();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/index.html");
        Thread.sleep(3000);
    }

    @Test(priority = 2)
    public void ValidateSearchButton() throws InterruptedException {
        homePageObj.ValidateSearchButton();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/index.html");
        Thread.sleep(3000);
    }

    @Test(priority = 3)
    public void Validate_SiteMap() throws InterruptedException {
        homePageObj.ValidateSiteMap();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/sitemap/index.html");
        Thread.sleep(3000);
    }

    @Test(priority = 4)
    public void ValidateFAQ() throws InterruptedException {
        homePageObj.FaQLink();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(3000);
    }


    // @Test(priority = 5)
    public void ValidateSearchingUser() throws InterruptedException {
        homePageObj.ValidateUserSearching();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/faq/index.html");
        Thread.sleep(3000);
    }

    @Test(priority = 6)
    public void ValidateFederalPolicyTab() throws InterruptedException {
        homePageObj.ValidateFederalPolicy();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/medicaid/index.html");
        Thread.sleep(3000);
    }

    @Test(priority = 7)
    public void ValidateBasicHealth() throws InterruptedException {
        homePageObj.ValidateBasicHealth();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/basic-health-program/index.html");
        Thread.sleep(4000);
    }

    @Test(priority = 8)
    public void ValidateApplyForCoverageLogoClick() throws InterruptedException {
        homePageObj.ValidateApplyCoverageLogo();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/medicaid-and-you/index.html");
        Thread.sleep(5000);
    }

    @Test(priority = 9)
    public void ValidateConversationLogo() throws InterruptedException {
        homePageObj.ConversationLogoValidation();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/medicaid/section-1115-demo/demonstration-and-waiver-list/index.html");
        Thread.sleep(5000);
    }
    @Test(priority = 10)
    public void ValidateMedicaidChipLogo() throws InterruptedException {
        homePageObj.Validate_ChipLogo();
        String actual = driver.getCurrentUrl();
        Assert.assertEquals(actual, "https://www.medicaid.gov/state-overviews/scorecard/index.html");
        Thread.sleep(5000);
    }

    @Test(priority = 11)
    public void ValidateAction() throws InterruptedException {
        Actions act = new Actions(driver);
        act.moveToElement(driver.findElement(By.xpath("//*[@id=\"mainmenu-menu-link-contentf2cdc326-06bd-4974-bcc5-2f5a04cf2253\"]/a/span"))).build().perform();
    }
}