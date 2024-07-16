-- Create enum for health conditions
CREATE TYPE health_condition AS ENUM (
    'healthy',
    'cancer',
    'diabetes'
);

-- Create enum for activity level
CREATE TYPE activity_level AS ENUM (
    'Low',
    'Moderate',
    'High'
);

-- User table
CREATE TABLE Users (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    fid INT,
    pid INT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    num_children INT NOT NULL,
    has_spouse BOOLEAN NOT NULL,
    spouse_age INT,
    spouse_gender VARCHAR(10),
    gender VARCHAR(10) NOT NULL,
    avg_annual_income INT NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    num_in_network_providers INT NOT NULL,
    has_outside_coverage BOOLEAN NOT NULL,
    spouse_has_outside_coverage BOOLEAN,
    FOREIGN KEY (fid) REFERENCES FamilyHealthConditions(fid),
    FOREIGN KEY (pid) REFERENCES PlanInfo(pid)
);

-- User health conditions table
CREATE TABLE UserHealthConditions (
    uid INT,
    condition health_condition,
    PRIMARY KEY (uid, condition)
);

-- User health information table
-- This table holds information about the user's health such
-- as whether or not they smoke and how many surgeries they have 
-- had in the current year, and it also contains information
-- about the user's usage of their current plan.
CREATE TABLE UserHealthInformation (
    uid INT PRIMARY KEY,
    smokes BOOLEAN NOT NULL,
    consumes_alcohol BOOLEAN,
    num_doctor_visits INT NOT NULL,
    num_specialist_visits INT NOT NULL,
    num_hospital_visits INT NOT NULL,
    num_emergency_room_visits INT NOT NULL,
    num_surgeries INT NOT NULL,
    num_labs_or_tests INT NOT NULL,
    doctor_visits_price INT NOT NULL,
    specialist_visits_price INT NOT NULL,
    labs_tests_price INT NOT NULL,
    prescription_price INT NOT NULL,
    hospital_visits_price INT NOT NULL,
    emergency_visits_price INT NOT NULL,
    num_prescriptions INT NOT NULL,
    generic_prescription_spending INT NOT NULL,
    brand_prescription_spending INT NOT NULL,
    nonbrand_prescription_spending INT NOT NULL,
    specialty_prescription_spending INT NOT NULL,
    activity activity_level,
    is_pregnant BOOLEAN
);

-- Family health conditions table
CREATE TABLE FamilyHealthConditions (
    fid INT,
    condition health_condition,
    PRIMARY KEY (fid, condition)
);

-- Plan information table
CREATE TABLE PlanInfo (
    pid INT PRIMARY KEY,
    plan_type VARCHAR(255),
    monthly_premium INT NOT NULL,
    deductible_per_person INT NOT NULL,
    out_of_pocket_max_per_person INT NOT NULL,
    network_primary_bd INT NOT NULL,
    network_primary_ad INT NOT NULL,
    network_preventive_bd INT NOT NULL,
    network_preventive_ad INT NOT NULL,
    network_specialist_bd INT NOT NULL,
    network_specialist_ad INT NOT NULL,
    network_xray_bd INT NOT NULL,
    network_xray_ad INT NOT NULL,
    network_imaging_bd INT NOT NULL,
    network_imaging_ad INT NOT NULL,
    network_blood_bd INT NOT NULL,
    network_blood_ad INT NOT NULL,
    network_generic_bd INT NOT NULL,
    network_generic_ad INT NOT NULL,
    network_brand_bd INT NOT NULL,
    network_brand_ad INT NOT NULL,
    network_npbrand_bd INT NOT NULL,
    network_npbrand_ad INT NOT NULL,
    network_specialty_bd INT NOT NULL,
    network_specialty_ad INT NOT NULL,
    network_hospital_bd INT NOT NULL,
    network_hospital_ad INT NOT NULL,
    network_emergency_bd INT NOT NULL,
    network_emergency_ad INT NOT NULL,
    plan_description VARCHAR(255) NOT NULL
);
