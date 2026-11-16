---
title: "Check out what I built..."
date: 2025-10-31
topics: ['economic-reporting']
excerpt: "Check out what I built... 🏦 Economic Scorecard for Top 30 Metros in USA 🏦 We often get top-line national economic numbers, but the Fed tracks all these data points by city. I..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7389835252011282432"
published: true
---
Check out what I built...   🏦 Economic Scorecard for Top 30 Metros in USA 🏦

We often get top-line national economic numbers, but the Fed tracks all these data points by city. I figured I would create a tool to measure the economic health of the top 30 metro regions in the USA on a monthly basis. We are a nation of 340 million people living in different regions, states, and cities. We don't all share the same economic reality, and economic reporting should reflect that diversity.

I am tracking a few metrics and then creating an economic grade for each city. I weigh Labor Participation and Unemployment Rate the highest since I think those metrics are highly indicative of economic health. I also incorporate new Building Permits and House Price indexes. I mix it all together to give an A-F grade based on the average of the Top 30 metros.

This is a WIP so please suggest any changes you think would help improve it.

Key Features:  
• Comparative analysis vs Top 30 metro averages  
• Per-capita normalization for fair city-to-city comparison  
• Custom grading algorithm - Weighted scoring across key metrics  
• Grade-based system (A-F) for easy interpretation

🛠️ Tech Stack & Data Pipeline 🛠️

- Check Github below for more details -

Data Sources:  
• U.S. Bureau of Labor Statistics (BLS) API - Employment, unemployment, labor force data  
• U.S. Census Bureau API - Building permits, construction activity  
• Federal Housing Finance Agency (FHFA) - Home Price Index data

Development Stack:  
• Python - Core data processing & automation  
• APIs: BLS, Census, FHFA - Real-time government economic data  
• Hugging Face Inference API - AI-powered economic analysis (Gemma-2-2B model)

Here is a quick preview of what each city report will look like, this is the latest economic data on NYC:

- New York (Pop: 19.5M)
- Unemployment Rate: 5.2% | Metro Avg: 4.6%
- Labor Force Participation: 52.8% | Metro Avg: 53.8%
- Building Permits: 3,819 (19.4 per 100K) | Metro Avg: 36.5 per 100K
- Home Price Index: 332.21 (📈 +6.1% YoY) | Metro Avg: +1.3%
- Economic Grade: B-

Economic Analysis: New York's economy is performing slightly below the national average, evidenced by its higher unemployment rate of 5.2% compared to the Top 30 metro average of 4.6%. Additionally, New York's labor participation rate of 52.8% is below the Top 30 metro average of 53.8%, suggesting a smaller proportion of the workforce is actively contributing. While New York is experiencing a higher rate of home price growth at 6.1% compared to the Top 30 metro average of 1.3%, this is offset by higher unemployment, lower labor participation, and a very low amount of new building permits.

https://lnkd.in/eyqmBu6N
