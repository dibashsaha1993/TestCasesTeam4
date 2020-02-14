package com.sprint.test;

import com.sprint.HomePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;


public class SprintHomepageTest {

    public WebDriver driver;

    public HomePage homePageObj;

    @BeforeTest
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "/Users/dibashsaha/Desktop/LearnSetupMaven/DriverHere/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.sprint.com/");

        homePageObj = new HomePage(driver);

    }

    @AfterTest
    public void tearDown() {
        driver.quit();
    }



    @Test(priority = 1)
    public void ValidateLogo() throws InterruptedException {
        homePageObj.ClickLogo();
        Thread.sleep(3000);
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
    }

    @Test(priority = 2)
    public void ValidateEspanol() throws InterruptedException {
        homePageObj.ValidateEspanol();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }
    @Test(priority = 3)
    public void ValidateEnglish() throws InterruptedException {
        homePageObj.ClickLogo();
        Thread.sleep(3000);
        homePageObj.ValidateEnglish();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }

    @Test(priority = 4)
    public void ValidateAction() throws InterruptedException {
        Actions xx=new Actions(driver);
        xx.moveToElement(driver.findElement(By.linkText("Plans"))).build().perform();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }
    @Test(priority = 5)
    public void ValidateImageChangeButton2() throws InterruptedException {
        homePageObj.ImageChangeButton2();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }

    @Test(priority = 6)
    public void ValidateImageChangeButton() throws InterruptedException {
        homePageObj.ImageChangeButton();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }

    @Test(priority = 7)
    public void ValidateImageButton3() throws InterruptedException {
        homePageObj.ImageChangeButton3();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }

    @Test(priority = 8)
    public void ValidateImageButton4() throws InterruptedException {
        homePageObj.ImageChangeButton4();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }

    @Test(priority = 9)
    public void ValidateLearnTab() throws InterruptedException {
    homePageObj.ValidateLearnTab();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
    Thread.sleep(3000);
    }
    @Test(priority = 10)
    public void ValidateActivateButton() throws InterruptedException {
        homePageObj.ValidateActivateLink();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/en/landings/activate-your-device.html?INTNAV=TopNav%3AActivateLP%3ABYODandUPG");
        Thread.sleep(3000);
    }

    @Test(priority = 11)
    public void ValidateDeal() throws InterruptedException {
        homePageObj.ValidateDeal();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/en/shop/offers.html?INTNAV=TopNav%3ADeals");
        Thread.sleep(3000);
    }

     @Test(priority = 12)
    public void ValidateStores() throws InterruptedException {
        homePageObj.ValidateStores();
         String actual=driver.getCurrentUrl();
         Assert.assertEquals(actual,"https://business.sprint.com/?INTNAV=TopNav:Business");
        Thread.sleep(3000);
    }

        @Test(priority = 13)
        public void ValidateSearch() throws InterruptedException {
            homePageObj.ValidateSearchButton();
            String actual=driver.getCurrentUrl();
            Assert.assertEquals(actual,"https://www.sprint.com/");
            Thread.sleep(2000);
        }

    @Test(priority = 14)
    public void ValidateCart() throws InterruptedException {
        homePageObj.ValidateCart();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/en/shop/cart.html");
        Thread.sleep(3000);
    }

    @Test(priority = 15)
    public void ValidateSignInButton() throws InterruptedException {
        homePageObj.ValidateSignInButton();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }

    @Test(priority = 16)
    public void ValidateCheckCoverage() throws InterruptedException {
        homePageObj.ValidateCheckCoverage();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://www.sprint.com/");
        Thread.sleep(3000);
    }
    @Test(priority = 17)
    public void ValidateBusiness() throws InterruptedException {
        homePageObj.ValidateBusniess();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://business.sprint.com/?INTNAV=TopNav:Business");
        Thread.sleep(3000);
    }



}


