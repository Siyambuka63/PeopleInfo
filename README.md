# PeopleInfo
## Description

A website that does CRUD operations to a database, used to demonstate how to use Node.js to communicate a with a MySQL database.

## Prerequisites 

1. Download Node.js at: https://nodejs.org
     ![Screenshot 2025-03-07 181629](https://github.com/user-attachments/assets/59f09a2b-2ac1-4420-824c-ac6c9f61508f)

2. Download MySQL Community Server 8.0.41 at https://dev.mysql.com/downloads/mysql
   
   2.1 Choose the 8.0.41 version
   ![Screenshot 2025-03-07 182936](https://github.com/user-attachments/assets/f3e59213-5238-41e0-bf47-c0f61d0be238)
   2.2 Click the recommended download
   ![Screenshot 2025-03-07 183008](https://github.com/user-attachments/assets/00e96090-4d14-4256-a704-620231dba7cf)
   2.3 Download the first link
   ![Screenshot 2025-03-07 183031](https://github.com/user-attachments/assets/2da62bdf-41bd-478f-b59f-928c6c42b7c2)

## Setting up the website

1. Clone the repository

* download the zipped folder OR
* use the following command in the command-line:
> git clone https://github.com/Siyambuka63/PeopleInfo.git

2. Set up the MySQL connection
   2.1 Open MySQL Workbench
   2.2 Set up a new connection
   ![Screenshot 2025-03-07 183031](https://github.com/user-attachments/assets/6a4aaf02-99ff-4ff2-8312-c12a96a04167)
   2.3 Set Connection Name to localhost"
   ![Screenshot 2025-03-07 184739](https://github.com/user-attachments/assets/6ccd8e2a-dae0-484a-9991-b27eef1770af)
   2.4 Ensure username is root
   ![Screenshot 2025-03-07 184739](https://github.com/user-attachments/assets/ab130ca4-b2ab-4101-bfcf-73d678591135)
   2.5 Click Store in vault
   ![Screenshot 2025-03-07 184739](https://github.com/user-attachments/assets/7b5e700e-754a-4982-a1ea-6c237a2fa6c0)
   2.6 Set password to Siyambuka123
   ![Screenshot 2025-03-07 184806](https://github.com/user-attachments/assets/5b362721-c5ea-45a4-aa7d-abc67ab69741)
   2.7 Test connection
   2.8 If test successful, click ok

3. Set up the database (with data import)
   3.1 Open MySQL WorkBench
   3.2 Select the localhost connection
   ![Screenshot 2025-03-07 190353](https://github.com/user-attachments/assets/5d8de716-bb0e-4881-95b1-aa12d2f89a2f)
   3.3 Click on the server tab, then Data Import
   ![Screenshot 2025-03-07 190437](https://github.com/user-attachments/assets/bf2144b7-df73-47f0-b5b2-9108a08bb0f7)
   N.B Prick 3.4 or 3.5
   3.4 Import from Dump Project Folder
       3.4.1 Click Import from Dump Project Folder
       ![Screenshot 2025-03-07 190747](https://github.com/user-attachments/assets/22c18de0-b0a5-476c-ba06-77c01081d6e2)
       3.4.2 Navigate to the folder with the people_user.sql file
       ![Screenshot 2025-03-07 190747](https://github.com/user-attachments/assets/94a96d38-9984-49b1-a635-c8a0da7fc7e2)
       3.4.3 Click Load Folder Contents
        ![Screenshot 2025-03-07 190747](https://github.com/user-attachments/assets/d9176af8-b07e-4473-9097-de074371b8b1)
       3.4.4 Select the Schema
       ![Screenshot 2025-03-07 190747](https://github.com/user-attachments/assets/c7df6b3b-71c5-4c4b-a31e-1e5faff57ec6)

   3.5 Import from Self-Contained File
       3.5.1 Navigate to the file people_user.sql
       ![Screenshot 2025-03-07 190830](https://github.com/user-attachments/assets/5155b715-e503-421a-836a-19b9e42cc74c)
       3.5.2 Click New
       ![Screenshot 2025-03-07 190830](https://github.com/user-attachments/assets/1eae4d40-a718-4bef-a5b7-2770f340a5ed)
       3.5.3 Name the schema: people
       ![Screenshot 2025-03-07 190842](https://github.com/user-attachments/assets/376a0bf4-f092-410b-8a04-ede0272ac3a7)

   3.6 After chosing 3.4 or 3.5, click Import Progress
   ![Screenshot 2025-03-07 190908](https://github.com/user-attachments/assets/1d516465-9a38-4525-bfeb-a01339394b05)

   3.7 Then, click Start Import
   ![Screenshot 2025-03-07 190908](https://github.com/user-attachments/assets/9c0eb39c-808d-4319-a978-e5511b99b73e)

   N.B If this was all a lot too much to follow, you can go from 3.2 and create a new schema named people. The server will automatically creates a table for the project. 

   3.8 Close MySQL Workbench

4. Run as Administator Command Prompt
   
5. Navigate to the project directory:
   cd project-name

6. Run the server
   node server.js

7. Run index.html
   
