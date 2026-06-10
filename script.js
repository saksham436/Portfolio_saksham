document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================================================
    // 1. Projects Pop-up System & Image Slider Configuration
    // =========================================================================
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalDynamicBody");
    const closeBtn = document.getElementById("modalCloseBtn");
    const openButtons = document.querySelectorAll(".open-modal-btn");

    let currentImageIndex = 0;
    let currentProjectImages = [];




    // Optional Navigation Link Highlight tracking smooth handling for newly added skills section
const skillsSection = document.getElementById("skills");
if (skillsSection) {
    console.log("Skills component matrix loaded successfully into application container layout pipeline.");
}
    // प्रोजेक्ट डेटाबेस
    const projectDatabase = {
        
        hospitality: {
            badge: "PowerBI, Python Project",
            title: "Dynamic Revenue & Operational Insights Dashboard",
            domain: "Hospitality Revenue Analytics",
            links: {
                linkedin: "https://www.linkedin.com/in/saksham-yadav-3b2930350/",
                github: "https://github.com/saksham436/Hospitality-Analysis/blob/main/Hospitality_Analysis_ipynb.ipynb"
            },
            liveDashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiMGNmZTNmZjQtZGFmMS00ZDQ5LThiMTctZmQ4OTExYzFiNTkwIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
            images: [
                "hospitality analysis template.png",
                "hospitality analysis 2.png",       
                "hospitality analysis 1.png",       
                "Hospitality 3.png" 
            ],
            desc: `• Tech Stack: Python (Pandas, NumPy), Power BI (DAX, Power Query), Star-Schema ModelingPython Data Pipeline: Ingested and engineered 134K+ transactional records using Python (Pandas); built custom cleaning scripts to eliminate negative guest records and logging defects.
            
            • Statistical Outlier Control: Applied Mean + 3σ methodology in Python to isolate revenue anomalies while strategically preserving high-value data ($50K+ rents) for RT4 (Presidential Suites).    
            
            • Star-Schema Optimization: Designed a robust relational data model in Power BI, seamlessly connecting fact tables with date, hotel, and room dimension tables.

            • Advanced DAX Analytics: Engineered dynamic measures for core metrics (RevPAR, ADR, Occupancy %, DSRN) uncovering key business insights—including a 72% weekend occupancy surge vs 51% on weekdays.Impact: Delivered an end-to-end cloud-ready analytics solution that identifies revenue leakage and tracks platform booking distribution across 4 major Indian metros.`,
            videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },

        Business_analytics: {
            badge: "PowerBI, Data Modeling",
            title: "Business Insights 360: Executive Decision-Support System",
            domain: "Executive Decision-Support System",
            links: {
                linkedin: "https://www.linkedin.com/in/saksham-yadav-3b2930350/",
                github: "https://github.com/saksham436"
            },
            liveDashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiY2UwZGNiMTUtMTllZi00ZjJlLWFjOTYtYzFmYzdiOGQxNDE4IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
            images: [
                "Business Insight 1.png",
                "Business Insight 2.png",
                "Business Insight 3.png",
                "Business Insight 4.png",
                "Business Insight 5.png",
                "Business Insight 6.png",
                "Business Insight 7.png" 
            ],
            desc: `• Tech Stack: Power BI (DAX, Power Query), SQL, Excel, DAX Studio, Star-Schema Modeling

• Cross-Functional Data Pipeline: Integrated and normalized complex transactional datasets from 5 major departments (Executive, Marketing, Supply Chain, Finance, and Sales); engineered efficient SQL queries and custom Power Query scripts for intensive data cleansing, text transformation, and schema normalization to dissolve organizational data silos.

• Star-Schema Optimization: Designed and developed a high-performance relational data model in Power BI, establishing optimized one-to-many relationships to connect central fact tables with comprehensive dimension tables.

• Advanced DAX Analytics & Tuning: Engineered robust, dynamic DAX measures to compute critical enterprise metrics—including Net Sales, Gross Margin %, and Year-to-Date (YTD) / Year-to-Go (YTG) trends—while utilizing DAX Studio for advanced data model performance tuning and latency reduction.

• UI/UX & Data Storytelling: Designed a recruiter-friendly, premium minimalist interface leveraging a clean Alabaster Off-White theme; implemented advanced data visualizations like Waterfall Charts for Unit Economics and Scatter Plots for the Customer Performance Matrix to deliver seamless business insights.

• Impact: Delivered an end-to-end automated analytics solution for executive stakeholders that eliminated critical reporting gaps from legacy manual tracking, improving overall cross-functional operational efficiency by 10%.`,
            videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },

        hr_analytics: {
            badge: "PowerBI, Data Modeling",
            title: "Workforce Dynamics & Attendance Insights Dashboard",
            domain: "HR Data Operations Analytics",
            links: {
                linkedin: "https://www.linkedin.com/in/saksham-yadav-3b2930350/",
                github: "https://github.com/saksham436"
            },
            liveDashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiMTU5NDlmNDgtNmJkMi00Yjg2LTkzNTctNThjZGNkZTMzNzQ5IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
            images: [
              "HR DATA ANALYTICS 0.png",
              "HR DATA ANALYTICS 1.png",
              "HR DATA ANALYTICS 2.png"
              
            ],
            desc: `• Tech Stack: Power BI (DAX, Power Query), Advanced Data Modeling, Time-Series Visualization. Granular Data Ingestion: Modeled and structured multi-month workforce attendance logs across diverse teams, utilizing Power Query to normalize presence matrices and address missing logs.

• Advanced DAX Intelligence: Engineered robust custom measures for core operational metrics including Attendance % (91.8%), Work-From-Home % (10.0%), and Sick Leave % (1.1%) to evaluate workforce availability.

• Time-Series Trend Capture: Mapped organizational movement patterns to identify sharp operational shifts, uncovering specific weekly trends such as heightened early-week presence (93.2%) versus an increased Friday WFH surge (13.0%).

• Impact: Delivered a recruiter-ready executive dashboard that successfully transforms complex employee behavior data into actionable workforce intelligence, optimizing hybrid resource allocation and policy tracking.`,
            videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },

        P_and_L_Report: {
            badge: "Excel, Data Modeling",
            title: "Automated Financial P&L Analytics Dashboard",
            domain: "Corporate Finance / Financial Data Analytics",
            links: {
                linkedin: "https://www.linkedin.com/in/saksham-yadav-3b2930350/",
                github: "https://github.com/saksham436"
            },
            images: [
             "p&L 1.png",
             "p&L 2.png",
             "p&L 3.png",
             "p&L 4.png",
             "p&L 5.png",
             "p&L 6.png",
            ],
            desc: `Tech Stack: Excel (Power Pivot), Power Query, SQL, Advanced Financial Modeling, DAX Analytics.

• Granular Data Ingestion: Modeled and structured complex, multi-department transactional ledgers; engineered efficient Power Query pipelines to normalize mismatched expense schemas and automate data cleansing, reducing manual preprocessing effort by 4+ hours.

• Advanced DAX & Financial Intelligence: Engineered robust, custom DAX measures within a unified data model to dynamically compute critical operational and profitability metrics, streamlining granular revenue and cost-center evaluation.

•Trend Capture & Expense Tracking: Mapped organizational cash-flow and revenue streams over time to identify hidden cost drivers, pinpointing sharp operational shifts and highlighting specific variance trends across core business categories.

• Impact: Delivered a recruiter-ready executive financial dashboard that successfully transforms raw accounting data into structured, interactive visual intelligence, significantly improving financial reporting accuracy and accelerating data-driven business decisions.`
        },

        Python_Scripting: {
            badge: "Python, Data Modeling",
            title: "Python Analytics & Data Exploration",
            domain: "Python Script / Business Analytics",
            links: {
                linkedin: "https://www.linkedin.com/in/saksham-yadav-3b2930350/",
                github: "https://github.com/saksham436"
            },
            images: ["python banner.png"],
            desc: `1. Hospitality Project
• Project Title: Python Analytics for Hotel Booking & Revenue
• Domain / Function: Business Analytics / Data Operations
• Description (GitHub About): Python script to clean, analyze, and visualize hotel bookings, occupancy rates, and revenue metrics.

2. Cricket World Cup Project
• Project Title: Cricket World Cup Historical Stats Analyzer
• Domain / Function: Sports Analytics / Exploratory Data Analysis (EDA)
• (GitHub About): Python-based EDA project to explore and visualize historical Cricket World Cup data from 1975 to 2019.

3. CoviSynth Project
• Project Title: CoviSynth: Global Health Trend Tracker
• Domain / Function: Healthcare Analytics / Data Visualization
• Description (GitHub About): Python engine to process, track, and visualize global pandemic trends, recoveries, and mortality numbers.

4.Heart Disease Prediction
• Project Title: Heart Disease Risk & Predictive Analytics
• Domain / Function: Healthcare Analytics / Exploratory Data Analysis (EDA)
• Description: Python script to analyze clinical features, identify cardiac risk correlations, and prepare healthcare datasets for ML modeling.`
        },

        Consumer_Goods: {
            badge: "SQL, Data Modeling",
            title: "Global Consumer Goods Sales Analytics", 
            domain: "Consumer Goods / Business Analytics",
            links: {
                linkedin: "https://www.linkedin.com/in/saksham-yadav-3b2930350/",
                github: "https://github.com/saksham436"
            },
            images: [
                "consumer good 4.png",
                "consumer good 2.png",
                "consumer good 6.png",
                "consumer good 3.png"
            ],
            desc: `This project analyzes the sales performance and regional market share of a global consumer goods company for FY 2021. Using advanced SQL querying, the objective was to determine net sales contribution by customer globally and their percentage share within specific geographical regions.

• SQL Implementation & Concepts:
The analysis utilizes Common Table Expressions (CTEs) for clean data aggregation and Window Functions (SUM() OVER (PARTITION BY)) to compute regional shares without collapsing individual records.

WITH cte1 AS (
    SELECT c.customer, c.region, ROUND(SUM(net_sales)/1000000,2) AS net_sales_mln
    FROM gdb0041.net_sales n
    JOIN dim_customer c ON n.customer_code=c.customer_code
    WHERE fiscal_year=2021
    GROUP BY c.customer, c.region
)
SELECT *, net_sales_mln*100/SUM(net_sales_mln) OVER (PARTITION BY region) AS pct_share_region
FROM cte1
ORDER BY region, pct_share_region DESC;

• Key Business Insights
• Global Dominance: Amazon leads globally with a 13.23% market share, followed by Atliq Exclusive (9.70%) and Atliq E Store (8.53%).
• Regional Deep-Dive (APAC): Within APAC, Amazon maintains the top spot with $57.41M in sales (12.99% share). Atliq Exclusive follows closely at $51.58M (11.67% share), while Leader captures 5.55%.

• Strategic Takeaway
With Atliq's proprietary channels capturing over 18% of global sales, the business should prioritize direct-to-consumer (DTC) channels to maximize profit margins.`
        }
    };
              
    function updateSliderImage() {
        const sliderImgElement = document.getElementById("modalSliderImg");
        if (sliderImgElement && currentProjectImages.length > 0) {
            sliderImgElement.src = currentProjectImages[currentImageIndex];
        }
    }

    window.prevSlide = function() {
        if (currentProjectImages.length <= 1) return;
        currentImageIndex = (currentImageIndex === 0) ? currentProjectImages.length - 1 : currentImageIndex - 1;
        updateSliderImage();
    };

    window.nextSlide = function() {
        if (currentProjectImages.length <= 1) return;
        currentImageIndex = (currentImageIndex === currentProjectImages.length - 1) ? 0 : currentImageIndex + 1;
        updateSliderImage();
    };

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const projectKey = button.getAttribute("data-project");
            const data = projectDatabase[projectKey];

            if (data) {
                currentProjectImages = data.images || [];
                currentImageIndex = 0;

                const showArrows = currentProjectImages.length > 1 ? "display: flex;" : "display: none;";
                const linkedInLink = (data.links && data.links.linkedin) ? data.links.linkedin : "#";
                const gitHubLink = (data.links && data.links.github) ? data.links.github : "#";

                let liveDashboardHTML = "";
                if (data.liveDashboardUrl && data.liveDashboardUrl !== "") {
                    liveDashboardHTML = `
                        <div class="modal-fullwidth-dashboard">
                            <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 16px; color: #0f172a; border-left: 4px solid #2563eb; padding-left: 10px;">Live Interactive Dashboard</h3>
                            <div class="pbi-iframe-container">
                                <iframe src="${data.liveDashboardUrl}" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                        </div>
                    `;
                }

                let videoHTML = "";
                if (data.videoEmbedUrl) {
                    videoHTML = `
                        <div>
                            <h3 style="font-size: 1.25rem; margin-bottom: 12px; color: #0f172a;">Project Video</h3>
                            <div style="position: relative; padding-bottom: 56.25%; height: 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.04);">
                                <iframe src="${data.videoEmbedUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
                            </div>
                        </div>
                    `;
                }

                modalBody.innerHTML = `
                    <div class="modal-grid-upper">
                        <div>
                            <span class="modal-badge-tag">${data.badge}</span>
                            <h2 style="font-size: 1.8rem; font-weight: 700; color: #0f172a; line-height: 1.3;">${data.title}</h2>
                            <p style="margin-top: 12px; font-size: 0.9rem; color: #64748b;"><strong>Domain/Function:</strong> <span style="color:#2563eb; font-weight:600;">${data.domain}</span></p>
                            <div class="modal-meta-row">
                                <a href="${linkedInLink}" target="_blank" class="link-engagement"><i class="fab fa-linkedin"></i> View Engagement</a>
                                <a href="${gitHubLink}" target="_blank" class="link-github"><i class="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                        
                        <div style="background: #f8fafc; padding: 10px; border-radius: 12px; border: 1px solid #e2e8f0; position: relative; display: flex; align-items: center; justify-content: center; min-height: 260px;">
                            <button onclick="prevSlide()" style="${showArrows} position: absolute; left: 15px; top: 50%; transform: translateY(-50%); background: rgba(15,23,42,0.75); color: white; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; z-index: 10; font-size: 18px; align-items: center; justify-content: center; user-select: none;">&#10094;</button>
                            <img id="modalSliderImg" src="${currentProjectImages[0] || ''}" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); object-fit: contain; max-height: 320px;" alt="Project View Container">
                            <button onclick="nextSlide()" style="${showArrows} position: absolute; right: 15px; top: 50%; transform: translateY(-50%); background: rgba(15,23,42,0.75); color: white; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; z-index: 10; font-size: 18px; align-items: center; justify-content: center; user-select: none;">&#10095;</button>
                        </div>
                    </div>
                    
                    <div class="modal-grid-lower">
                        <div>
                            <h3 style="font-size: 1.25rem; margin-bottom: 12px; color: #0f172a;">Project Details</h3>
                            <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; text-align: justify; white-space: pre-line;">${data.desc}</p>
                        </div>
                        ${videoHTML}
                    </div>
                    ${liveDashboardHTML}
                `;
                modal.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove("active");
        modalBody.innerHTML = "";
        document.body.style.overflow = "auto";
        currentProjectImages = [];
    };

    closeBtn.addEventListener("click", closeModal);
    modal.querySelector(".modal-overlay").addEventListener("click", closeModal);

    // =========================================================================
    // 2. Awards & Certification Zoom Lightbox Component
    // =========================================================================
    const lightbox = document.getElementById("customLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const triggers = document.querySelectorAll(".lightbox-trigger");

    function openLightbox(src, alt) {
        lightbox.style.display = "flex";
        lightbox.setAttribute("aria-hidden", "false");
        lightboxImg.src = src;
        lightboxImg.alt = alt;
    }

    window.closeLightbox = function() {
        lightbox.style.display = "none";
        lightbox.setAttribute("aria-hidden", "true");
    };

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            openLightbox(trigger.src, trigger.alt);
        });
        trigger.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(trigger.src, trigger.alt);
            }
        });
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.style.display === "flex") closeLightbox();
    });
});