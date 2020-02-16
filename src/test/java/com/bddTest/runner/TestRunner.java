package com.bddTest.runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "src/test/resources/CapitalOne",glue={"com.test.capitalone.tests"},plugin = { "pretty", "html:target/cucumber-reports" }

)
 
public class TestRunner {
 
}