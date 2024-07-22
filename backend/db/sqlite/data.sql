-- Insert plan information into PlanInfo table
INSERT INTO PlanInfo 
VALUES (1, 'UHC Bronze-X Value Plan - HMO', 'Health Maintenance Organization (HMO)', '376.65', '9450', '9450', '35', '35', '100%', 'No Charge', 'No Charge', '90', '90', '150', '150', 'Full Price', 'No Charge', '80', '80', '25', '25', 'Full Price', 'No Charge', 'Full Price', 'No Charge', 'Full Price', 'No Charge', 'Full Price', 'No Charge', 'Full Price', 'No Charge', '4810'),
(2, 'UHC Bronze-X Virtual Access (Unlimited $0 Virtual) - HMO', 'Health Maintenance Organization (HMO)', '378.45', '7250', '9450', 'No Charge', 'No Charge', '100%', 'No Charge', 'No Charge', 'Full Price', '30%', 'Full Price', '30%', 'Full Price', '30%', '20', '20', '3', '3', 'Full Price', '30%', 'Full Price', '50%', 'Full Price', '50%', 'Full Price', '30%', 'Full Price', '50%', '613'),
(3, 'UHC Bronze-X ($0 PCP, $5 Tier 2 Rx, No Referrals) - HMO', 'Health Maintenance Organization (HMO)', '379.54', '8250 ', '9450', 'No Charge', 'No Charge', '100%', 'No Charge', 'No Charge', '140', '140', 'Full Price', '40%', 'Full Price', '40%', 'Full Price', '20', '5', '5', 'Full Price', '40%', 'Full Price', '50%', 'Full Price', '50%', 'Full Price', '40%', 'Full Price', '50%', '5734'),
-- -- (, 'UHC Bronze-X Copay Focus $0 Med Ded - HMO', 'Health Maintenance Organization (HMO)', '386.41', '5000', '9450 ', '50', '50', 'No Charge', 'No Charge', '150', '150', '100', '100', '200', '200', '20', '20', '25', '25', 'Full Price', '50%', 'Full Price', '50%', 'Full Price', '50%', '$3000 per day', '$3000 per day', '2000', '2000', '4897')
-- -- ('UHC Gold-X Copay Focus $0 Med Ded ($0 PCP) - HMO', 'Health Maintenance Organization (HMO)', '494.88', '500', '7000 ', 'No Charge', 'No Charge', 'No Charge', 'No Charge', '50', '50', '65', '65', '300', '300', '10', '10', '3', '3', '50', '50', 'Full Price', '45%', 'Full Price', '50%', '$1000 per day', '$1000 per day', '1000', '1000', '6011'),
-- -- (, 'UHC Gold-X Virtual Access (Unlimited $0 Virtual) - HMO', 'Health Maintenance Organization (HMO)', '497.65', '1100', '8400', 'No Charge', 'No Charge', 'No Charge', 'No Charge', '100', '100', 'Full Price', '25%', 'Full Price', '25%', '8', '8','3', '3', 'Full Price', '60', 'Full Price', '40%', 'Full Price', '50%', 'Full Price', '25%', 'Full Price', '25%', '6032'),
-- -- (, 'UHC Silver-X Copay Focus $0 Med Ded ($0 PCP) - HMO', 'Health Maintenance Organization (HMO)', '503.71', '2500', '9450', 'No Charge', 'No Charge', 'No Charge', 'No Charge', '100', '100', '65', '65', '300', '300', '20', '20', '10', '10', 'Full Price', '85', 'Full Price', '40%', 'Full Price', '50%', '$2500 per stay', '$2500 per stay', '1500', '1500', '6144'),
-- -- (, 'UHC Silver-X Value Plan - HMO', 'Health Maintenance Organization (HMO)', '509.67', '5250', '7600', '35', '35', 'No Charge', 'No Charge', '90', '90', '150', '150', 'Full Price', '600', '80', '80', '25', '25', 'Full Price', '75', 'Full Price', '80', 'Full Price', '100', 'Full Price', '$550 per stay', 'Full Price', '500', '6406'),
-- -- (, 'UHC Silver-X ($0 PCP, $3 Tier 2 Rx, No Referrals) - HMO', 'Health Maintenance Organization (HMO)', '512.17', '3250', '9450', 'No Charge', 'No Charge', 'No Charge', 'No Charge', 'Full Price', '50%', 'Full Price', '50%', 'Full Price', '50%', '20', '20','3', '3', 'Full Price', '100', 'Full Price', '50%', 'Full Price', '50%', 'Full Price', '50%', 'Full Price', '50%', '6218'),
-- -- (, 'UHC Gold-X Value Plan - HMO', 'Health Maintenance Organization (HMO)', '512.98', '1150', '6750', '10', '10', 'No Charge', 'No Charge', '30', '30', '50', '50', 'Full Price', '400', '25', '25', '10', '10', '30', '30', 'Full Price', '60', 'Full Price', '75', 'Full Price', '$450 per stay', 'Full Price', '350', '6271'),
(4, 'UHC Silver-X Virtual Access (Unlimited $0 Virtual) - HMO', 'Health Maintenance Organization (HMO)', '517.50', '3850', '9450', 'No Charge', 'No Charge', '100%', 'No Charge', 'No Charge', 'Full Price', '40%', 'Full Price', '40%', 'Full Price', '40%', '10', '10', '3', '3', 'Full Price', '100', 'Full Price', '40%', 'Full Price', '50%', 'Full Price', '40%', 'Full Price', '40%', '6272'),
(5, 'UHC Gold-X Advantage+ ($0 PCP, Adult Dental + Vision) - HMO', 'Health Maintenance Organization (HMO)', '528.31', '1500', '7000', 'No Charge', 'No Charge', '100%', 'No Charge', 'No Charge', '40', '40', '65', '65', '250', '250', '10', '10', '1', '1', '50', '50', 'Full Price', '30%', 'Full Price', '40%', 'Full Price', '20%', 'Full Price', '20%', '6404');

