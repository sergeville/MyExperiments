Objective: Comprehensive Error Tracking and Task Management for Test Failures

Steps:
1. Error Extraction:
   - Scan all test results
   - Identify and extract failed tests and corresponding error logs
   - Collect associated image/screenshot evidence for each error

2. Error Analysis:
   - Review error logs in detail
   - Categorize errors by type (e.g., runtime, assertion, configuration)
   - Determine potential root causes

3. Task Creation:
   - Generate a structured task for each unique error
   - Include fields:
     * Error description
     * Associated test case
     * Severity/Impact level
     * Recommended resolution steps
     * Reference to error log and images

4. Task Management:
   - Save tasks to a structured file (recommended: JSON or CSV)
   - Sort tasks by priority using a predefined ranking system
     * Critical: Immediate fix required
     * High: Significant impact
     * Medium: Moderate concern
     * Low: Minor issue

5. Output:
   - Produce prioritized task list
   - Provide summary of total errors found