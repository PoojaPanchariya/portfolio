CREATE DATABASE banking_domain;

USE banking_domain;

-- A. Total Customers
SELECT COUNT(*) AS total_customers FROM bankdata;

-- B. Customers by Age Group
SELECT
  CASE 
    WHEN age < 30 THEN '<30'
    WHEN age BETWEEN 30 AND 50 THEN '30-50'
    ELSE '>50'
  END AS age_group,
  COUNT(*) AS count
FROM bankdata
GROUP BY age_group;

 -- C. Average Estimated Income by Occupation
 SELECT occupation, AVG(estimated_income) AS avg_income
FROM bankdata
GROUP BY occupation
ORDER BY avg_income DESC;


--  D. Total Bank Deposits by Loyalty Classification
SELECT loyalty_classification, SUM(bank_deposits) AS total_deposits
FROM bankdata
GROUP BY loyalty_classification
ORDER BY total_deposits DESC;

-- E. Number of High Risk Clients (Risk Weighting ≥ 4)
SELECT COUNT(*) AS high_risk_clients
FROM bankdata
WHERE risk_weighting >= 4;

 -- F. Total Balance per Client
 SELECT 
  client_id,
  name,
  estimated_income +
  superannuation_savings +
  bank_deposits +
  saving_accounts +
  checking_accounts +
  foreign_currency_account AS total_balance
FROM bankdata
ORDER BY total_balance DESC;

-- G. Fee Structure Distribution
SELECT fee_structure, COUNT(*) AS client_count
FROM bankdata
GROUP BY fee_structure;

-- H. Top 5 Countries by Total Deposits
SELECT nationality, SUM(bank_deposits) AS total_deposits
FROM bankdata
GROUP BY nationality
ORDER BY total_deposits DESC
LIMIT 5;

 -- I. Clients with Credit Card Balance > Estimated Income
 SELECT client_id, name, estimated_income, credit_card_balance
FROM bankdata
WHERE credit_card_balance > estimated_income;


-- Create a View for Financial Summary
CREATE VIEW client_financial_summary AS
SELECT
  client_id,
  name,
  age,
  occupation,
  estimated_income,
  bank_loans,
  bank_deposits,
  (bank_deposits + saving_accounts + checking_accounts + foreign_currency_account) AS total_deposits,
  (estimated_income + superannuation_savings) AS total_assets
FROM bankdata;