-- Insert user data into Users table
INSERT INTO Users
VALUES 
(1, 3, NULL, 'Sarah', 'Hayes', 29, 1, FALSE, NULL, NULL, 'Female', 100000, '28107', 73, FALSE, NULL),
(2, 1, NULL, 'Leah', 'Johnson', 30, 1, TRUE, 32, 'Female', 'Female', 80000, '28107', 55, TRUE, TRUE),
(3, 1, NULL, 'Michael', 'Smith', 35, 2, TRUE, 37, 'Male', 'Male', 60000, '28107', 86, FALSE, FALSE),
(4, 5, NULL, 'Emily', 'Brown', 28, 0, FALSE, NULL, NULL, 'Female', 50000, '28107', 40, FALSE, NULL),
(5, 4, NULL, 'David', 'Lee', 26, 0, FALSE, NULL, NULL, 'Male', 40000, '28107', 92, FALSE, NULL),
(6, 2, NULL, 'Jessica', 'Garcia', 29, 3, TRUE, 31, 'Male', 'Female', 125000, '28107', 63, FALSE, FALSE);

-- Insert information about user's health and plan spending into UserHealthInformation table
INSERT INTO UserHealthInformation
VALUES 
(1, FALSE, TRUE, 5, 6, 1, 0, 0, 8, 3, 740, 444, 8960, 2225, 0, 1000, 0, 0, 0, 'High', FALSE),
(2, TRUE, FALSE, 4, 1, 0, 1, 0, 3, 5, 592, 74, 3360, 0, 515, 30, 200, 0, 0, 'Moderate', FALSE),
(3, TRUE, TRUE, 2, 0, 1, 0, 1, 2, 0, 296, 0, 2240, 2225, 0, 0, 0, 0, 0, 'Low', FALSE),
(4, FALSE, TRUE, 4, 2, 1, 0, 1, 3, 5, 592, 148, 3360, 2225, 0, 50, 100, 0, 80, 'Moderate', TRUE),
(5, TRUE, FALSE, 15, 4, 3, 2, 2, 8, 12, 2220, 296, 8960, 6675, 1030, 40, 150, 150, 4000, 'Low', FALSE),
(6, FALSE, TRUE, 4, 2, 0, 1, 0, 3, 5, 592, 148, 3360, 0, 515, 30, 200, 250, 5000, 'High', TRUE);

-- Insert user conditions into UserHealthConditions table


-- Insert user family conditions into FamilyHealthConditions table
