# Placement Bot: A Conversational AI for Placement Information

A serverless, AI-powered chatbot designed to provide students of BITS Pilani, Hyderabad Campus with easy access to real-time, critical placement information. This project addresses the challenge students face in keeping up with eligibility criteria, schedules, and interview processes by providing a centralized, interactive platform.

**Note:** The live AWS infrastructure for this project has been decommissioned to avoid costs. However, the frontend is fully viewable, and this repository provides a complete overview of the architecture and functionality.

---

## 🌟 Key Features

* **Conversational Interface**: Utilizes AWS Lex for natural language understanding, allowing students to ask questions about company-specific details like CGPA requirements and interview rounds.
* **Secure & Authenticated Access**: Employs Amazon Cognito to manage user registration and login, restricting access exclusively to students with a valid `@hyderabad.bits-pilani.ac.in` institutional email address.
* **Dynamic Data Retrieval**: Leverages AWS Lambda functions to fetch real-time data from an Amazon DynamoDB database, providing up-to-date information on company schedules, eligibility, and more.
* **Scalable Serverless Backend**: The entire backend is built on serverless services like AWS Lambda and DynamoDB, enabling it to scale automatically based on traffic, ensuring smooth performance even during high-demand periods.
* **Multilingual Support**: The bot is configured to support both English and Spanish, making it accessible to a wider audience.
* **User Feedback System**: A `FeedbackIntent` is configured in Amazon Lex to capture user feedback, which is then stored in a DynamoDB table for analysis and future improvements.
* **Frontend Hosting**: The user interface is hosted on Amazon S3 and distributed globally with low latency using Amazon CloudFront as a Content Delivery Network (CDN).

---

## 🏛️ Project Architecture

The system is built on a robust, scalable, and secure serverless architecture using a combination of AWS services that work in unison. The architecture is detailed in the project report linked below.

1.  **Frontend (S3/CloudFront)**: The user interacts with the web interface hosted on Amazon S3 and delivered via CloudFront for optimal performance.
2.  **User Authentication (Amazon Cognito)**: Before accessing the bot, users must register and log in. Amazon Cognito handles this authentication, ensuring only authorized students can interact with the system.
3.  **Chatbot Engine (Amazon Lex)**: Lex serves as the conversational engine, processing user text input, recognizing intents (e.g., `CompanyEligibilityIntent`), and managing the dialogue flow.
4.  **Backend Logic (AWS Lambda)**: When an intent is triggered, Lex invokes a corresponding Lambda function. This function contains the core backend logic to process the request and fetch data from the database.
5.  **Database (Amazon DynamoDB)**: Lambda functions query the `PlacementInfo` table in DynamoDB to retrieve details like company names, CGPA requirements, and visit dates.
6.  **Monitoring (Amazon CloudWatch)**: All services are monitored by CloudWatch, which logs interactions and tracks performance metrics for Lex, Lambda, and DynamoDB to ensure system health.
7.  **Security (AWS IAM)**: IAM roles and policies are used to grant the necessary permissions for AWS services to interact with each other securely.

---

## 🛠️ Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Backend & Cloud Services**:
    * **AWS Lex**: Conversational AI & NLU
    * **AWS Lambda**: Serverless Compute
    * **Amazon DynamoDB**: NoSQL Database
    * **Amazon Cognito**: User Authentication
    * **Amazon S3**: Static Frontend Hosting
    * **Amazon CloudFront**: Content Delivery Network (CDN)
    * **Amazon CloudWatch**: Monitoring and Logging
    * **AWS IAM**: Secure Access Management

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

* **Krish Shah**
* **Sourav Solanki**
* **Vedanshee Dave**
* **T.Sai Sathwik**

Guided by **Prof. Subrakanta Panda**, CSIS Department, BITS Pilani Hyderabad Campus.
