# [cite_start]Placement Bot: A Conversational AI for Placement Information [cite: 2]

[cite_start]A serverless, AI-powered chatbot designed to provide students of BITS Pilani, Hyderabad Campus with easy access to real-time, critical placement information. [cite: 9, 12] [cite_start]This project addresses the challenge students face in keeping up with eligibility criteria, schedules, and interview processes by providing a centralized, interactive platform. [cite: 9, 10]

**Note:** The live AWS infrastructure for this project has been decommissioned to avoid costs. However, the frontend is fully viewable, and this repository provides a complete overview of the architecture and functionality.

---

## 🌟 Key Features

* [cite_start]**Conversational Interface**: Utilizes **AWS Lex** for natural language understanding, allowing students to ask questions about company-specific details like CGPA requirements and interview rounds. [cite: 13, 43]
* [cite_start]**Secure & Authenticated Access**: Employs **Amazon Cognito** to manage user registration and login, restricting access exclusively to students with a valid `@hyderabad.bits-pilani.ac.in` institutional email address. [cite: 14, 67]
* [cite_start]**Dynamic Data Retrieval**: Leverages **AWS Lambda** functions to fetch real-time data from an **Amazon DynamoDB** database, providing up-to-date information on company schedules, eligibility, and more. [cite: 13, 52, 53]
* [cite_start]**Scalable Serverless Backend**: The entire backend is built on serverless services like AWS Lambda and DynamoDB, enabling it to scale automatically based on traffic, ensuring smooth performance even during high-demand periods. [cite: 22]
* [cite_start]**Multilingual Support**: The bot is configured to support both **English** and **Spanish**, making it accessible to a wider audience. [cite: 24, 1901]
* [cite_start]**User Feedback System**: A `FeedbackIntent` is configured in Amazon Lex to capture user feedback, which is then stored in a DynamoDB table for analysis and future improvements. [cite: 1393, 1395, 1485]
* [cite_start]**Frontend Hosting**: The user interface is hosted on **Amazon S3** and distributed globally with low latency using **Amazon CloudFront** as a Content Delivery Network (CDN). [cite: 75, 80, 81]

---

## 🏛️ Project Architecture

The system is built on a robust, scalable, and secure serverless architecture using a combination of AWS services that work in unison.

![Architecture Diagram](docs/architecture.png)

1.  [cite_start]**Frontend (S3/CloudFront)**: The user interacts with the web interface, which is comprised of static HTML, CSS, and JavaScript files hosted on Amazon S3 and delivered via CloudFront. [cite: 75, 80, 94]
2.  [cite_start]**User Authentication (Amazon Cognito)**: Before accessing the bot, users must register and log in. Amazon Cognito handles this authentication, ensuring only authorized students can interact with the system. [cite: 61, 104]
3.  [cite_start]**Chatbot Engine (Amazon Lex)**: Lex serves as the conversational engine, processing user text input, recognizing intents (e.g., `CompanyEligibilityIntent`), and managing the dialogue flow. [cite: 40, 41]
4.  [cite_start]**Backend Logic (AWS Lambda)**: When an intent is triggered, Lex invokes a corresponding Lambda function. [cite: 50] [cite_start]This function contains the core backend logic, such as processing the request and fetching data. [cite: 52]
5.  [cite_start]**Database (Amazon DynamoDB)**: Lambda functions query the `PlacementInfo` table in DynamoDB to retrieve details like company names, CGPA requirements, eligible branches, and visit dates. [cite: 53, 56, 779]
6.  [cite_start]**Monitoring (Amazon CloudWatch)**: All services are monitored by CloudWatch, which logs interactions and tracks performance metrics for Lex, Lambda, and DynamoDB to ensure system health and optimize performance. [cite: 86, 87, 107]
7.  [cite_start]**Security (AWS IAM)**: IAM roles and policies are used to grant the necessary permissions for AWS services to interact with each other securely. [cite: 69, 70]

---

## 🛠️ Tech Stack

* [cite_start]**Frontend**: HTML, CSS, JavaScript [cite: 75]
* **Backend & Cloud Services**:
    * [cite_start]**AWS Lex**: Conversational AI & NLU [cite: 16]
    * [cite_start]**AWS Lambda**: Serverless Compute [cite: 17]
    * [cite_start]**Amazon DynamoDB**: NoSQL Database [cite: 18]
    * [cite_start]**Amazon Cognito**: User Authentication [cite: 19]
    * [cite_start]**Amazon S3**: Static Frontend Hosting [cite: 20]
    * [cite_start]**Amazon CloudFront**: Content Delivery Network (CDN) [cite: 20]
    * [cite_start]**Amazon CloudWatch**: Monitoring and Logging [cite: 21]
    * [cite_start]**AWS IAM**: Secure Access Management [cite: 69]

---

## 🚀 Running the Frontend Locally

While the backend services are not live, you can still explore the user interface:
1.  Clone the repository: `git clone [Your GitHub Repository URL]`
2.  Open the `index.html` file in your preferred web browser.

---

## 🎥 Supporting Documents

* [**Detailed Project Report (PDF)**](docs/Placement_Guidance_Chatbot.pdf)
* **Video Presentation**: A full walkthrough of the project can be found in the `docs` folder.

---

## 🤝 Contributors

* [cite_start]**Krish Shah** [cite: 5]
* [cite_start]**Sourav Solanki** [cite: 5]
* [cite_start]**Vedanshee Dave** [cite: 5]
* [cite_start]**T.Sai Sathwik** [cite: 5]

Guided by **Prof. [cite_start]Subrakanta Panda**, CSIS Department, BITS Pilani Hyderabad Campus. [cite: 6]
