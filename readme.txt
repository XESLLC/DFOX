Matching Project
Overview
Sally the Sales Manager has just signed up for DataFox, and our first task is to import her (very messy) data.  She has sent us a spreadsheet crm.csv which has names and urls.  Your job is to write a script that can read her csv, match each entry against our database (in this case a JSON file: db.json).

We expect this take around 2 hours.

You can use any language and frameworks or libraries.  We care that the code is clean, understandable and could easily be modified to support more functionality, scale, etc.
Details
The “database” file (db.json) contains a JSON array where each element of the array has the following keys and values:

id: string - The ID of the company
name: string - The name of the company
corporate_names: []string - Other (corporate) names for the company (e.g. “Acme, Inc.” could be a corporate name for “Acme”)
fka_names: []string - Formerly-known-as names the company used.
products: []string - Names of any products the company has.
urls: []string - URLs the company has.
acquirer: string|null - ID of the company’s acquirer (if applicable)

Your output should be a text file where the first line is “Matches” and each subsequent line is a comma-separated list of IDs of the companies from the DataFox database that match the corresponding line in the “crm.csv” input file.

Output
Please send us a zipped folder of your output text file and source code (and any steps required for us to run it).

Example output text file (these are not the correct answers, but are in the correct format): https://app.box.com/s/14a7phyflpmh9ggyzl4ybxlkq3caaoko
